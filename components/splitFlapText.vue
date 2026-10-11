<template>
  <component :is="tag" class="split-flap">
    <span v-for="(segments, lineIdx) in textArrays" :key="lineIdx" class="mainText" @click="animate(lineIdx)">
      <span v-if="!lineHasLinks(segments)" class="split-flap__accessible">{{ readableLines[lineIdx] }}</span>
      <component
        :is="segmentComponent(segment)"
        v-for="(segment, segmentIdx) in segments"
        :key="segmentIdx"
        v-bind="linkAttrs(segment)"
      >
        <span v-if="!segment.isLink && lineHasLinks(segments)" class="split-flap__accessible">{{ segmentText(segment) }}</span>
        <span aria-hidden="true"><span
          v-for="(letter, letterIdx) in segment.letters"
          :key="letterIdx"
          class="char"
          :class="[letter.styleClass, letter.isSeparator ? 'separator' : 'normal']"
        >
          {{ letter.current }}
        </span></span>
      </component>
    </span>
  </component>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import presets from '@/assets/splitflapPresets.js';
import AppLink from '@/components/AppLink.vue';
import EmailContactActions from '@/components/EmailContactActions.vue';

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
  // Feste Spaltenzahl; hat Vorrang vor dem Preset
  columns: {
    type: Number,
    default: null,
  },
  align: {
    type: String,
    default: 'center',
    validator: (v) => ['left', 'center', 'right', 'random'].includes(v),
  },
  // Schlüssel aus assets/splitflapPresets.js (Spaltenzahl je Breakpoint)
  preset: {
    type: String,
    default: null,
  },
  tag: { type: String, default: 'div', validator: (value) => ['div', 'h1', 'h2', 'h3'].includes(value) },
  locale: { type: String, default: 'en', validator: (value) => ['de', 'en'].includes(value) },
});

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ3260';
// Steuerzeichen in den Texten: [] = fett, | @ $ = LinkedIn / Mail / GitHub
const CONTROL = new Set(['[', ']', '|', '@', '$']);
const LINK_TARGETS = {
  '|': 'https://de.linkedin.com/in/johannes-biess',
  '@': 'email',
  $: 'https://github.com/johannesb999',
};

const randomChar = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

/* ---------- Text -> Segmente ---------- */

const styleClassFor = (isLink, isStyled) =>
  [isLink ? 'link-style' : null, isStyled ? 'custom-style' : null].filter(Boolean).join(' ');

const makeLetter = (char, isLink, isStyled, index) => {
  const target = char === ' ' ? ALPHABET[seededRand(index, ALPHABET.length)] : char;
  return { target, current: target, isSeparator: char === ' ', styleClass: styleClassFor(isLink, isStyled) };
};

// Zerlegt eine Zeile in Segmente; ein Segment ist ein Lauf gleicher Link-Zugehörigkeit.
function toSegments(text) {
  const segments = [];
  let isStyled = false;
  let linkTarget = null;

  const push = (letter) => {
    const last = segments[segments.length - 1];
    if (last && last.linkTarget === linkTarget) {
      last.letters.push(letter);
    } else {
      segments.push({ letters: [letter], isLink: linkTarget !== null, linkTarget });
    }
  };

  for (const [index, char] of [...text].entries()) {
    if (char === '[' || char === ']') {
      isStyled = !isStyled;
    } else if (LINK_TARGETS[char]) {
      linkTarget = linkTarget === null ? LINK_TARGETS[char] : null;
    } else {
      push(makeLetter(char, linkTarget !== null, isStyled, index));
    }
  }

  return segments;
}

/* ---------- Auf Spaltenraster bringen ---------- */

const separatorLetters = (count) =>
  Array.from({ length: count }, (_, index) => makeLetter(' ', false, false, index));

// Zufällige, aber pro Mount stabile Verschiebung für align='random',
// damit die Zeilen einer Instanz zueinander passen.
// Repeatable layout and settled letters keep server/client first renders identical.
const mountSeed = props.texts.join('').split('').reduce((seed, char) => ((seed * 31) + char.charCodeAt(0)) >>> 0, 7);
function seededRand(lineIdx, maxExclusive) {
  let h = (mountSeed ^ (lineIdx * 1103515245 + 12345)) >>> 0;
  h = (h * 1664525 + 1013904223) >>> 0;
  return maxExclusive > 0 ? h % maxExclusive : 0;
}

