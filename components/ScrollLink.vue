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
import { playgroundProjects } from '@/composables/projects';

// Oben: Link zurück zur Startseite. Gescrollt: "HOCH"/"UP" zum Seitenanfang.
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
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const route = useRoute();
const isGerman = computed(() => route.path.startsWith('/de'));
const isPlaygroundChild = computed(() => playgroundProjects.some((project) => route.path.endsWith(`/project/${project.route}`)));
const startPath = computed(() => isPlaygroundChild.value
  ? `/${isGerman.value ? 'de' : 'en'}/project/playground`
  : (isGerman.value ? '/de' : '/'));
const startLabel = computed(() => isPlaygroundChild.value ? 'PLAYGROUND' : (isGerman.value ? 'STARTSEITE' : 'START'));
const upLabel = computed(() => (isGerman.value ? 'HOCH' : 'UP'));
</script>
