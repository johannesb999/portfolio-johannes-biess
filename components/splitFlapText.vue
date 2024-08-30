<template>
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
          {
            separator: letter.isSeparator,
            normal: !letter.isSeparator && !letter.isLink,
          },
          letter.styleClass,
        ]"
      >
        <template v-if="letter.isLink && letter.linkTarget.includes('mailto')">
          <a
            href="#"
            class="custom-link"
            @click.prevent="copyEmailToClipboard"
            >{{ letter.current }}</a
          >
        </template>
        <template v-else-if="letter.isLink">
          <a :href="letter.linkTarget" class="custom-link" target="_blank">{{
            letter.current
          }}</a>
        </template>
        <template v-else>
          {{ letter.current }}
        </template>
      </span>
    </div>
  </div>
  <!-- Benachrichtigung mit dynamischer Klasse -->
  <div :class="['custom-alert', { show: showAlert }]">
  EMAIL COPIED<br> TO CLIPBOARD
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
  let inStyledWord = false;
  let inLink = false;
  let linkTarget = null;

  return text
    .split("")
    .map((char) => {
      if (char === "[" || char === "]") {
        inStyledWord = !inStyledWord;
        return null;
      }

      if (char === "|" || char === "@" || char === "$") {
        if (!inLink) {
          inLink = true;
          switch (char) {
            case "|":
              linkTarget =
                "https://de.linkedin.com/in/johannes-biess-8464a21bb";
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
        return null;
      }

      return {
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
    })
    .filter((item) => item !== null);
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
  textArrays.value[index].forEach((item, idx) => {
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
};


onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));
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
}

.char {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: bottom;
}

.separator {
  color: #0000000f;
}

.normal {
  color: #171717;
  padding-left: 1px;
}

.custom-style {
  font-weight: 700;
  padding-left: 1px;
  color: #000000;
}

.link-style {
  color: blue;
  text-decoration: underline;
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


</style>
