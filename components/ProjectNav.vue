<template>
  <template v-if="neighbours">
    <EdgeLink v-if="!isPlaygroundChild || neighbours.prev.route !== 'playground'" position="left" fixed :to="path(neighbours.prev.route)" :label="neighbours.prev.label" />
    <EdgeLink v-if="!isPlaygroundChild || neighbours.next.route !== 'playground'" position="right" fixed :to="path(neighbours.next.route)" :label="neighbours.next.label" />
  </template>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import EdgeLink from "./EdgeLink.vue";
import { projectNeighbours, playgroundProjects } from "@/composables/projects";

// Die beiden seitlichen Karussell-Links einer Projektseite. Welche Seite
// woneben liegt, steht in composables/projects.ts — nicht in den Seiten selbst.
const props = defineProps({
  /** Dateiname der eigenen Seite, z. B. "goEase" */
  current: { type: String, required: true },
});

const route = useRoute();
const locale = computed(() => (route.path.startsWith("/de") ? "de" : "en"));

const neighbours = computed(() => projectNeighbours(props.current));
const isPlaygroundChild = computed(() => playgroundProjects.some((project) => project.route === props.current));
const path = (name) => `/${locale.value}/project/${name}`;
</script>
