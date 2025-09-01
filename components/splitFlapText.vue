<template>
  <div ref="containerEl" :style="styleVars">
    <div v-for="(textArray, idx) in textArrays" :key="idx" class="mainText" @click="() => animate(idx)">
      <span v-for="(segment, segmentIdx) in textArray" :key="segmentIdx">
        <template v-if="segment.isLink && segment.linkTarget.includes('mailto')">
          <a href="#" class="custom-link hitbox" @click.prevent="copyEmailToClipboard">
            <span v-for="(letter, index) in segment.letters" :key="index" :class="[
              'char',
              {
                separator: letter.isSeparator,
                normal: !letter.isSeparator && !letter.isLink,
              },
              letter.styleClass,
            ]">
              {{ letter.current }}
            </span>
          </a>
        </template>
        <template v-else-if="segment.isLink">
          <a :href="segment.linkTarget" class="custom-link hitbox" target="_blank">
            <span v-for="(letter, index) in segment.letters" :key="index" :class="[
              'char',
              {
                separator: letter.isSeparator,
                normal: !letter.isSeparator && !letter.isLink,
              },
              letter.styleClass,
            ]">
              {{ letter.current }}
            </span>
          </a>
        </template>
        <template v-else>
          <span v-for="(letter, index) in segment.letters" :key="index" :class="[
            'char',
            {
              separator: letter.isSeparator,
              normal: !letter.isSeparator && !letter.isLink,
            },
            letter.styleClass,
          ]">
            {{ letter.current }}
          </span>
        </template>
      </span>
    </div>
    <!-- Benachrichtigung mit dynamischer Klasse -->
    <div :class="['custom-alert', { show: showAlert }]">
      EMAIL COPIED<br />
      TO CLIPBOARD
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick, onBeforeUnmount } from "vue";
import presets from "@/assets/splitflapPresets.js";

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
  columns: {
    type: Number,
    default: null,
  },
  align: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right"].includes(v),
  },
  preset: {
    type: String,
    default: null,
  },
  fillContainer: {
    type: Boolean,
    default: false,
  },
  fit: {
    type: String,
    default: "shrink", // 'shrink' | 'truncate'
    validator: (v) => ["shrink", "truncate"].includes(v),
  },
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ3260";
const showAlert = ref(false);

function getRandomChar() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function createTextArray(text) {
  let segments = [];
  let currentSegment = {
    letters: [],
    isLink: false,
    linkTarget: null,
    styleClass: "",
  };
  let inStyledWord = false;
  let inLink = false;
  let linkTarget = null;

  text.split("").forEach((char) => {
    if (char === "[" || char === "]") {
      inStyledWord = !inStyledWord;
      return;
    }

    if (char === "|" || char === "@" || char === "$") {
      if (!inLink) {
        inLink = true;
        switch (char) {
          case "|":
            linkTarget = "https://de.linkedin.com/in/johannes-biess";
            break;
          case "@":
            linkTarget = "mailto:biessjohannes@gmail.com";
            break;
          case "$":
            linkTarget = "https://github.com/johannesb999";
            break;
        }
      } else {
        inLink = false;
        linkTarget = null;
      }
      if (currentSegment.letters.length > 0) {
        segments.push(currentSegment);
        currentSegment = {
          letters: [],
          isLink: inLink,
          linkTarget: linkTarget,
          styleClass:
            inLink && inStyledWord
              ? "link-style custom-style"
              : inLink
                ? "link-style"
                : inStyledWord
                  ? "custom-style"
                  : "",
        };
      }
      return;
    }

    if (currentSegment.isLink !== inLink) {
      if (currentSegment.letters.length > 0) {
        segments.push(currentSegment);
      }
      currentSegment = {
        letters: [],
        isLink: inLink,
        linkTarget: linkTarget,
        styleClass:
          inLink && inStyledWord
            ? "link-style custom-style"
            : inLink
              ? "link-style"
              : inStyledWord
                ? "custom-style"
                : "",
      };
    }

    const letterObj = {
      target: char === " " ? getRandomChar() : char,
      current: getRandomChar(),
      isSeparator: char === " ",
      isLink: inLink,
      linkTarget: linkTarget,
      styleClass:
        inLink && inStyledWord
          ? "link-style custom-style"
          : inLink
            ? "link-style"
            : inStyledWord
              ? "custom-style"
              : "",
    };
    currentSegment.letters.push(letterObj);
  });

  if (currentSegment.letters.length > 0) {
    segments.push(currentSegment);
  }

  return segments;
}