function fitToColumns(segments, targetColumns, align, lineIdx) {
  if (!targetColumns || targetColumns <= 0) return segments;

  // Auf Buchstabenebene zuschneiden/auffüllen, Link-Zuordnung mitführen
  const letters = segments.flatMap((seg) =>
    seg.letters.map((letter) => ({ ...letter, linkTarget: seg.linkTarget }))
  );

  let result = letters;

  if (letters.length > targetColumns) {
    const extra = letters.length - targetColumns;
    let start = Math.floor(extra / 2);
    if (align === 'left') start = 0;
    else if (align === 'right') start = extra;
    else if (align === 'random') {
      // Startpunkte bevorzugen, die keine Wörter zerschneiden
      const validStarts = [];
      for (let s = 0; s <= extra; s++) {
        const leftOk = s === 0 || letters[s - 1].isSeparator;
        const end = s + targetColumns;
        const rightOk = end === letters.length || letters[end].isSeparator;
        if (leftOk && rightOk) validStarts.push(s);
      }
      if (validStarts.length > 0) start = validStarts[seededRand(lineIdx, validStarts.length)];
    }
    result = letters.slice(start, start + targetColumns);
  } else if (letters.length < targetColumns) {
    const diff = targetColumns - letters.length;
    let left = Math.floor(diff / 2);
    if (align === 'left') left = 0;
    else if (align === 'right') left = diff;
    else if (align === 'random') left = seededRand(lineIdx, diff + 1);
    result = [...separatorLetters(left), ...letters, ...separatorLetters(diff - left)];
  }

  // Wieder zu Segmenten gruppieren
  return result.reduce((out, letter) => {
    const { linkTarget = null, ...rest } = letter;
    const last = out[out.length - 1];
    if (last && last.linkTarget === linkTarget) last.letters.push(rest);
    else out.push({ letters: [rest], isLink: linkTarget !== null, linkTarget });
    return out;
  }, []);
}

const visibleLength = (str) => [...str].filter((ch) => !CONTROL.has(ch)).length;

function resolveColumns(texts) {
  if (props.columns > 0) return props.columns;

  if (props.preset) {
    const width = mounted ? window.innerWidth || 1200 : 1200;
    const suffix = width <= 480 ? 'Mobile' : width <= 1200 ? 'Tablet' : '';
    const preset = presets[`${props.preset}${suffix}`] || presets[props.preset];
    if (preset?.columns) return Number(preset.columns);
  }

  return Math.max(...texts.map(visibleLength));
}

/* ---------- Zustand ---------- */

const textArrays = ref([]);
let renderedColumns;
let renderedTexts = [];
let renderedAlign;
let mounted = false;
const reducedMotion = ref(false);
const animationTimers = new Set();
const readableLines = computed(() => props.texts.map((text) => [...(text || '')].filter((char) => !CONTROL.has(char)).join('').replace(/\s+/g, ' ').trim()));

function clearAnimations() {
  animationTimers.forEach(clearTimeout);
  animationTimers.clear();
}

function rebuild(texts, preserveUnchanged = false) {
  const normalized = texts.map((t) => (t || '').replace(/\s+/g, ' ').trim());
  const columns = resolveColumns(normalized);
  const preserveRows = preserveUnchanged && columns === renderedColumns && props.align === renderedAlign;
  if (!preserveRows) clearAnimations();
  const changedLines = [];
  textArrays.value = normalized.map((text, i) => {
    if (preserveRows && text === renderedTexts[i] && textArrays.value[i]) return textArrays.value[i];
    changedLines.push(i);
    return fitToColumns(toSegments(text), columns, props.align, i);
  });
  renderedColumns = columns;
  renderedAlign = props.align;
  renderedTexts = normalized;
  return changedLines;
}

// Beim Wechsel zwischen Desktop und Mobile auch das Spaltenraster aktualisieren.
function handleResize() {
  if (resolveColumns(props.texts) !== renderedColumns) {
    rebuild(props.texts);
    animateAll();
  }
}

/* ---------- Animation ---------- */

// Ein Buchstabe rattert über maxSteps Zufallszeichen, bis er sein Ziel zeigt.
function schedule(callback, delay) {
  const timer = setTimeout(() => { animationTimers.delete(timer); callback(); }, delay);
  animationTimers.add(timer);
}

function flip(letter, delay, maxSteps, duration) {
  let step = 0;
  const tick = () => {
    if (reducedMotion.value) { letter.current = letter.target; return; }
    if (letter.current !== letter.target && step < maxSteps) {
      letter.current = randomChar();
      step += 1;
      schedule(tick, duration / maxSteps);
    } else {
      letter.current = letter.target;
    }
  };
  schedule(tick, delay);
}

function animate(lineIdx) {
  if (!mounted || reducedMotion.value) return;
  const maxSteps = 11;
  textArrays.value[lineIdx].forEach((segment) => {
    segment.letters.forEach((letter, i) => {
      letter.current = randomChar();
      flip(letter, i * (500 / maxSteps), maxSteps, 500);
    });
  });
}

const animateAll = () => textArrays.value.forEach((_, i) => animate(i));

