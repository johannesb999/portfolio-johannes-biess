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
const thresholdPx = 10;
const route = useRoute();

const getScrollY = () => (
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0
);

const updateFromScroll = (source = 'unknown') => {
  const y = getScrollY();
  const next = y > thresholdPx;
  if (isScrolled.value !== next) {
    console.log('[ScrollLink] toggle', { from: isScrolled.value, to: next, y, source });
    isScrolled.value = next;
  }
};

const onWinScroll = () => updateFromScroll('window:scroll');
const onDocScroll = () => updateFromScroll('document:scroll');
const onTouchMove = () => updateFromScroll('document:touchmove');

onMounted(() => {
  console.log('[ScrollLink] mounted', { path: route.path, thresholdPx });
  updateFromScroll('init');
  window.addEventListener('scroll', onWinScroll, { passive: true });
  document.addEventListener('scroll', onDocScroll, { passive: true });
  document.addEventListener('touchmove', onTouchMove, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onWinScroll);
  document.removeEventListener('scroll', onDocScroll);
  document.removeEventListener('touchmove', onTouchMove);
});

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
