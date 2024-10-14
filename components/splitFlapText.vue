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
      const maxSteps = 13;
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
.split-flap-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mainText {
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: left;
  line-height: 2rem;
}

.char {
  display: inline-block;
  width: 1.3rem;
  height: 1.9rem;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  vertical-align: bottom;
  color: #171717;
}

.separator {
  color: #00000023;
}

.normal {
  color: #171717b0;
  padding-left: 1px;
}

.custom-style {
  font-weight: 700;
  padding-left: 1px;
  color: #000000;
  font-size: x-large;
}

.link-style {
  color: #171717;
  text-decoration-color: #afafaf;
}

a.custom-link.hitbox {
  position: relative; /* Ermöglicht die Positionierung des Pseudo-Elements */
  text-decoration: none; /* Entfernt die Standard-Unterstreichung */
}

a.custom-link.hitbox::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px; /* Dicke der Unterstreichung */
  background-color: #afafaf; /* Farbe der Unterstreichung */
  bottom: 0.4em; /* Positioniert die Linie höher */
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
  background-color: #fbfbfb;
  color: #171717;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.custom-alert.show {
  opacity: 0.9;
}

/* Responsive Design */

@media (max-width: 992px) {
  .mainText {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .char {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .custom-alert {
    top: 20rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .mainText {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .char {
    width: 1.1rem;
    height: 1.1rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .custom-alert {
    top: 18rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .mainText {
    font-size: 1rem;
    text-align: center;
    line-height: 1.4rem;
  }

  .char {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  .custom-alert {
    top: 16rem;
    font-size: 0.7rem;
    padding: 8px 16px;
  }
}
</style>
