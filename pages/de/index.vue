<template>
  <html lang="de">
  <div class="container">
    <div id="leftLink">
      <nuxt-link to="/de/about" class="custom-link">ÜBER MICH</nuxt-link>
    </div>
    <div id="rightLink">
      <nuxt-link to="/de/contact" class="custom-link">KONTAKT</nuxt-link>
    </div>
    <div id="bottomLink">
      <nuxt-link to="/de/project/projects" class="custom-link">
        <span v-for="(char, index) in 'PROJEKTE'.split('')" :key="index" class="project-char">
          {{ char }}
        </span>
      </nuxt-link>
    </div>

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

  </html>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import "assets/styles/index.scss";

const router = useRouter();
const currentLocale = ref("en");

const switchLanguage = (lang) => {
  currentLocale.value = lang;
  router.push({ path: `/${lang}` });
};

const texts = [
  "HI MEIN NAME IST      ",
  "[JOHANNES] [BIESS]        ",
  "UND ICH BIN           ",
  "ENTWICKLER        ",
];
const newWords = [
  "DESIGNER",
  "EIN PROBLEMLÖSER",
  "PROTOTYPER",
  "IHR NEUER WERKSTUDENT",
  "ENTWICKLER",
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
const hasAnimated = ref(new Array(texts.length).fill(false));

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

const triggerSplitFlapAnimation = () => {
  const projectLinkCharacters = document.querySelectorAll(
    "#bottomLink .project-char"
  );

  animateCharacters(projectLinkCharacters);
  textArrays.value.forEach((textArray, index) => animate(index));
};

const animateCharacters = (characters) => {
  characters.forEach((char, index) => {
    setTimeout(() => {
      char.classList.add("project-flip");
      setTimeout(() => {
        char.classList.remove("project-flip");
      }, 600);
    }, index * 100);
  });
};

onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));
  setInterval(() => {
    animateBottomLineNewWord();
  }, 3000);

  window.addEventListener("wheel", handleWheel);
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
});
</script>

<style scoped>
.project-flip {
  animation: flip 0.6s forwards;
}

@keyframes flip {
  0% {
    transform: rotateX(0);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(0);
  }
}
</style>