// Nur die Link-Buchstaben blinken regelmäßig nach, damit sie auffallen.
function animateLinks() {
  if (reducedMotion.value) return;
  const maxSteps = 13;
  textArrays.value.forEach((segments) => {
    segments
      .filter((segment) => segment.isLink)
      .forEach((segment) => {
        segment.letters.forEach((letter, i) => {
          letter.current = randomChar();
          flip(letter, i * (500 / maxSteps), maxSteps, 700);
        });
      });
  });
}

/* ---------- Links ---------- */

const isMailLink = (segment) => segment.linkTarget === LINK_TARGETS['@'];
const lineHasLinks = (segments) => segments.some((segment) => segment.isLink);
const segmentText = (segment) => segment.letters.map((letter) => letter.isSeparator ? ' ' : letter.target).join('');
const segmentComponent = (segment) => isMailLink(segment) ? EmailContactActions : segment.isLink ? AppLink : 'span';

function linkAttrs(segment) {
  if (!segment.isLink) return {};
  const shared = { class: 'split-flap__link', 'aria-label': segmentText(segment).trim() };
  if (isMailLink(segment)) return { ...shared, locale: props.locale };
  return {
    ...shared,
    href: segment.linkTarget,
    scale: false,
  };
}

/* ---------- Lebenszyklus ---------- */

let linkTimer;
let motionQuery;

function syncMotionPreference() {
  reducedMotion.value = motionQuery?.matches ?? false;
  if (linkTimer) clearInterval(linkTimer);
  if (reducedMotion.value) {
    clearAnimations();
    textArrays.value.forEach((segments) => segments.forEach((segment) => segment.letters.forEach((letter) => { letter.current = letter.target; })));
  } else if (textArrays.value.some(lineHasLinks)) linkTimer = setInterval(animateLinks, 6000);
}

// Stable text is available in server HTML, before the first animation.
rebuild(props.texts);

onMounted(() => {
  mounted = true;
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  rebuild(props.texts);
  syncMotionPreference();
  animateAll();
  window.addEventListener('resize', handleResize);
  motionQuery.addEventListener('change', syncMotionPreference);
});

onBeforeUnmount(() => {
  clearAnimations();
  window.removeEventListener('resize', handleResize);
  motionQuery?.removeEventListener('change', syncMotionPreference);
  if (linkTimer) clearInterval(linkTimer);
});

watch(
  () => [props.texts, props.columns, props.align, props.preset],
  () => {
    const changedLines = rebuild(props.texts, true);
    if (mounted) syncMotionPreference();
    changedLines.forEach(animate);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.split-flap { margin: var(--spacing--none); min-width: 0; }

.split-flap__accessible {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.mainText {
  display: block;
  font-size: max(var(--font__size--minimum), var(--font__size--xl));
  font-weight: var(--font__weight--extra-light);
  line-height: var(--flap__line-height);
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}

.char {
  display: inline-block;
  width: var(--spacing--md-lg);
  height: var(--flap__height);
  overflow: hidden;
  font-size: max(var(--font__size--minimum), var(--font__size--xxxl));
  text-align: center;
  vertical-align: bottom;
  color: var(--color--primary);
}

.separator {
  color: var(--color--gray-light);
}

.normal {
  padding-left: 1px;
  color: var(--color--black);
}

.custom-style {
  padding-left: 1px;
  color: var(--color--black);
  font-size: max(var(--font__size--minimum), var(--font__size--xxxxl));
  font-weight: var(--font__weight--bold);
}

.link-style {
  color: var(--color--primary);
  text-decoration-color: var(--color--accent);
}

// Unterstreichung über die ganze Segmentbreite, damit einzelne Kacheln
// keine Lücken in der Linie lassen
.split-flap__link {
  margin: var(--spacing--none);
  padding: var(--spacing--none);
  text-decoration: none;
  border-bottom: var(--border__size) solid var(--color--accent);
}

/* Responsive Abweichungen (nur Diffs zur Basis) */
@include bp.scaled-tokens {
  .mainText {
    text-align: center;
    align-content: center;
    min-width: 100%;
  }

  .char {
    width: var(--spacing--lg);
    height: var(--spacing--xxl);
    font-size: max(var(--font__size--minimum), var(--font__size--xxxxl));
  }
}

@include bp.mobile {
  .mainText {
    text-align: center;
    min-width: 100%;
  }

  .char {
    width: max(var(--flap__cell--minimum), var(--spacing--md));
    height: var(--spacing--xxl);
    font-size: max(var(--font__size--minimum), var(--font__size--xxxxl));
  }
}

@include bp.mobile-xs {
  .char {
    font-size: max(var(--font__size--minimum), var(--font__size--xxl));
  }

  .normal {
    color: var(--color--primary-translucent);
  }
}
</style>
