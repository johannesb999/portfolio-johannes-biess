<template>
  <div>

    <head>
      <title>Johannes Biess</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <NuxtPage />

    <!-- Theme Switcher Button -->
    <button class="theme-switcher custom-link" @click="toggleTheme">
      {{ currentThemeText }}
    </button>

    <!-- Header (Language + Home) -->
    <AppHeader />
    <!-- <CustomCursor /> -->
    <PageTransitions />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Theme Switcher
const currentTheme = ref("light");

const currentThemeText = computed(() => {
  return currentTheme.value === "light" ? "DARK" : "LIGHT";
});

const toggleTheme = () => {
  if (currentTheme.value === "light") {
    currentTheme.value = "dark";
    applyDarkTheme();
  } else {
    currentTheme.value = "light";
    applyLightTheme();
  }
  // Speichere die Einstellung in localStorage
  localStorage.setItem("theme", currentTheme.value);
};

const applyDarkTheme = () => {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", "#fbfbfb");
  root.style.setProperty("--color-background", "#171717");
  root.style.setProperty("--color-secondary", "#707070");
  root.style.setProperty("--color-gray-light", "#b3b3b32a");
  root.style.setProperty("--color-primary-translucent", "#eeeeeedc");
  root.style.setProperty("--color-black", "#fbfbfb");
  root.style.setProperty("--color-accent", "#d4d4d4");
  root.style.setProperty("--border-color-black", "#444444dc");
  root.style.setProperty("--color-gray", "#bfbfbf");
};

const applyLightTheme = () => {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", "#171717");
  root.style.setProperty("--color-background", "#fbfbfb");
  root.style.setProperty("--color-secondary", "#d3d1d1");
  root.style.setProperty("--color-gray-light", "#0000001d");
  root.style.setProperty("--color-primary-translucent", "#171717b0");
  root.style.setProperty("--color-black", "#171717");
  root.style.setProperty("--color-accent", "#afafaf");
  root.style.setProperty("--border-color-black", "#d3d1d1");
  root.style.setProperty("--color-gray", "#bfbfbf");
};

// Beim Laden der Seite das Theme aus localStorage laden
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    currentTheme.value = "dark";
    applyDarkTheme();
  } else {
    currentTheme.value = "light";
    applyLightTheme();
  }
});
</script>

<style lang="scss">
@use "@/assets/styles/type.scss" as type;
:root {
  --color-picker: #171717b0;

  /* Schriftarten */
  --font-family-main: "Roboto Mono", monospace;
  --font-family-alt: "Inter Tight", sans-serif;

  /* Farben */
  --color-primary: #171717;
  --color-background: #fbfbfb;
  --color-secondary: #d3d1d1;
  --color-gray-light: #0000001d;
  --color-gray-light-dark: #b3b3b32a;
  --color-primary-translucent: #171717b0;
  --color-black: #000000;
  --color-accent: #afafaf;
  --color-gray: #bfbfbf;

  --border-color-black: #d3d1d1;
  --border-size: 0.1rem;
  --border-radius: 0.7rem;

  /* Schriftgrößen */
  --font-size-base: 0.8rem;
  /* 12.8px */
  --font-size-sm: 0.75rem;
  /* 12px */
  --font-size-md: 0.8rem;
  /* 12.8px */
  --font-size-lg: 1rem;
  /* 16px */
  --font-size-xl: 1.2rem;
  /* 19.2px */
  --font-size-xxl: 1.28rem;
  /* 20.48px */
  --font-size-xxxl: 1.4rem;
  /* 22.4px */
  --font-size-xxxxl: 1.6rem;
  /* 25.6px */
  --font-size-big: 2rem;
  /* 32px */
  --font-size-bigger: 2.4rem;
  /* 38.4px */
  --font-size-huge: 3.2rem;
  /* 51.2px */

  /* Schriftgewichte */
  --font-weight-thin: 100;
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  /* Abstände */
  --spacing-none: 0;
  --spacing-xxs: 0.24rem;
  /* 3.84px */
  --spacing-xs: 0.5rem;
  /* 8px */
  --spacing-sm: 0.8rem;
  /* 12.8px */
  --spacing-md: 1rem;
  /* 16px */
  --spacing-md-lg: 1.3rem;
  /* 20.8px */
  --spacing-lg: 1.5rem;
  /* 24px */
  --spacing-xl: 1.6rem;
  /* 25.6px */
  --spacing-xxl: 2.4rem;
  /* 38.4px */
  --spacing-xxxl: 3.2rem;
  /* 51.2px */
  --spacing-big: 4.8rem;
  /* 76.8px */
  --spacing-bigger: 6.4rem;

  --radius-xxs: 0.24rem;
  /* 3.84px */
  --radius-xs: 0.5rem;
  /* 8px */
  --radius-sm: 0.8rem;
  /* 12.8px */
  --radius-md: 1rem;
  /* 16px */

  /* Positionierung */
  --top-spacing: 1.3rem;
  /* 25.6px */
  --side-percentage: 1.3%;
  --z-index-high: 100;
  --z-index-alert: 1000;

  /* Sonstiges */
  --letter-spacing-base: 0.05rem;
  /* 0.8px */
  --line-height-small: 1;
  --line-height-normal: normal;
  --line-height-big: 1.5;
  --line-height-normal: 2;
  --color-white-transition: rgba(146, 146, 146, 0.3);
  --scrollbar-width: 0.01rem;
  /* 0.8px */
  --box-shadow-light: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);

  /* Bildhöhen */
  --img-height-sm: 20vh;
  /* 20% der Viewport-Höhe */
  --img-height-smedi: 30vh;
  /* 30% der Viewport-Höhe */
  --img-height-md: 40vh;
  /* 40% der Viewport-Höhe */
  --img-height-mela: 50vh;
  /* 50% der Viewport-Höhe */
  --img-height-lg: 60vh;
  /* 60% der Viewport-Höhe */

  --img-width-sm: 40dvw;
  --img-width-md: 50dvw;
  --img-width-lg: 70dvw;
}

