<template>
  <AppLink class="theme-switch" :label="theme === 'light' ? 'DARK' : 'LIGHT'" @click="toggle" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import AppLink from "./AppLink.vue";

// Das Theme steckt als data-theme auf <html>; die Farbwerte liegen in :root
// bzw. :root[data-theme="dark"] (app.vue). Ein Inline-Skript in nuxt.config.ts
// setzt das Attribut vor dem ersten Paint, damit nichts hell aufblitzt.
const theme = ref("light");

const apply = (next) => {
  theme.value = next;
  document.documentElement.dataset.theme = next;
};

const toggle = () => {
  const next = theme.value === "light" ? "dark" : "light";
  apply(next);
  localStorage.setItem("theme", next);
};

onMounted(() => {
  apply(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/breakpoints" as bp;

.theme-switch {
  // Groesse bewusst ueber CSS statt ueber die Props — sie aendert sich je Breakpoint
  --app-link__size: var(--font__size--xl);
  --app-link__weight: var(--font__weight--normal);

  position: fixed;
  bottom: var(--layout__inset--top);
  right: var(--layout__inset--side);
  z-index: var(--z--high);

  &:focus {
    outline: none;
  }
}

// Auf schmalen Viewports steht die Beschriftung hochkant
@include bp.below-desktop {
  .theme-switch {
    --app-link__size: var(--font__size--xxxxl);

    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
</style>