// length helpers
function segmentsVisibleLength(segments) {
  return segments.reduce((sum, seg) => sum + (seg?.letters?.length || 0), 0);
}

function createSeparatorSegment(count) {
  return {
    letters: Array.from({ length: count }, () => ({
      target: getRandomChar(),
      current: getRandomChar(),
      isSeparator: true,
      isLink: false,
      linkTarget: null,
      styleClass: "",
    })),
    isLink: false,
    linkTarget: null,
    styleClass: "",
  };
}

function padSegments(segments, targetColumns, align = "center") {
  const currentLen = segmentsVisibleLength(segments);
  if (!targetColumns || currentLen >= targetColumns) return segments;
  const diff = targetColumns - currentLen;
  let left = 0;
  let right = 0;
  if (align === "left") right = diff;
  else if (align === "right") left = diff;
  else {
    left = Math.floor(diff / 2);
    right = diff - left;
  }
  const leftSeg = left > 0 ? [createSeparatorSegment(left)] : [];
  const rightSeg = right > 0 ? [createSeparatorSegment(right)] : [];
  return [...leftSeg, ...segments, ...rightSeg];
}

function copyEmailToClipboard() {
  const email = "biessjohannes@gmail.com";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 2000);
      })
      .catch((err) => {
        console.error("Konnte den Text nicht kopieren: ", err);
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = email;

    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 2000);
      } else {
        console.error("Konnte den Text nicht kopieren");
      }
    } catch (err) {
      console.error("Oops, konnte den Text nicht kopieren: ", err);
    }

    document.body.removeChild(textArea);
  }
}

// layout state
const containerEl = ref(null);
const tileWidth = ref(null); // px (override)
const tileScale = ref(1);
const styleVars = computed(() => {
  const vars = {};
  if (tileWidth.value != null) vars["--tile-width"] = `${tileWidth.value}px`;
  if (tileScale.value !== 1) vars["--tile-scale"] = `${tileScale.value}`;
  return vars;
});

const rawArrays = ref(props.texts.map(createTextArray));
const textArrays = ref([]);
const currentColumns = ref(0);
const baseCharWidth = ref(null);
const lastBpSuffix = ref('');

function createSeparatorLetters(count) {
  return Array.from({ length: count }, () => ({
    target: getRandomChar(),
    current: getRandomChar(),
    isSeparator: true,
    isLink: false,
    linkTarget: null,
    styleClass: "",
  }));
}

function fitSegmentsToColumns(segments, targetColumns, align = "center") {
  if (!targetColumns || targetColumns <= 0) return segments;

  // flatten letters preserving link grouping info
  const letters = [];
  segments.forEach((seg) => {
    const isLink = !!seg.isLink;
    const linkTarget = seg.linkTarget || null;
    seg.letters.forEach((lt) => {
      letters.push({ ...lt, _isLink: isLink, _linkTarget: linkTarget });
    });
  });

  let currentLen = letters.length;
  let result = letters;

  if (currentLen > targetColumns) {
    const extra = currentLen - targetColumns;
    let start = 0;
    if (align === 'right') start = extra;
    else if (align === 'center') start = Math.floor(extra / 2);
    // left align keeps start=0
    result = letters.slice(start, start + targetColumns);
    currentLen = targetColumns;
  } else if (currentLen < targetColumns) {
    const diff = targetColumns - currentLen;
    let left = 0, right = 0;
    if (align === 'left') right = diff;
    else if (align === 'right') left = diff;
    else { left = Math.floor(diff / 2); right = diff - left; }
    const leftSep = createSeparatorLetters(left);
    const rightSep = createSeparatorLetters(right);
    result = [...leftSep, ...letters, ...rightSep];
    currentLen = targetColumns;
  }

  // regroup into segments by link grouping
  const out = [];
  let curSeg = null;
  result.forEach((lt) => {
    const isLink = !!lt._isLink;
    const linkTarget = lt._linkTarget || null;
    if (!curSeg || curSeg.isLink !== isLink || curSeg.linkTarget !== linkTarget) {
      curSeg = { letters: [], isLink, linkTarget, styleClass: '' };
      out.push(curSeg);
    }
    // drop internal markers
    const { _isLink, _linkTarget, ...clean } = lt;
    curSeg.letters.push(clean);
  });
  return out;
}

