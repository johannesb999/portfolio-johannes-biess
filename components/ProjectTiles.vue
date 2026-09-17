<template>
  <ul class="tiles">
    <li v-for="project in playgroundProjects" :key="project.route" class="tiles__item">
      <NuxtLink class="tile" :to="`/${locale}/project/${project.route}`">
        <img class="tile__image" :src="project.thumb" :alt="project.label" loading="lazy" />
        <span class="tile__label">{{ project.label }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { playgroundProjects } from "@/composables/projects";

// Vorschaukacheln der kleineren Arbeiten. Welche das sind, steht in
// composables/projects.ts — dieselbe Liste, die auch ihre Karussell-Kette bildet.
const route = useRoute();
const locale = computed(() => (route.path.startsWith("/de") ? "de" : "en"));
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: var(--spacing--xl);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tile {
  display: grid;
  grid-template-areas:
    "image"
    "label";
  gap: var(--spacing--sm);
  color: var(--color--primary);
  text-decoration: none;

  &:hover .tile__image,
  &:focus-visible .tile__image {
    // Statt die Kachel zu skalieren nur das Bild — so bleibt das Raster ruhig
    transform: scale(1.03);
  }

  &:hover .tile__label,
  &:focus-visible .tile__label {
    color: var(--color--accent);
  }

  &:focus-visible {
    outline: var(--border__size) solid var(--color--accent);
    outline-offset: var(--spacing--xs);
  }
}

.tile__image {
  grid-area: image;
  aspect-ratio: 4 / 3;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tile__label {
  grid-area: label;
  text-align: center;
  transition: color 0.3s ease;
  @include type.text(lg, light);
}

@include bp.stacked {
  .tiles {
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    gap: var(--spacing--md);
  }
}

@include bp.mobile {
  .tiles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