html {
  color: var(--color-primary);
  font-size: var(--font-size-base);
  font-family: var(--font-family-main);
  background-color: var(--color-background);
  margin: var(--spacing-none);
  padding: var(--spacing-none);
  height: 100dvh;
  width: 100dvw;
  letter-spacing: var(--letter-spacing-base);
  scroll-behavior: smooth;
  font-optical-sizing: auto;
}

img {
  max-width: 100%;
  height: fit-content;
  border: var(--border-size) solid var(--border-color-black);
  border-radius: var(--border-radius);
  width: 100%;
  object-fit: cover;
  object-position: center;
}

::-webkit-scrollbar {
  width: var(--scrollbar-width);
  background-color: var(--color-background);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-background);
  border: var(--spacing-none) solid var(--color-background);
}


button {
  background-color: transparent;
}

 

/* Theme Switcher Button */
.theme-switcher {
  position: fixed;
  bottom: var(--top-spacing);
  right: var(--side-percentage);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: var(--z-index-high);
}

.theme-switcher:focus {
  outline: none;
}

/* Transition für Theme-Wechsel */
.theme-transition {
  transition: background-color 0.5s ease, color 0.5s ease;
}

.theme-transition,
.theme-transition * {
  transition: color 0.5s ease, background-color 0.5s ease,
    border-color 0.5s ease;
}

  /* fade transition moved to PageTransitions component */

#bottomLink {
  @include type.L-Heading-Style('-bold');
  color: var(--color-primary);
  position: absolute;
  bottom: var(--side-percentage);
  left: 50dvw;
  transform: translateX(-50%);
}

#topLink {
  position: absolute;
  top: 0;
  padding-top: var(--side-percentage);
  left: 50dvw;
  transform: translateX(-50%);
  @include type.L-Heading-Style('-bold');
  text-align: center;
}

#rightLink {
  top: 50dvh;
  right: var(--side-percentage);
  transform: translateY(-50%);
  position: absolute;
  @include type.L-Heading-Style('-bold');
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

#leftLink {
  top: 50dvh;
  left: var(--side-percentage);
  transform: translateY(-50%) rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: absolute;
  @include type.L-Heading-Style('-bold');
}

.custom-link {
  color: var(--color-black);
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease;
  margin: var(--spacing-xxs);
}

.custom-link:hover {
  transform: scale(1.1);
}

/* Page transitions moved to PageTransitions component */
</style>

<style lang="scss">
/* Responsive imports (order matters) */
@use "@/assets/responsive/max-480-mobile.scss" as *;
@use "@/assets/responsive/max-310-mobile.scss" as *;
@use "@/assets/responsive/min-481-max-768-tablet.scss" as *;
@use "@/assets/responsive/min-768-max-1023-tablet.scss" as *;
@use "@/assets/responsive/min-1024-max-1200-desktop.scss" as *;
@use "@/assets/responsive/min-1201-desktop.scss" as *;
@use "@/assets/responsive/min-1600-desktop-xl.scss" as *;
</style>