function rebuildPaddedArrays() {
  const source = textArrays.value && textArrays.value.length ? textArrays.value : rawArrays.value;
  textArrays.value = source.map((segments) => fitSegmentsToColumns(segments, currentColumns.value, props.align));
}

function reanimateAll() {
  textArrays.value.forEach((segments, lineIdx) => {
    segments.letters && segments.letters.forEach?.(() => {}); // noop guard
  });
  // reset current for every letter to force animation
  textArrays.value.forEach((segments) => {
    segments.forEach?.(() => {}); // backward guard
  });
  textArrays.value.forEach((segmentGroup) => {
    segmentGroup.forEach((seg) => {
      seg.letters.forEach((lt) => {
        lt.current = getRandomChar();
      });
    });
  });
  textArrays.value.forEach((_, index) => animate(index));
}

function defaultCharWidth() {
  const root = containerEl.value;
  if (!root) return null;
  const el = root.querySelector('.char');
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return rect.width || null;
}

function containerWidth() {
  const root = containerEl.value;
  if (!root) return null;
  return root.clientWidth || root.getBoundingClientRect().width || null;
}

function breakpointSuffix() {
  if (typeof window === 'undefined') return '';
  const w = window.innerWidth || 1200;
  if (w <= 480) return 'Mobile';
  if (w <= 1200) return 'Tablet';
  return '';
}

function resolvePresetColumns() {
  if (!props.preset) return null;
  const suffix = breakpointSuffix();
  const key = suffix ? `${props.preset}${suffix}` : props.preset;
  const p = presets[key] || presets[props.preset];
  return p?.columns ? Number(p.columns) : null;
}

function recomputeLayout() {
  // Do NOT rebuild raw arrays here to avoid resetting letters during resize

  const explicit = typeof props.columns === 'number' && props.columns > 0 ? props.columns : null;
  const fromPreset = resolvePresetColumns();
  const targetCols = explicit ?? fromPreset ?? (rawArrays.value || []).reduce((m, segs) => Math.max(m, segmentsVisibleLength(segs)), 0);
  currentColumns.value = targetCols;
  rebuildPaddedArrays();

  // responsive fitting
  const cW = containerWidth();
  const dW = defaultCharWidth();
  // track breakpoint changes to refresh base width lazily
  const bp = breakpointSuffix();
  if (bp !== lastBpSuffix.value) {
    lastBpSuffix.value = bp;
    baseCharWidth.value = null; // force refresh at new breakpoint
  }
  // capture natural base width only when no override is applied
  if (baseCharWidth.value == null && tileWidth.value == null && dW) {
    baseCharWidth.value = dW;
  }
  if (!cW || !targetCols || !dW) {
    tileWidth.value = null;
    tileScale.value = 1;
    return;
  }
  const needed = Math.floor(cW / targetCols);
  const base = baseCharWidth.value || dW;
  const EPS = 1; // 1px hysteresis to avoid jitter
  if (props.fit === 'shrink' && needed < base - EPS) {
    tileWidth.value = Math.max(1, needed);
    // scale relative to natural base width for stability
    tileScale.value = tileWidth.value / base;
  } else if (props.fit === 'truncate') {
    tileWidth.value = null;
    tileScale.value = 1;
  } else {
    // If we previously shrank, only release if we clearly exceed base (with hysteresis)
    if (tileWidth.value != null && needed < base - EPS) {
      // keep current shrink
      tileWidth.value = Math.max(1, needed);
      tileScale.value = tileWidth.value / base;
    } else {
      tileWidth.value = null;
      tileScale.value = 1;
    }
  }
}

