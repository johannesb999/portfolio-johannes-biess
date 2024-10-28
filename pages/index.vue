<template>
  <html lang="eng">
    <div class="container">
      <div id="leftLink" ref="leftLink">
        <nuxt-link to="/en/about" class="custom-link">
          <span class="link-content">ABOUT ME</span>
        </nuxt-link>
      </div>
      <div id="rightLink" ref="rightLink">
        <nuxt-link to="/en/contact" class="custom-link">
          <span class="link-content">CONTACT</span>
        </nuxt-link>
      </div>
      <div id="bottomLink" ref="bottomLink">
        <nuxt-link to="/en/project/projects" class="custom-link">
          <span class="link-content">
            <span
              v-for="(char, index) in 'PROJECTS'.split('')"
              :key="index"
              class="project-char"
            >
              {{ char }}
            </span>
          </span>
        </nuxt-link>
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

const leftLink = ref(null);
const rightLink = ref(null);
const bottomLink = ref(null);

const texts = [
  "HI MY NAME IS   ",
  "[JOHANNES] [BIESS]    ",
  "AND I AM        ",
  "A DEVELOPER       ",
];
const newWords = [
  "A DESIGNER",
  "A PROBLEMSOLVER",
  "A PROTOTYPER",
  "YOUR NEXT INTERN",
  "A DEVELOPER",
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

  // Fügen Sie die Animation zu den .link-content-Elementen hinzu
  [leftLink.value, rightLink.value, bottomLink.value].forEach((element) => {
    if (element) {
      const linkContent = element.querySelector(".link-content");
      if (linkContent) {
        linkContent.classList.add("animate-scale");
      }
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
});
</script>

<style scoped>
.project-flip {
  animation: flip 0.6s forwards;
  color: var(--color-black);
  text-decoration: none;
  display: inline-block;
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

.project-flip.custom-link:hover {
  transform: scale(1.1);
  color: var(--color-hover); /* Die Farbe beim Hover bleibt erhalten */
}

:deep(.link-content.animate-scale) {
  animation: fontSizeUpDown 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: 4s;
}

@keyframes fontSizeUpDown {
  0% {
    font-size: 1em;
    text-decoration: none;
  }

  50% {
    font-size: 1.17em;
    color: var(--color-secondary);
    text-decoration: none;
  }
  100% {
    font-size: 1em;
    text-decoration: none;
  }
}

/* Grundstil für .project-char */
.project-char {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Standardfarbe */
#bottomLink .project-char {
  color: var(--color-black);
}

#bottomLink:hover .project-char {
  color: transparent;
  background-image: linear-gradient(
    150deg,
    #f25022 25%,
    #7fba00 25%,
    #7fba00 50%,
    #00a4ef 50%,
    #00a4ef 75%,
    #ffb900 75%
  );
  background-size: calc(100% * 8) 100%;
  -webkit-background-clip: text;
  background-clip: text;
}

#bottomLink .project-char:nth-child(1) {
  background-position: calc(0 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(2) {
  background-position: calc(1 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(3) {
  background-position: calc(2 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(4) {
  background-position: calc(3 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(5) {
  background-position: calc(4 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(6) {
  background-position: calc(5 / 8 * 100%) 0;
}
#bottomLink .project-char:nth-child(7) {
  background-position: calc(6 / 6 * 100%) 0;
}
#bottomLink .project-char:nth-child(8) {
  background-position: calc(7 / 7 * 100%) 0;
}
</style>
