<template>
  <main class="container">
    <EdgeLink position="left" :to="`/${locale}/about`" :label="german ? 'ÜBER MICH' : 'ABOUT ME'" pulse />
    <EdgeLink position="right" :to="`/${locale}/contact`" :label="german ? 'KONTAKT' : 'CONTACT'" pulse />
    <EdgeLink ref="projectsLink" position="bottom" :to="projectsPath" :label="german ? 'PROJEKTE' : 'PROJECTS'" flip pulse />
    <component :is="lineIndex === 1 ? 'h1' : 'div'" v-for="(letters, lineIndex) in textArrays" :key="lineIndex" class="mainText home__line">
      <span class="home__accessible">{{ readableLines[lineIndex] }}</span>
      <span aria-hidden="true">
        <span v-for="(letter, letterIndex) in letters" :key="letterIndex" :class="['char', letter.styleClass, letter.isSeparator ? 'separator' : 'normal']">{{ letter.current }}</span>
      </span>
    </component>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import 'assets/styles/index.scss';

type Letter = { target: string; current: string; isSeparator: boolean; styleClass: string };
const props = defineProps<{ locale: 'de' | 'en' }>();
const german = computed(() => props.locale === 'de');
const projectsPath = useProjectsEntry();
const projectsLink = ref<{ flipChars: () => void } | null>(null);
const texts = german.value
  ? ['HI MEIN NAME IST   ', '[JOHANNES] [BIESS]     ', 'UND ICH BIN        ', 'DESIGNER     ']
  : ['HI MY NAME IS    ', '[JOHANNES] [BIESS]     ', 'AND I AM         ', 'A DESIGNER   '];
const roles = german.value
  ? ['ENTWICKLER', 'EIN PROBLEMLÖSER', 'PROTOTYPER', 'DESIGNER']
  : ['DEVELOPER', 'A PROBLEMSOLVER', 'A PROTOTYPER', 'A DESIGNER'];
const alphabet = german.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZÖÄ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomChar = () => alphabet[Math.floor(Math.random() * alphabet.length)];
const maxLength = Math.max(...texts.map((text) => text.replace(/[\[\]]/g, '').length));
const readableLines = ref(texts.map((text) => text.replace(/[\[\]]/g, '').trim()));

function createTextArray(text: string): Letter[] {
  let styled = false;
  const letters: Letter[] = [];
  for (const char of text.padEnd(maxLength, ' ')) {
    if (char === '[' || char === ']') { styled = char === '['; continue; }
    // Stable initial letters avoid a mismatch between server HTML and hydration.
    const target = char === ' ' ? alphabet[letters.length % alphabet.length] : char;
    letters.push({ target, current: target, isSeparator: char === ' ', styleClass: styled ? 'custom-style' : '' });
  }
  return letters;
}

const textArrays = ref(texts.map(createTextArray));
const animationTimers = new Set<ReturnType<typeof setTimeout>>();
let reducedMotion = false;
let roleIndex = 0;
let timer: ReturnType<typeof setInterval> | undefined;
let motion: MediaQueryList | undefined;
let wheelTimer: ReturnType<typeof setTimeout> | undefined;

function schedule(callback: () => void, delay: number) {
  const handle = setTimeout(() => { animationTimers.delete(handle); callback(); }, delay);
  animationTimers.add(handle);
}

function animate(index: number) {
  if (reducedMotion) return;
  const maxSteps = 13;
  textArrays.value[index].forEach((letter, letterIndex) => {
    letter.current = randomChar();
    let step = 0;
    const flip = () => {
      if (!reducedMotion && letter.current !== letter.target && step < maxSteps) {
        letter.current = randomChar();
        step += 1;
        schedule(flip, 500 / maxSteps);
      } else letter.current = letter.target;
    };
    schedule(flip, letterIndex * (500 / maxSteps));
  });
}

function rotateRole() {
  const word = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
  const bottomIndex = textArrays.value.length - 1;
  readableLines.value[bottomIndex] = word;
  textArrays.value[bottomIndex] = createTextArray(word);
  animate(bottomIndex);
}

function updateMotion() {
  clearInterval(timer);
  reducedMotion = motion?.matches ?? false;
  if (reducedMotion) {
    animationTimers.forEach(clearTimeout);
    animationTimers.clear();
    textArrays.value.forEach((letters) => letters.forEach((letter) => { letter.current = letter.target; }));
  } else timer = setInterval(rotateRole, 3000);
}

// Preserve the original project-link scroll cue without replaying the intro.
function handleWheel(event: WheelEvent) {
  if (event.deltaY <= 0 || reducedMotion) return;
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(() => { projectsLink.value?.flipChars(); }, 200);
}

onMounted(() => {
  motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  motion.addEventListener('change', updateMotion);
  updateMotion();
  textArrays.value.forEach((_, index) => animate(index));
  window.addEventListener('wheel', handleWheel, { passive: true });
});
onBeforeUnmount(() => {
  clearInterval(timer);
  clearTimeout(wheelTimer);
  animationTimers.forEach(clearTimeout);
  window.removeEventListener('wheel', handleWheel);
  motion?.removeEventListener('change', updateMotion);
});
</script>

<style scoped lang="scss">
.home__line {
  padding: var(--spacing--none);
  .char { font-size: max(var(--font__size--minimum), var(--font__size--xxxxl)); }
}
.home__accessible {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>