const animate = (index) => {
  textArrays.value[index].forEach((segment) => {
    segment.letters.forEach((item, idx) => {
      // seed current to random to ensure visible start of animation
      item.current = getRandomChar();
      const maxSteps = 11;
      let currentStep = 0;

      const step = () => {
        if (item.current !== item.target && currentStep < maxSteps) {
          item.current = getRandomChar();
          currentStep++;
          setTimeout(step, 500 / maxSteps);
        } else {
          item.current = item.target;
        }
      };
      setTimeout(step, idx * (500 / maxSteps));
    });
  });
};

// Funktion zum Zurücksetzen und erneuten Animieren der Link-Buchstaben
const resetAndAnimateLinks = () => {
  textArrays.value.forEach((textArray) => {
    textArray.forEach((segment) => {
      if (segment.isLink) {
        segment.letters.forEach((item) => {
          item.current = getRandomChar();
        });
      }
    });
  });

  // Nach dem Zurücksetzen animieren
  textArrays.value.forEach((textArray) => {
    textArray.forEach((segment) => {
      if (segment.isLink) {
        segment.letters.forEach((item, idx) => {
          const maxSteps = 13;
          let currentStep = 0;

          const step = () => {
            if (item.current !== item.target && currentStep < maxSteps) {
              item.current = getRandomChar();
              currentStep++;
              setTimeout(step, 700 / maxSteps);
            } else {
              item.current = item.target;
            }
          };
          setTimeout(step, idx * (500 / maxSteps));
        });
      }
    });
  });
};

let resizeObs = null;
let resizeTimer = null;
function debouncedRecompute() {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // no-op to preserve original behavior (no resize-driven rebuild)
  }, 120);
}

function normalizeInput(t) { return (t || '').replace(/\s+/g, ' ').trim(); }
const CONTROL = new Set(["[", "]", "|", "@", "$"]);
function visibleLength(str) { let c=0; for (const ch of str) if (!CONTROL.has(ch)) c++; return c; }
function suffixForViewport() { if (typeof window==='undefined') return ''; const w=window.innerWidth||1200; if (w<=480) return 'Mobile'; if (w<=1200) return 'Tablet'; return ''; }
function resolveColumnsSimple(texts) {
  if (typeof props.columns === 'number' && props.columns>0) return props.columns;
  if (props.preset) { const suf=suffixForViewport(); const key=suf?`${props.preset}${suf}`:props.preset; const p=presets[key]||presets[props.preset]; if (p?.columns) return Number(p.columns); }
  return Math.max(...texts.map((t)=>visibleLength(t)));
}
function stripVisible(s, drop, fromStart){ if(drop<=0) return s; let res=[],d=0; const it=fromStart?[...s]:[...s].reverse(); for(const ch of it){ if(!CONTROL.has(ch)&&d<drop){d++; continue;} res.push(ch);} return fromStart?res.join(""):res.reverse().join(""); }
function padOrTrim(text, targetCols, align='center'){
  const len = visibleLength(text);
  if (len===targetCols) return text;
  if (len<targetCols){ const diff=targetCols-len; let left=0,right=0; if(align==='left') right=diff; else if(align==='right') left=diff; else { left=Math.floor(diff/2); right=diff-left;} return `${' '.repeat(left)}${text}${' '.repeat(right)}`; }
  const extra=len-targetCols; let dropL=0, dropR=0; if(align==='left') dropR=extra; else if(align==='right') dropL=extra; else { dropL=Math.floor(extra/2); dropR=extra-dropL; }
  let out=stripVisible(text, dropL, true); out=stripVisible(out, dropR, false); return out;
}
function rebuildFromTexts(newTexts){
  const normalized = newTexts.map(normalizeInput);
  const cols = resolveColumnsSimple(normalized);
  const padded = normalized.map((t)=>padOrTrim(t, cols, props.align));
  textArrays.value = padded.map(createTextArray);
}

