<template>
  <div>
    <div
      v-for="(textArray, idx) in textArrays"
      :key="idx"
      class="mainText"
      @click="() => animate(idx)"
    >
      <span v-for="(segment, segmentIdx) in textArray" :key="segmentIdx">
        <template
          v-if="segment.isLink && segment.linkTarget.includes('mailto')"
        >
          <a
            href="#"
            class="custom-link hitbox"
            @click.prevent="copyEmailToClipboard"
          >
            <span
              v-for="(letter, index) in segment.letters"
              :key="index"
              :class="[
                'char',
                {
                  separator: letter.isSeparator,
                  normal: !letter.isSeparator && !letter.isLink,
                },
                letter.styleClass,
              ]"
            >
              {{ letter.current }}
            </span>
          </a>
        </template>
        <template v-else-if="segment.isLink">
          <a
            :href="segment.linkTarget"
            class="custom-link hitbox"
            target="_blank"
          >
            <span
              v-for="(letter, index) in segment.letters"
              :key="index"
              :class="[
                'char',
                {
                  separator: letter.isSeparator,
                  normal: !letter.isSeparator && !letter.isLink,
                },
                letter.styleClass,
              ]"
            >
              {{ letter.current }}
            </span>
          </a>
        </template>
        <template v-else>
          <span
            v-for="(letter, index) in segment.letters"
            :key="index"
            :class="[
              'char',
              {
                separator: letter.isSeparator,
                normal: !letter.isSeparator && !letter.isLink,
              },
              letter.styleClass,
            ]"
          >
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
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  texts: {
    type: Array,
    required: true,
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
            linkTarget = "https://de.linkedin.com/in/johannes-biess-8464a21bb";
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

const textArrays = ref(props.texts.map(createTextArray));

const animate = (index) => {
  textArrays.value[index].forEach((segment) => {
    segment.letters.forEach((item, idx) => {
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

onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));

  setInterval(() => {
    resetAndAnimateLinks();
  }, 6000);
});

watch(
  () => props.texts,
  (newTexts) => {
    textArrays.value = newTexts.map(createTextArray);
    textArrays.value.forEach((_, index) => animate(index));
  }
);
</script>

<style scoped>
.mainText {
  margin: var(--spacing-sm) 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extra-light);
  text-align: left;
  line-height: 2rem;
}

.char {
  display: inline-block;
  width: var(--spacing-md-lg);
  height: 1.9rem;
  overflow: hidden;
  font-size: var(--font-size-xxxl);
  line-height: line-height-normal;
  text-align: center;
  vertical-align: bottom;
  color: var(--color-primary);
}

.separator {
  color: var(--color-gray-light);
}

.normal {
  color: var(--color-primary-translucent);
  padding-left: 1px;
}

.custom-style {
  font-weight: var(--font-weight-bold);
  padding-left: 1px;
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

@media (max-width: 480px) {
  .mainText {
    margin: var(--spacing-sm) 0;
    text-align: center;
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
    color: var(--color-primary-translucent);
  }

  .custom-style {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    font-size: var(--font-size-xxxl);
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
    margin: var(--spacing-sm) 0;
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
</style>
