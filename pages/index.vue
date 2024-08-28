<template>
  <html>
    <div class="container">
      <!-- <div id="start">START</div> -->
      <div id="leftLink">
        <nuxt-link to="/en/about" class="custom-link">ABOUT ME</nuxt-link>
      </div>
      <div id="rightLink">
        <nuxt-link to="/en/contact" class="custom-link">CONTACT</nuxt-link>
      </div>
      <div id="bottomLink">
        <nuxt-link to="/en/project/projects" class="custom-link">
          <span
            v-for="(char, index) in 'PROJECTS'.split('')"
            :key="index"
            class="project-char"
          >
            {{ char }}
          </span>
        </nuxt-link>
      </div>
      <div id="quote">
        “Develop to solve a Problem <br />- not only to create a Feature.”
      </div>

      <div
        v-for="(textArray, idx) in textArrays"
        :key="idx"
        class="mainText"
        @click="() => animate(idx)"
      >
        <div>
          <span
            v-for="(letter, index) in textArray"
            :key="index"
            :class="[
              'char',
              { separator: letter.isSeparator, normal: !letter.isSeparator },
              letter.styleClass,
            ]"
          >
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
import "assets/index.css";

const router = useRouter();
const currentLocale = ref("en");

const switchLanguage = (lang) => {
  currentLocale.value = lang;
  router.push({ path: `/${lang}` });
};

const texts = [
  "HI MY NAME IS   ",
  "[JOHANNES] [BIESS]  ",
  "AND I AM        ",
  "DEVELOPER       ",
];
const newWords = [
  "DESIGNER",
  "A PROBLEMSOLVER",
  "PROTOTYPER",
  "YOUR NEXT INTERN",
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

const animateOnce = (index) => {
  if (!hasAnimated.value[index]) {
    textArrays.value[index].forEach((item, idx) => {
      if (item.isSeparator) return;
      const step = () => {
        if (item.current !== item.target) {
          item.current = getRandomChar();
          setTimeout(step, 40);
        }
      };
      setTimeout(step, idx * 40);
    });
    hasAnimated.value[index] = true;
  }
};

const animateBottomLineNewWord = () => {
  const bottomIndex = textArrays.value.length - 1;
  const word = newWords.shift();
  newWords.push(word);
  textArrays.value[bottomIndex] = createTextArray(word, maxLength);

  textArrays.value[bottomIndex].forEach((item, idx) => {
    if (item.isSeparator) return;
    const step = () => {
      if (item.current !== item.target) {
        item.current = getRandomChar();
        setTimeout(step, 40);
      }
    };
    setTimeout(step, idx * 40);
  });
};

onMounted(() => {
  textArrays.value.forEach((_, index) => animateOnce(index));
  setInterval(() => {
    animateBottomLineNewWord();
  }, 6000);
});

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

const handleWheel = debounce((event) => {
  if (event.deltaY > 0 && !isAnimating.value) {
    isAnimating.value = true;
    triggerSplitFlapAnimation();
    setTimeout(() => {
      isAnimating.value = false;
    }, 1000);
  }
}, 200);

const isAnimating = ref(false);

const triggerSplitFlapAnimation = () => {
  const projectLinkCharacters = document.querySelectorAll(
    "#projectLink .project-char"
  );
  animateCharacters(projectLinkCharacters);
  textArrays.value.forEach((textArray) => {
    animateCharacters(textArray.map((x) => x.element));
  });
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
</script>

<style scoped></style>
