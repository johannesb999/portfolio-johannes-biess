<template>
  <figure v-if="currentSurface" class="site-map" :aria-label="mapLabel">
    <svg viewBox="0 0 4 3" aria-hidden="true" focusable="false">
      <rect
        v-for="surface in surfaces"
        :key="surface.id"
        :x="surface.x"
        :y="surface.y"
        width="1"
        height="1"
        class="site-map__surface"
        :class="{ 'site-map__surface--current': surface.id === currentSurface.id }"
        :data-surface="surface.id"
      />
    </svg>
  </figure>
</template>

<script setup lang="ts">
import { resumeSideForPath } from '~/composables/resume';

const route = useRoute();
const isGerman = computed(() => route.path.startsWith('/de'));
const currentPath = computed(() => route.path.replace(/^\/(de|en)/, '').replace(/\/$/, '') || '/');

// Gleiche Flächen für räumliche Positionen, unabhängig von Inhalt und Seitenlänge.
// Eine eigene untere Reihe hält die Resume-Nachbarn von den Projekten getrennt.
// About -> Resume bleibt abwärts; der Abstand bildet keine Seitenlänge ab.
//        About  Start    Contact
//               Projekte Legal
// Links  Resume Rechts
const surfaces = [
  { id: 'about', x: 1, y: 0 },
  { id: 'home', x: 2, y: 0 },
  { id: 'contact', x: 3, y: 0 },
  { id: 'projects', x: 2, y: 1 },
  { id: 'legal', x: 3, y: 1 },
  { id: 'resume-left', x: 0, y: 2 },
  { id: 'resume', x: 1, y: 2 },
  { id: 'resume-right', x: 2, y: 2 },
] as const;

const currentSurface = computed(() => {
  const side = resumeSideForPath(route.path);
  if (side) {
    return {
      id: `resume-${side}`,
      label: isGerman.value ? `Resume ${side === 'left' ? 'links' : 'rechts'}` : `Resume ${side}`,
    };
  }
  if (currentPath.value.startsWith('/project/')) {
    return { id: 'projects', label: isGerman.value ? 'Projekte' : 'Projects' };
  }
  const pages: Record<string, { id: string; label: string }> = {
    '/': { id: 'home', label: isGerman.value ? 'Start' : 'Home' },
    '/about': { id: 'about', label: isGerman.value ? 'Über mich' : 'About me' },
    '/contact': { id: 'contact', label: isGerman.value ? 'Kontakt' : 'Contact' },
    '/resume': { id: 'resume', label: 'Resume' },
    '/legal': { id: 'legal', label: isGerman.value ? 'Impressum' : 'Legal information' },
  };
  return pages[currentPath.value] ?? null;
});
const mapLabel = computed(() => `${isGerman.value ? 'Flächenkarte. Du bist hier' : 'Surface map. You are here'}: ${currentSurface.value?.label ?? ''}`);
</script>

<style scoped lang="scss">
@use '@/assets/styles/breakpoints' as bp;

.site-map {
  position: fixed;
  left: var(--layout__inset--side);
  bottom: var(--layout__inset--top);
  z-index: var(--z--high);
  width: var(--site-map__width);
  margin: 0;
  color: var(--color--primary);
  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    overflow: visible;
  }
}

.site-map__surface {
  fill: var(--color--background);
  stroke: currentColor;
  stroke-width: var(--site-map__stroke);
  vector-effect: non-scaling-stroke;
}

.site-map__surface--current {
  fill: var(--color--gray);
}

@include bp.stacked {
  .site-map {
    width: var(--site-map__width--compact);
  }
}
</style>