onMounted(() => {
  rebuildFromTexts(props.texts);
  textArrays.value.forEach((_, index) => animate(index));

  setInterval(() => {
    resetAndAnimateLinks();
  }, 6000);

});

watch(
  () => props.texts,
  (newTexts) => {
    rebuildFromTexts(newTexts);
    textArrays.value.forEach((_, index) => animate(index));
  },
  { deep: true }
);

watch(
  () => [props.columns, props.align, props.preset],
  () => {
    rebuildFromTexts(props.texts);
    textArrays.value.forEach((_, index) => animate(index));
  }
);

onBeforeUnmount(() => {
  if (resizeObs) {
    try { resizeObs.disconnect(); } catch (e) { }
    resizeObs = null;
  }
  if (typeof window !== 'undefined') window.removeEventListener('resize', debouncedRecompute);
  if (resizeTimer) { clearTimeout(resizeTimer); resizeTimer = null; }
});
</script>

<style scoped>
.mainText {
  margin-top: var(--spacing-sm) 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extra-light);
  text-align: left;
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
}

.char {
  display: inline-block;
  width: var(--tile-width, var(--spacing-md-lg));
  height: 1.9rem;
  overflow: hidden;
  font-size: calc(var(--font-size-xxxl) * var(--tile-scale, 1));
  line-height: line-height-normal;
  text-align: center;
  vertical-align: bottom;
  color: var(--color-primary);
  font-optical-sizing: auto;
}

.separator {
  color: var(--color-gray-light);
  font-optical-sizing: auto;
}

.normal {
  color: var(--color-black);
  padding-left: 1px;
  font-optical-sizing: auto;
}

.custom-style {
  font-weight: var(--font-weight-bold);
  padding-left: 1px;
  color: var(--color-black);
  font-size: calc(var(--font-size-xxxxl) * var(--tile-scale, 1));
  font-optical-sizing: auto;
}

.link-style {
  color: var(--color-primary);
  text-decoration-color: var(--color-accent);
}

a.custom-link.hitbox {
  position: relative;
  text-decoration: none;
}

a.custom-link.hitbox::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--color-accent);
  bottom: 0em;
}

.char.flip {
  animation: flap 1s ease-in-out forwards;
}

@keyframes flap {

  0%,
  100% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(360deg);
  }
}

.custom-alert {
  position: fixed;
  top: 22rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background);
  color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 5px;
  box-shadow: var(--box-shadow-light);
  font-size: var(--font-size-base);
  z-index: var(--z-index-alert);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.custom-alert.show {
  opacity: 0.9;
}

@media (max-width: 480px) {
  .mainText {
    margin-top: var(--spacing-sm) 0;
    text-align: center;
    min-width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  .char {
    display: inline-block;
    width: var(--tile-width, var(--spacing-md));
    height: var(--spacing-xxl);
    overflow: hidden;
    font-size: calc(var(--font-size-xxxxl) * var(--tile-scale, 1));
    text-align: center;
    vertical-align: bottom;
    color: var(--color-primary);
    font-optical-sizing: auto;
  }

  .separator {
    color: var(--color-gray-light);
  }

  .normal {
    color: var(--color-black);
  }

  .custom-style {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    font-size: calc(var(--font-size-xxxxl) * var(--tile-scale, 1));
  }

  .link-style {
    color: var(--color-primary);
    text-decoration-color: var(--color-accent);
  }

  a.custom-link.hitbox {
    position: relative;
    text-decoration: none;
  }

  a.custom-link.hitbox::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-accent);
    bottom: 0em;
  }

  .char.flip {
    animation: flap 1s ease-in-out forwards;
  }

  @keyframes flap {

    0%,
    100% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(360deg);
    }
  }

  .custom-alert {
    position: fixed;
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-background);
    color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 5px;
    box-shadow: var(--box-shadow-light);
    font-size: var(--font-size-base);
    z-index: var(--z-index-alert);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .custom-alert.show {
    opacity: 0.9;
  }
}

