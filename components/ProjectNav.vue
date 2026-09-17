<template>
  <template v-if="neighbours">
    <EdgeLink position="left" fixed :to="path(neighbours.prev.route)" :label="neighbours.prev.label" />
    <EdgeLink position="right" fixed :to="path(neighbours.next.route)" :label="neighbours.next.label" />
  </template>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import EdgeLink from "./EdgeLink.vue";
import { projectNeighbours } from "@/composables/projects";

// Die beiden seitlichen Karussell-Links einer Projektseite. Welche Seite
// woneben liegt, steht in composables/projects.ts — nicht in den Seiten selbst.
const props = defineProps({
  /** Dateiname der eigenen Seite, z. B. "goEase" */
  current: { type: String, required: true },
});

const route = useRoute();
const locale = computed(() => (route.path.startsWith("/de") ? "de" : "en"));

const neighbours = computed(() => projectNeighbours(props.current));
const path = (name) => `/${locale.value}/project/${name}`;
</script>
