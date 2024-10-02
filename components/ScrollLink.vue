<template>
  <div id="projectLinkStart">
    <nuxt-link v-if="!isScrolled" to="/" class="custom-link"> START </nuxt-link>
    <nuxt-link v-else to="#" @click.prevent="scrollToTop" class="custom-link"> UP </nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  handleScroll(); // Initialisiert `isScrolled` beim Mounten
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Ihre vorhandenen Stile */
</style>
