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
        <template v-if="letter.isLink">
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
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ1234567890";

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
      if (char === "[") {
        inStyledWord = true;
        return null;
      }
      if (char === "]") {
        inStyledWord = false;
        return null;
      }
      if (char === "|") {
        inLink = !inLink;
        if (inLink) {
          linkTarget = "https://www.example.com"; // Standardlink, der ersetzt werden kann
        } else {
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
        styleClass: inLink ? "link-style" : inStyledWord ? "custom-style" : "",
      };
    })
    .filter((item) => item !== null);
}

const textArrays = ref(props.texts.map(createTextArray));

// Animation steuern
const animate = (index) => {
  textArrays.value[index].forEach((item, idx) => {
    const step = () => {
      if (item.current !== item.target) {
        item.current = getRandomChar();
        setTimeout(step, 40);
      }
    };
    setTimeout(step, idx * 30);
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
  align-items: flex-start; /* Zeilen linksbündig ausrichten */
  justify-content: center;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mainText {
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: left; /* Text linksbündig ausrichten */
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
</style>
