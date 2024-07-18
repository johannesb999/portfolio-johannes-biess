<template>
  <div class="container">
    <div id="start">START</div>
    <div id="aboutLink">
      <nuxt-link to="about" class="custom-link">ABOUT</nuxt-link>
    </div>
    <div id="contactLink">
      <nuxt-link to="contact" class="custom-link">CONTACT</nuxt-link>
    </div>
    <div id="projectLink">
      <nuxt-link to="projects" class="custom-link">PROJECTS</nuxt-link>
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
import { ref, onMounted } from "vue";

const texts = [
  "HI MY NAME IS",
  "JOHANNES BIESS",
  "AND I AM ",
  "DEVELOPER",
  
];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

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

const textArrays = ref(texts.map(createTextArray));

// Animation steuern
const animate = (index) => {
  textArrays.value[index].forEach((item, idx) => {
    const step = () => {
      if (item.current !== item.target) {
        item.current = getRandomChar();
        setTimeout(step, 50);
      }
    };
    setTimeout(step, idx * 50);
  });
};

onMounted(() => {
  textArrays.value.forEach((_, index) => animate(index));
});
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Verhindert das Scrollen */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertikale Zentrierung */
  align-items: center; /* Horizontale Zentrierung */
  height: 100vh; /* Volle Höhe des Bildschirms */
  text-align: center; /* Textzentrierung */
  position: relative;
}

#start {
  color: #171717;
  font-weight: 300;
  font-size: 2rem;
  position: absolute;
  top: 20px; /* Positioniert "START" oben mittig */
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
  bottom: 20px; /* Positioniert "PROJECTS" unten mittig */
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
  color: rgb(232, 232, 232);
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
  text-align: center; /* Zentriert den Text innerhalb der Zeilen */
}
</style>
