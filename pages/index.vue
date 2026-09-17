<template>
  <div class="container">
    <EdgeLink position="left" to="/en/about" label="ABOUT ME" pulse />
    <EdgeLink position="right" to="/en/contact" label="CONTACT" pulse />
    <EdgeLink ref="projectsLink" position="bottom" :to="projectsPath" label="PROJECTS" flip pulse />

    <div v-for="(textArray, idx) in textArrays" :key="idx" class="mainText" @click="() => animate(idx)">
      <div>
        <span v-for="(letter, index) in textArray" :key="index" :class="[
          'char',
          { separator: letter.isSeparator, normal: !letter.isSeparator },
          letter.styleClass,
        ]">
          {{ letter.current }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useHead } from "#imports";
import "assets/styles/index.scss";

type Letter = {
  target: string;
  current: string;
  isSeparator: boolean;
  styleClass: string;
};

// Reactive list of image URLs (filled from server route)
const prefetchUrls = ref<string[]>([]);

// Add prefetch links reactively, low priority, no decoding
useHead({
  link: computed(() =>
    prefetchUrls.value.map((href) => ({
      rel: "prefetch",
      as: "image",
      href,
      key: `prefetch-${href}`,
    }))
  ),
});

// Also serve this page at "/en" so both "/" and "/en" show the same landing view.
definePageMeta({
  alias: ["/en"],
});

// Der Projektlink klappt seine Buchstaben beim Scrollen um; die Komponente
// stellt die Animation als Methode bereit.
// Sichtbare Projekte -> erstes Karussell-Projekt, sonst die Baustellen-Seite
const projectsPath = useProjectsEntry();

const projectsLink = ref<{ flipChars: () => void } | null>(null);

const texts: string[] = [
  "HI MY NAME IS    ",
  "[JOHANNES] [BIESS]     ",
  "AND I AM         ",
  "A DESIGNER   ",
];
const newWords: string[] = [
  "DEVELOPER",
  "A PROBLEMSOLVER",
  "A PROTOTYPER",
  "A DESIGNER",
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomChar(): string {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function createTextArray(text: string, maxLength: number): Letter[] {
  const result: Letter[] = [];
  let inStyledWord = false;

  for (let char of text.padEnd(maxLength, " ")) {
    if (char === "[") {
      inStyledWord = true;
      continue;
    }
    if (char === "]") {
      inStyledWord = false;
      continue;
    }

    result.push({
      target: char === " " ? getRandomChar() : char,
      current: getRandomChar(),
      isSeparator: char === " ",
      styleClass: inStyledWord ? "custom-style" : "",
    });
  }

  return result;
}

const getTextLengthWithoutBrackets = (text: string) =>
  text.replace(/\[|\]/g, "").length;

const maxLength = Math.max(...texts.map(getTextLengthWithoutBrackets));
const textArrays = ref<Letter[][]>(
  texts.map((text: string) => createTextArray(text, maxLength))
);

const animate = (index: number) => {
  const maxSteps = 13;
  textArrays.value[index].forEach((item: Letter, idx: number) => {
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
};

const animateBottomLineNewWord = (): void => {
  const bottomIndex = textArrays.value.length - 1;
  const word = newWords.shift();
  newWords.push(word);
  textArrays.value[bottomIndex] = createTextArray(word as string, maxLength);

  textArrays.value[bottomIndex].forEach((item: Letter, idx: number) => {
    let currentStep = 0;
    const maxSteps = 12;

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
};

const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      if (timeout) clearTimeout(timeout);
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const isAnimating = ref(false);

const handleWheel = debounce((event: WheelEvent) => {
  if (event.deltaY > 0 && !isAnimating.value) {
    isAnimating.value = true;
    triggerSplitFlapAnimation();
    setTimeout(() => {
      isAnimating.value = false;
    }, 1000);
  }
}, 200);

const triggerSplitFlapAnimation = (): void => {
  projectsLink.value?.flipChars();
  textArrays.value.forEach((_: Letter[], index: number) => animate(index));
};

let rotateTimer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));
  rotateTimer = setInterval(animateBottomLineNewWord, 3000);

  window.addEventListener("wheel", handleWheel, { passive: true });


  // Fetch image list from server and trigger prefetch hints
  // Uses low-priority browser prefetch, does not block animation
  $fetch<string[]>("/api/images")
    .then((urls) => {
      prefetchUrls.value = urls || [];
    })
    .catch(() => {
      // ignore errors; prefetch is best-effort
    });
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  if (rotateTimer) clearInterval(rotateTimer);
});
</script>

