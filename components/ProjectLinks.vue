<template>
  <nav v-if="showProjects" class="project-links" aria-label="Projektseiten">
    <p class="project-links__hint">{{ hint }}</p>
    <ul class="project-links__list">
      <li v-for="name in projectPages" :key="name">
        <AppLink :to="`/${locale}/project/${name}`" :label="name.toUpperCase()" underline :scale="false" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRuntimeConfig } from "#imports";
import AppLink from "./AppLink.vue";
import { hideableProjects } from "@/composables/projects";

// Zugang zu den Projektseiten, solange sie ausgeblendet sind. Sichtbar nur,
// wenn auch die Weiterleitungen in nuxt.config.ts aus sind — beides haengt an
// derselben Variable, kann also nicht auseinanderlaufen.
const showProjects = useRuntimeConfig().public.showProjects;
const projectPages = hideableProjects;

const route = useRoute();
const locale = computed(() => (route.path.startsWith("/de") ? "de" : "en"));

const hint = computed(() =>
  locale.value === "de"
    ? "Nur lokal sichtbar — online bleibt die Baustelle"
    : "Local preview only — the construction page stays online"
);
</script>

<style scoped lang="scss">
@use "@/assets/styles/type" as type;

.project-links {
  display: grid;
  justify-items: center;
  gap: var(--spacing--sm);
  padding-top: var(--spacing--lg);
  border-top: var(--border__size) dashed var(--color--gray-light);
}

.project-links__hint {
  margin: 0;
  color: var(--color--accent);
  @include type.text(sm, thin);
}

.project-links__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing--xs) var(--spacing--md);
  margin: 0;
  padding: 0;
  list-style: none;
  @include type.text(lg, light);
}
</style>
