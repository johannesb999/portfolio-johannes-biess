<template>
  <EdgeLink :position="returnEdge" fixed :to="resumePath" label="RESUME" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import EdgeLink from './EdgeLink.vue';
import { resumeSides, type ResumeStation } from '@/composables/resume';

const props = defineProps<{ current: ResumeStation }>();
const route = useRoute();
const returnEdge = computed(() => resumeSides[props.current] === 'left' ? 'right' : 'left');
const resumePath = computed(() => `/${route.path.startsWith('/de') ? 'de' : 'en'}/resume`);
</script>
