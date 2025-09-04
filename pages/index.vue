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
          <span v-for="(char, index) in 'PROJECTS'.split('')" :key="index" class="project-char">
            {{ char }}
          </span>
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import "assets/styles/index.scss";

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
  "HI MY NAME IS          ",
  "[JOHANNES] [BIESS]           ",
  "AND I AM               ",
  "A DEVELOPER            ",
];
const newWords = [
  "A DESIGNER",
  "A PROBLEMSOLVER",
  "A PROTOTYPER",
  "YOUR NEXT WORKING STUDENT",
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

:deep(.link-content.animate-scale) {
  animation: fontSizeUpDown 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: 4s;
}

@keyframes fontSizeUpDown {
  0% {
    font-size: 1em;
    color: var(--color-primary);
    text-decoration: none;
  }

  50% {
    font-size: 1.17em;
    color: var(--color-secondary);
    text-decoration: none;
  }

  100% {
    font-size: 1em;
    color: var(--color-primary);
    text-decoration: none;
  }
}
</style>
