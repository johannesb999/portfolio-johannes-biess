<template>
  <div>
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
    <div class="mainText" @click="animate">
      <div id="line1">
        <span v-for="(letter, index) in textArray" :key="index"
              :class="['char', { 'separator': letter.isSeparator, 'normal': !letter.isSeparator }]">
          {{ letter.current }}
        </span>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';

const originalText = 'HI MY NAME IS';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

// Hilfsfunktionen
function getRandomChar() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const textArray = ref(originalText.split('').map(char => ({
  target: char === ' ' ? getRandomChar() : char,
  current: getRandomChar(),
  isSeparator: char === ' ',
})));

// Animation steuern
const animate = () => {
  textArray.value.forEach((item, index) => {
    const step = () => {
      if (item.current !== item.target) {
        item.current = getRandomChar();
        setTimeout(step, 50);
      }
    };
    setTimeout(step, index * 50);
  });
};

onMounted(animate);
</script>


<style scoped>
#start {
  color: #171717;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#projectLink {
  color: #171717;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-top: 800px;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 200;
  text-align: left;
}
</style>
