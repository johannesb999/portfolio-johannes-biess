<template>
  <div class="container">
    <EdgeLink position="left" to="/de/about" label="ÜBER MICH" pulse />
    <EdgeLink position="right" to="/de/contact" label="KONTAKT" pulse />
    <EdgeLink ref="projectsLink" position="bottom" :to="projectsPath" label="PROJEKTE" flip pulse />

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

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "assets/styles/index.scss";

const texts = [
  "HI MEIN NAME IST   ",
  "[JOHANNES] [BIESS]     ",
  "UND ICH BIN        ",
  "DESIGNER     ",
];
const newWords = [
  "ENTWICKLER",
  "EIN PROBLEMLÖSER",
  "PROTOTYPER",
  "DESIGNER",
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÖÄ";

function getRandomChar() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function createTextArray(text, maxLength) {
  const result = [];
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

// Funktion zur Berechnung der Länge des Textes ohne Klammern
const getTextLengthWithoutBrackets = (text) =>
  text.replace(/\[|\]/g, "").length;

const maxLength = Math.max(...texts.map(getTextLengthWithoutBrackets));
const textArrays = ref(texts.map((text) => createTextArray(text, maxLength)));

const animate = (index) => {
  const maxSteps = 13;
  textArrays.value[index].forEach((item, idx) => {
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

const animateBottomLineNewWord = () => {
  const bottomIndex = textArrays.value.length - 1;
  const word = newWords.shift();
  newWords.push(word);
  textArrays.value[bottomIndex] = createTextArray(word, maxLength);

  textArrays.value[bottomIndex].forEach((item, idx) => {
    let currentStep = 0;
    const maxSteps = 13;

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

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const isAnimating = ref(false);

const handleWheel = debounce((event) => {
  if (event.deltaY > 0 && !isAnimating.value) {
    isAnimating.value = true;
    triggerSplitFlapAnimation();
    setTimeout(() => {
      isAnimating.value = false;
    }, 1000);
  }
}, 200);

// Der Projektlink klappt seine Buchstaben beim Scrollen um; die Komponente
// stellt die Animation als Methode bereit.
// Sichtbare Projekte -> erstes Karussell-Projekt, sonst die Baustellen-Seite
const projectsPath = useProjectsEntry();

const projectsLink = ref(null);

const triggerSplitFlapAnimation = () => {
  projectsLink.value?.flipChars();
  textArrays.value.forEach((_, index) => animate(index));
};

let rotateTimer;

onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));
  rotateTimer = setInterval(animateBottomLineNewWord, 3000);

  window.addEventListener("wheel", handleWheel, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  if (rotateTimer) clearInterval(rotateTimer);
});
</script>
