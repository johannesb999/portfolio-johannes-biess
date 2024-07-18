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
            { separator: letter.isSeparator, normal: !letter.isSeparator },
          ]"
        >
          {{ letter.current }}
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

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ";

function getRandomChar() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function createTextArray(text) {
  return text.split("").map((char) => ({
    target: char === " " ? getRandomChar() : char,
    current: getRandomChar(),
    isSeparator: char === " ",
  }));
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
    setTimeout(step, idx * 40);
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
  align-items: center; 
  justify-content: center; 
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mainText {
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 200;
  text-align: center; 
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
</style>
