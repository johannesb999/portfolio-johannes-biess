<template>
  <div>
    <div v-for="(segments, lineIdx) in textArrays" :key="lineIdx" class="mainText" @click="animate(lineIdx)">
      <component
        :is="segment.isLink ? 'a' : 'span'"
        v-for="(segment, segmentIdx) in segments"
        :key="segmentIdx"
        v-bind="linkAttrs(segment)"
        @click="onSegmentClick(segment, $event)"
      >
        <span
          v-for="(letter, letterIdx) in segment.letters"
          :key="letterIdx"
          class="char"
          :class="[letter.styleClass, letter.isSeparator ? 'separator' : 'normal']"
        >
          {{ letter.current }}
        </span>
      </component>
    </div>

    <div v-if="hasMailLink" class="custom-alert" :class="{ show: showAlert }">
      EMAIL COPIED<br />
      TO CLIPBOARD
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import presets from "@/assets/splitflapPresets.js";

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
    default: "center",
    validator: (v) => ["left", "center", "right", "random"].includes(v),
  },
  // Schlüssel aus assets/splitflapPresets.js (Spaltenzahl je Breakpoint)
  preset: {
    type: String,
    default: null,
  },
});

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ3260";
// Steuerzeichen in den Texten: [] = fett, | @ $ = LinkedIn / Mail / GitHub
const CONTROL = new Set(["[", "]", "|", "@", "$"]);
const LINK_TARGETS = {
  "|": "https://de.linkedin.com/in/johannes-biess",
  "@": "mailto:biessjohannes@gmail.com",
  $: "https://github.com/johannesb999",
};
const EMAIL = "biessjohannes@gmail.com";

const randomChar = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

/* ---------- Text -> Segmente ---------- */

const styleClassFor = (isLink, isStyled) =>
  [isLink ? "link-style" : null, isStyled ? "custom-style" : null].filter(Boolean).join(" ");

const makeLetter = (char, isLink, isStyled) => ({
  target: char === " " ? randomChar() : char,
  current: randomChar(),
  isSeparator: char === " ",
  styleClass: styleClassFor(isLink, isStyled),
});

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

  for (const char of text) {
    if (char === "[" || char === "]") {
      isStyled = !isStyled;
    } else if (LINK_TARGETS[char]) {
      linkTarget = linkTarget === null ? LINK_TARGETS[char] : null;
    } else {
      push(makeLetter(char, linkTarget !== null, isStyled));
    }
  }

  return segments;
}

/* ---------- Auf Spaltenraster bringen ---------- */

const separatorLetters = (count) =>
  Array.from({ length: count }, () => ({
    target: randomChar(),
    current: randomChar(),
    isSeparator: true,
    styleClass: "",
  }));

// Zufällige, aber pro Mount stabile Verschiebung für align="random",
// damit die Zeilen einer Instanz zueinander passen.
const mountSeed = Math.floor(Math.random() * 2147483647);
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
    if (align === "left") start = 0;
    else if (align === "right") start = extra;
    else if (align === "random") {
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
    if (align === "left") left = 0;
    else if (align === "right") left = diff;
    else if (align === "random") left = seededRand(lineIdx, diff + 1);
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
    const width = typeof window === "undefined" ? 1200 : window.innerWidth || 1200;
    const suffix = width <= 480 ? "Mobile" : width <= 1200 ? "Tablet" : "";
    const preset = presets[`${props.preset}${suffix}`] || presets[props.preset];
    if (preset?.columns) return Number(preset.columns);
  }

  return Math.max(...texts.map(visibleLength));
}

/* ---------- Zustand ---------- */

const textArrays = ref([]);
const showAlert = ref(false);

const hasMailLink = computed(() =>
  textArrays.value.some((segments) => segments.some((seg) => seg.linkTarget === LINK_TARGETS["@"]))
);

function rebuild(texts) {
  const normalized = texts.map((t) => (t || "").replace(/\s+/g, " ").trim());
  const columns = resolveColumns(normalized);
  textArrays.value = normalized.map((text, i) => fitToColumns(toSegments(text), columns, props.align, i));
}

/* ---------- Animation ---------- */

// Ein Buchstabe rattert über maxSteps Zufallszeichen, bis er sein Ziel zeigt.
function flip(letter, delay, maxSteps, duration) {
  let step = 0;
  const tick = () => {
    if (letter.current !== letter.target && step < maxSteps) {
      letter.current = randomChar();
      step += 1;
      setTimeout(tick, duration / maxSteps);
    } else {
      letter.current = letter.target;
    }
  };
  setTimeout(tick, delay);
}

function animate(lineIdx) {
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

const isMailLink = (segment) => segment.linkTarget === LINK_TARGETS["@"];

function linkAttrs(segment) {
  if (!segment.isLink) return {};
  if (isMailLink(segment)) return { class: "custom-link hitbox", href: "#" };
  return {
    class: "custom-link hitbox",
    href: segment.linkTarget,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

async function onSegmentClick(segment, event) {
  if (!isMailLink(segment)) return;
  event.preventDefault();

  try {
    await navigator.clipboard.writeText(EMAIL);
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  } catch {
    // Ohne Clipboard-Zugriff (kein sicherer Kontext) das Mailprogramm öffnen
    window.location.href = LINK_TARGETS["@"];
  }
}

/* ---------- Lebenszyklus ---------- */

let linkTimer;

onMounted(() => {
  rebuild(props.texts);
  animateAll();
  // Timer nur, wenn es überhaupt Links zu animieren gibt
  if (textArrays.value.some((segments) => segments.some((seg) => seg.isLink))) {
    linkTimer = setInterval(animateLinks, 6000);
  }
});

onBeforeUnmount(() => {
  if (linkTimer) clearInterval(linkTimer);
});

watch(
  () => [props.texts, props.columns, props.align, props.preset],
  () => {
    rebuild(props.texts);
    animateAll();
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.mainText {
  font-size: var(--font__size--xl);
  font-weight: var(--font__weight--extra-light);
  line-height: 2rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}

.char {
  display: inline-block;
  width: var(--spacing--md-lg);
  height: 1.9rem;
  overflow: hidden;
  font-size: var(--font__size--xxxl);
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
  font-size: var(--font__size--xxxxl);
  font-weight: var(--font__weight--bold);
}

.link-style {
  color: var(--color--primary);
  text-decoration-color: var(--color--accent);
}

// Unterstreichung über die ganze Segmentbreite, damit einzelne Kacheln
// keine Lücken in der Linie lassen
a.custom-link.hitbox {
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: var(--color--accent);
  }
}

.custom-alert {
  position: fixed;
  top: 22rem;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--spacing--sm) var(--spacing--md);
  border-radius: var(--radius--xxs);
  background-color: var(--color--background);
  color: var(--color--primary);
  font-size: var(--font__size--base);
  box-shadow: var(--shadow--light);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: var(--z--alert);

  &.show {
    opacity: 0.9;
  }
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
    font-size: var(--font__size--xxxxl);
  }
}

@include bp.mobile {
  .mainText {
    text-align: center;
    min-width: 100%;
  }

  .char {
    width: var(--spacing--md);
    height: var(--spacing--xxl);
    font-size: var(--font__size--xxxxl);
  }
}

@include bp.mobile-xs {
  .char {
    font-size: var(--font__size--xxl);
  }

  .normal {
    color: var(--color--primary-translucent);
  }
}
</style>
