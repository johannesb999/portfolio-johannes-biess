<template>
  <div id="projectLinkStart">
    <nuxt-link v-if="!isScrolled" :to="startPath" class="custom-link">
      {{ startLabel }}
    </nuxt-link>
    <nuxt-link v-else to="#" @click.prevent="scrollToTop" class="custom-link">
      {{ upLabel }}
    </nuxt-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

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
  handleScroll(); // Initialize `isScrolled` when mounting
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Access the current route
const route = useRoute();

// Compute the current locale based on the route path
const currentLocale = computed(() => {
  return route.path.startsWith('/de') ? 'de' : 'en';
});

// Determine the correct path to navigate to
const startPath = computed(() => {
  return currentLocale.value === 'de' ? '/de' : '/';
});

// Adjust the label for the start link based on the language
const startLabel = computed(() => {
  return currentLocale.value === 'de' ? 'STARTSEITE' : 'START';
});

// Adjust the label for the scroll link based on the language
const upLabel = computed(() => {
  return currentLocale.value === 'de' ? 'HOCH' : 'UP';
});
</script>

<style scoped>
</style>
