<template>
  <div class="container">
      
    <div id="start">START</div>
    <div id="aboutLink">
      <nuxt-link to="/en/about" class="custom-link">ABOUT</nuxt-link>
    </div>
    <div id="contactLink">
      <nuxt-link to="/en/contact" class="custom-link">CONTACT</nuxt-link>
    </div>
    <div id="projectLink">
      <nuxt-link to="/en/projects" class="custom-link">
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
          ]"
        >
          {{ letter.current }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLocale = ref('en');

const switchLanguage = (lang) => {
  currentLocale.value = lang;
  router.push({ path: `/${lang}` });
};

const texts = [
  "HI MY NAME IS   ",
  "JOHANNES BIESS  ",
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
  return text
    .padEnd(maxLength, " ")
    .split("")
    .map((char) => ({
      target: char === " " ? getRandomChar() : char,
      current: getRandomChar(),
      isSeparator: char === " ",
    }));
}

const maxLength = Math.max(...texts.map((text) => text.length));
const textArrays = ref(texts.map((text) => createTextArray(text, maxLength)));
const hasAnimated = ref(new Array(texts.length).fill(false));

const animateOnce = (index) => {
  if (!hasAnimated.value[index]) {
    textArrays.value[index].forEach((item, idx) => {
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
  window.addEventListener("wheel", handleWheel);
  textArrays.value.forEach((_, index) => animateOnce(index));
  setInterval(() => {
    animateBottomLineNewWord();
  }, 6000);
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
});

const lastScrollTop = ref(0);
const isAnimating = ref(false);

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
    // Überprüfen, ob nach unten gescrollt wird
    isAnimating.value = true;
    triggerSplitFlapAnimation();
    setTimeout(() => {
      isAnimating.value = false;
    }, 1000); // Stelle sicher, dass die Animation Zeit hat zu beenden
  }
}, 200);

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

<style scoped>
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
}

#start {
  color: #171717;
  font-weight: 300;
  font-size: 2rem;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#projectLink {
  color: #171717;
  font-weight: 700;
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#aboutLink,
#contactLink {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

#aboutLink {
  left: 0;
  padding-left: 20px;
}

#contactLink {
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: #171717;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.char {
  display: inline-block;
  width: 1.5rem;
  height: 2rem;
  overflow: hidden;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: bottom;
}

.separator {
  color: rgb(239, 239, 239);
}

.normal {
  color: #171717;
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

.mainText {
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 200;
  text-align: center;
}

#quote {
  position: absolute;
  bottom: 100px;
  left: 100px;
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
}

.project-char {
  display: inline-block;
  perspective: 1000px;
}

.project-flip {
  animation: projectFlipAnimation 1s ease-in-out;
  transform-origin: center;
}

@keyframes projectFlipAnimation {
  0%,
  100% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(360deg);
  }
}
</style>