@media (max-width: 320px) {
  .mainText {
    margin-top: var(--spacing-sm) 0;
    text-align: center;
    min-width: 100%;
  }

  .char {
    display: inline-block;
    width: var(--spacing-md);
    height: var(--spacing-xxl);
    overflow: hidden;
    font-size: var(--font-size-xxl);
    text-align: center;
    vertical-align: bottom;
    color: var(--color-primary);
    font-optical-sizing: auto;
  }

  .separator {
    color: var(--color-gray-light);
  }

  .normal {
    color: var(--color-primary-translucent);
  }

  .custom-style {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    font-size: var(--font-size-xxxxl);
  }

  .link-style {
    color: var(--color-primary);
    text-decoration-color: var(--color-accent);
  }

  a.custom-link.hitbox {
    position: relative;
    text-decoration: none;
  }

  a.custom-link.hitbox::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-accent);
    bottom: 0em;
  }

  .char.flip {
    animation: flap 1s ease-in-out forwards;
  }

  @keyframes flap {

    0%,
    100% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(360deg);
    }
  }

  .custom-alert {
    position: fixed;
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-background);
    color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 5px;
    box-shadow: var(--box-shadow-light);
    font-size: var(--font-size-base);
    z-index: var(--z-index-alert);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .custom-alert.show {
    opacity: 0.9;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .mainText {
    margin-top: var(--spacing-sm) 0;
    text-align: center;
    align-content: center;
    min-width: 100%;
  }

  .char {
    display: inline-block;
    width: var(--spacing-lg);
    height: var(--spacing-xxl);
    overflow: hidden;
    font-size: var(--font-size-xxxxl);
    text-align: center;
    vertical-align: bottom;
    color: var(--color-primary);
  }

  .separator {
    color: var(--color-gray-light);
  }

  .normal {
    color: var(--color-black);
  }

  .custom-style {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    font-size: var(--font-size-xxxxl);
  }

  .link-style {
    color: var(--color-primary);
    text-decoration-color: var(--color-accent);
  }

  a.custom-link.hitbox {
    position: relative;
    text-decoration: none;
  }

  a.custom-link.hitbox::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-accent);
    bottom: 0em;
  }

  .char.flip {
    animation: flap 1s ease-in-out forwards;
  }

  @keyframes flap {

    0%,
    100% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(360deg);
    }
  }

  .custom-alert {
    position: fixed;
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-background);
    color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 5px;
    box-shadow: var(--box-shadow-light);
    font-size: var(--font-size-base);
    z-index: var(--z-index-alert);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .custom-alert.show {
    opacity: 0.9;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .mainText {
    margin-top: var(--spacing-sm) 0;
    text-align: center;
    align-content: center;
    min-width: 100%;
  }

  .char {
    display: inline-block;
    width: var(--spacing-lg);
    height: var(--spacing-xxl);
    overflow: hidden;
    font-size: var(--font-size-xxxxl);
    text-align: center;
    vertical-align: bottom;
    color: var(--color-primary);
  }

  .separator {
    color: var(--color-gray-light);
  }

  .normal {
    color: var(--color-black);
  }

  .custom-style {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    font-size: var(--font-size-xxxxl);
  }

  .link-style {
    color: var(--color-primary);
    text-decoration-color: var(--color-accent);
  }

  a.custom-link.hitbox {
    position: relative;
    text-decoration: none;
  }

  a.custom-link.hitbox::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-accent);
    bottom: 0em;
  }

  .char.flip {
    animation: flap 1s ease-in-out forwards;
  }

  @keyframes flap {

    0%,
    100% {
      transform: rotateX(0deg);
    }

    50% {
      transform: rotateX(360deg);
    }
  }

  .custom-alert {
    position: fixed;
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-background);
    color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 5px;
    box-shadow: var(--box-shadow-light);
    font-size: var(--font-size-base);
    z-index: var(--z-index-alert);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .custom-alert.show {
    opacity: 0.9;
  }
}
</style>
