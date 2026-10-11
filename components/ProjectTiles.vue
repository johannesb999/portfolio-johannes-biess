<template>
  <ul class="tiles">
    <li v-for="project in playgroundProjects" :key="project.route" class="tiles__item" :style="{ gridArea: project.route }">
      <AppLink class="tile" :to="`/${locale}/project/${project.route}`" :scale="false">
        <img class="tile__image" :src="project.thumb" alt="" loading="lazy" />
        <span class="tile__caption">
          <span class="tile__label">{{ project.label }}</span>
          <span v-if="project.description" class="tile__description">{{ project.description[locale] }}</span>
        </span>
      </AppLink>
    </li>
    <li class="tiles__placeholder" aria-hidden="true" />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { playgroundProjects } from '@/composables/projects';

// Vorschaukacheln der kleineren Arbeiten. Welche das sind, steht in
// composables/projects.ts — dieselbe Liste, die auch ihre Karussell-Kette bildet.
const route = useRoute();
const locale = computed(() => (route.path.startsWith('/de') ? 'de' : 'en'));
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

.tiles {
  display: grid;
  grid-template-areas:
    "trickyTowers trickyTowers trickyTowers jumpStar jumpStar jumpStar"
    "drawingLight drawingLight drawingLight drawingLight placeholder placeholder";
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(2, var(--playground__tile--row));
  gap: var(--playground__tiles--gap);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tiles__item {
  min-width: 0;
  min-height: 0;
}

.tile,
.tiles__placeholder {
  display: grid;
  grid-template-areas:
    "image"
    "label";
  gap: var(--spacing--sm);
  grid-template-rows: minmax(0, 1fr) auto;
  min-width: 0;
  min-height: 0;
  height: 100%;
}

.tile {
  margin: 0;
  color: var(--color--primary);
  text-decoration: none;

  &:hover .tile__caption,
  &:focus-visible .tile__caption {
    color: var(--color--accent);
  }

  &:focus-visible {
    outline: var(--border__size) solid var(--color--accent);
    outline-offset: var(--spacing--xs);
  }
}

.tile__image {
  display: block;
  object-fit: cover;
  grid-area: image;
  box-sizing: border-box;
  min-height: 0;
  width: 100%;
  height: 100%;
}

.tile__caption,
.tiles__placeholder::after {
  grid-area: label;
  text-align: center;
  transition: color 0.3s ease;
  @include type.text(lg, normal);
}

.tile__caption { display: grid; gap: var(--spacing--xs); }
.tile__description { @include type.text(lg, light, alt, big); }

.tiles__placeholder {
  grid-area: placeholder;

  &::before {
    content: '';
    grid-area: image;
    border: var(--border__size) solid var(--border__color);
    border-radius: var(--border__radius);
  }

  // Gleiche Bildkante wie die beschrifteten Kacheln, ohne sichtbaren Inhalt.
  &::after {
    content: '\00a0\a\00a0';
    white-space: pre;
  }
}

@include bp.stacked {
  .tiles {
    grid-template-areas:
      "trickyTowers jumpStar"
      "drawingLight placeholder";
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, var(--playground__tile--row));
  }
}

@include bp.mobile {
  .tiles {
    grid-template-areas:
      "trickyTowers"
      "jumpStar"
      "drawingLight"
      "placeholder";
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto;
  }

  .tile__image,
  .tiles__placeholder::before {
    aspect-ratio: var(--playground__tile--ratio);
    height: auto;
  }
}
</style>
