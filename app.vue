<template>
  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      <title>Johannes Biess</title>
    </head>
    <NuxtPage />

    <!-- Language Switch -->
    <header class="language-switch">
      <button
        class="custom-link"
        id="en"
        @click="switchLanguage('en')"
        :disabled="currentLocale === 'en'"
      >
        EN
      </button>
      <div id="line" class="custom-link">|</div>
      <button
        class="custom-link"
        id="de"
        @click="switchLanguage('de')"
        :disabled="currentLocale === 'de'"
      >
        DE
      </button>
    </header>

    <!-- Theme Switcher Button -->
    <button class="theme-switcher custom-link" @click="toggleTheme">
      {{ currentThemeText }}
    </button>

    <!-- Home Link -->
    <nuxt-link
      :to="currentLocale === 'de' ? '/de' : '/'"
      class="returnHome custom-link"
      >JB</nuxt-link
    >
    <!-- <CustomCursor /> -->
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const currentLocale = ref(route.path.startsWith("/de") ? "de" : "en");

const switchLanguage = (lang) => {
  const currentPath = route.path;
  let newPath = "";

  if (currentPath === "/" && lang === "de") {
    newPath = "/de";
  } else if (currentPath === "/de" && lang === "en") {
    newPath = "/";
  } else {
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)\//, "/");
    newPath =
      lang === "de" ? `/de${pathWithoutLocale}` : `/en${pathWithoutLocale}`;
  }

  if (newPath) {
    router.push(newPath);
  }
};

// Überwacht Änderungen der Route und aktualisiert den currentLocale-Wert
watch(route, (newRoute) => {
  currentLocale.value = newRoute.path.startsWith("/de") ? "de" : "en";
});

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
  root.style.setProperty("--color-gray-light", "#e0e0e02a");
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
  root.style.setProperty("--color-gray-light", "#0000002d");
  root.style.setProperty("--color-primary-translucent", "#171717b0");
  root.style.setProperty("--color-black", "#171717");
  root.style.setProperty("--color-accent", "#afafaf");
  root.style.setProperty("--border-color-black", "#171717");
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

<style>
:root {
  --color-picker: #171717b0;

  /* Schriftarten */
  --font-family-main: "Roboto Mono", monospace;
  --font-family-alt: "Inter Tight", sans-serif;

  /* Farben */
  --color-primary: #171717;
  --color-background: #fbfbfb;
  --color-secondary: #d3d1d1;
  --color-gray-light: #0000002d;
  --color-primary-translucent: #171717b0;
  --color-black: #000000;
  --color-accent: #afafaf;
  --color-gray: #bfbfbf;

  --border-color-black: #171717;
  --border-size: 0.1rem;
  --border-radius: 0.7rem;

  /* Schriftgrößen */
  --font-size-base: 0.8rem; /* 12.8px */
  --font-size-sm: 0.75rem; /* 12px */
  --font-size-md: 0.8rem; /* 12.8px */
  --font-size-lg: 1rem; /* 16px */
  --font-size-xl: 1.2rem; /* 19.2px */
  --font-size-xxl: 1.28rem; /* 20.48px */
  --font-size-xxxl: 1.4rem; /* 22.4px */
  --font-size-xxxxl: 1.6rem; /* 25.6px */
  --font-size-big: 2rem; /* 32px */
  --font-size-bigger: 2.4rem; /* 38.4px */
  --font-size-huge: 3.2rem; /* 51.2px */

  /* Schriftgewichte */
  --font-weight-thin: 100;
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  /* Abstände */
  --spacing-none: 0;
  --spacing-xxs: 0.24rem; /* 3.84px */
  --spacing-xs: 0.5rem; /* 8px */
  --spacing-sm: 0.8rem; /* 12.8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-md-lg: 1.3rem; /* 20.8px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 1.6rem; /* 25.6px */
  --spacing-xxl: 2.4rem; /* 38.4px */
  --spacing-xxxl: 3.2rem; /* 51.2px */
  --spacing-big: 4.8rem; /* 76.8px */
  --spacing-bigger: 6.4rem;

  --radius-xxs: 0.24rem; /* 3.84px */
  --radius-xs: 0.5rem; /* 8px */
  --radius-sm: 0.8rem; /* 12.8px */
  --radius-md: 1rem; /* 16px */

  /* Positionierung */
  --top-spacing: 1.3rem; /* 25.6px */
  --side-percentage: 1.3%;
  --z-index-high: 100;
  --z-index-alert: 1000;

  /* Sonstiges */
  --letter-spacing-base: 0.05rem; /* 0.8px */
  --line-height-small: 1;
  --line-height-normal: normal;
  --line-height-big: 1.5;
  --line-height-normal: 2;
  --color-white-transition: rgba(146, 146, 146, 0.3);
  --scrollbar-width: 0.01rem; /* 0.8px */
  --box-shadow-light: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);

  /* Bildhöhen */
  --img-height-sm: 20vh; /* 20% der Viewport-Höhe */
  --img-height-smedi: 30vh; /* 30% der Viewport-Höhe */
  --img-height-md: 40vh; /* 40% der Viewport-Höhe */
  --img-height-mela: 50vh; /* 50% der Viewport-Höhe */
  --img-height-lg: 60vh; /* 60% der Viewport-Höhe */

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

.returnHome {
  font-weight: var(--font-weight-thin);
  font-size: var(--font-size-bigger);
  color: var(--color-primary);
  text-decoration: none;
  position: fixed;
  top: var(--top-spacing);
  left: var(--side-percentage);
  z-index: var(--z-index-high);
}

.language-switch {
  position: fixed;
  top: var(--top-spacing);
  right: var(--side-percentage);
  display: flex;
  align-items: center;
  z-index: var(--z-index-high);
}

#en,
#de,
#line {
  font-weight: var(--font-weight-thin);
  font-size: var(--font-size-big);
}

#line {
  margin: var(--spacing-none);
}

button {
  background-color: transparent;
}

.language-switch button {
  color: var(--color-secondary);
  border: none;
}

.language-switch button:disabled {
  color: var(--color-primary);
}

.language-switch button:not(:disabled):hover {
  color: var(--color-primary);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#bottomLink {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-big);
  position: absolute;
  bottom: var(--side-percentage);
  left: 50dvw;
  transform: translateX(-50%);
  font-style: normal;
  line-height: var(--line-height-normal);
}

#topLink {
  position: absolute;
  top: 0;
  padding-top: var(--side-percentage);
  left: 50dvw;
  transform: translateX(-50%);
  font-size: var(--font-size-big);
  font-weight: var(--font-weight-bold);
  text-align: center;
}

#rightLink {
  top: 50dvh;
  right: var(--side-percentage);
  transform: translateY(-50%);
  position: absolute;
  font-size: var(--font-size-big);
  font-weight: var(--font-weight-bold);
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
  font-size: var(--font-size-big);
  font-weight: var(--font-weight-bold);
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

/* Transition Klassen hier unverändert belassen, falls keine Variablen benötigt werden */
.page-left-enter-active,
.page-left-leave-active,
.page-right-enter-active,
.page-right-leave-active,
.page-up-enter-active,
.page-up-leave-active,
.page-down-enter-active,
.page-down-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 700ms cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 500ms cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 100;
  width: 100%;
  box-shadow: 0 0 40px var(--color-black, rgba(0, 0, 0, 0));
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
  box-shadow: -10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-right-enter-from,
.page-left-leave-to {
  transform: translateX(-100%);
  box-shadow: 10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-right-leave-to,
.page-left-enter-from {
  transform: translateX(100%);
  box-shadow: -10px 0 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-down-enter-from {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-down-leave-to {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-up-enter-from {
  transform: translateY(100%);
  box-shadow: 0 -10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-up-leave-to {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.page-left-enter-to,
.page-right-enter-to,
.page-up-enter-to,
.page-down-enter-to {
  transform: translateX(0) translateY(0);
  box-shadow: 0 0 40px var(--color-white-transition, rgba(0, 0, 0, 0.3));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Media Queries */

/* Extra kleine Geräte (Handys im Hochformat, 320px bis 480px) */
@media (max-width: 480px) {
  :root {
    --border-color-black: #171717;
    --border-size: 0.08rem; /* 0.1rem  */
    --border-radius: 0.56rem; /* 0.7rem  */

    /* Schriftgrößen */
    --font-size-base: 0.65rem; /* 0.625rem  */
    --font-size-sm: 0.6rem; /* 0.75rem  */
    --font-size-md: 0.64rem; /* 0.8rem  */
    --font-size-lg: 0.8rem; /* 1rem  */
    --font-size-xl: 0.96rem; /* 1.2rem  */
    --font-size-xxl: 1.02rem; /* 1.28rem  */
    --font-size-xxxl: 1.1rem; /* 1.4rem  */
    --font-size-xxxxl: 1.28rem; /* 1.6rem  */
    --font-size-big: 1.6rem; /* 2rem  */
    --font-size-bigger: 1.92rem; /* 2.4rem  */
    --font-size-huge: 2.56rem; /* 3.2rem  */

    /* Schriftgewichte */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Abstände */
    --spacing-none: 0;
    --spacing-xxs: 0.192rem; /* 0.24rem  */
    --spacing-xs: 0.3rem; /* 0.5rem  */
    --spacing-sm: 0.5rem; /* 0.8rem  */
    --spacing-sm-md: 0.52rem; /* 1rem  */
    --spacing-md: 0.75rem; /* 1rem  */
    --spacing-lg: 0.9rem; /* 1.5rem  */
    --spacing-xl: 1.28rem; /* 1.6rem  */
    --spacing-xxl: 1.92rem; /* 2.4rem  */
    --spacing-xxxl: 2.56rem; /* 3.2rem  */
    --spacing-big: 3.84rem; /* 4.8rem  */
    --spacing-bigger: 5.12rem; /* 6.4rem  */

    --radius-xxs: 0.192rem; /* 0.24rem  */
    --radius-xs: 0.4rem; /* 0.5rem  */
    --radius-sm: 0.64rem; /* 0.8rem  */
    --radius-md: 0.8rem; /* 1rem  */

    /* Positionierung */
    --top-spacing: 1.04rem; /* 1.3rem  */
    --side-percentage: 1.5%;
    --z-index-high: 100;
    --z-index-alert: 1000;

    /* Sonstiges */
    --letter-spacing-base: 0.04rem; /* 0.05rem  */
    --line-height-small: 1;
    --line-height-normal: normal;
    --line-height-big: 1.2; /* 1.5  */
    --line-height-normal: 1.6; /* 2  */

    /* Bildhöhen */
    --img-height-sm: 20vh; /* 20% der Viewport-Höhe */
    --img-height-smedi: 30vh; /* 30% der Viewport-Höhe */
    --img-height-md: 40vh; /* 40% der Viewport-Höhe */
    --img-height-mela: 50vh; /* 50% der Viewport-Höhe */
    --img-height-lg: 60vh; /* 60% der Viewport-Höhe */
  }

  html {
    color: var(--color-primary);
    font-size: var(--font-size-base);
    font-family: var(--font-family-main);
    background-color: var(--color-background);
    margin: var(--spacing-none);
    padding: var(--spacing-none);
    letter-spacing: var(--letter-spacing-base);
    scroll-behavior: smooth;
    font-optical-sizing: auto;
    height: 100dvh;
    width: 100dvw;
  }

  img {
    max-width: 100%;
    height: auto;
    border: var(--border-size) solid var(--border-color-black);
    border-radius: var(--border-radius);
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

  .returnHome {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-bigger);
    color: var(--color-primary);
    text-decoration: none;
    position: fixed;
    left: var(--side-percentage);
    padding-left: var(--spacing-xs);
    z-index: var(--z-index-high);
    top: var(--side-percentage);
  }

  .language-switch {
    position: fixed;
    top: var(--side-percentage);
    right: var(--side-percentage);
    display: flex;
    align-items: center;
    z-index: var(--z-index-high);
  }

  #en,
  #de,
  #line {
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
  }

  #line {
    margin: var(--spacing-none);
  }

  button {
    background-color: transparent;
  }

  .language-switch button {
    color: var(--color-secondary);
    border: none;
  }

  .language-switch button:disabled {
    color: var(--color-primary);
  }

  .language-switch button:not(:disabled):hover {
    color: var(--color-primary);
  }

  /* Theme Switcher Button */
  .theme-switcher {
    position: fixed;
    bottom: var(--top-spacing);
    right: var(--side-percentage);
    font-size: var(--font-size-xxxxl);
    font-weight: var(--font-weight-normal);
    background-color: transparent;
    cursor: pointer;
    z-index: var(--z-index-high);
    writing-mode: vertical-rl;
    text-orientation: upright;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  #bottomLink {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-big);
    position: absolute;
    bottom: var(--side-percentage);
    left: 50dvw;
    transform: translateX(-50%);
    font-style: normal;
    line-height: var(--line-height-normal);
  }

  #topLink {
    position: absolute;
    top: 0;
    padding-top: var(--side-percentage);
    left: 50dvw;
    transform: translateX(-50%);
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  #rightLink {
    top: 50dvh;
    right: var(--side-percentage);
    transform: translateY(-50%);
    position: absolute;
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
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
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
  }

  .custom-link {
    color: var(--color-black);
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease;
    margin: var(--spacing-xxs);
  }
}

@media (max-width: 310px) {
  :root {
    --border-color-black: #171717;
    --border-size: 0.08rem; /* 0.1rem  */
    --border-radius: 0.56rem; /* 0.7rem  */

    /* Schriftgrößen */
    --font-size-base: 0.6rem; /* 0.625rem  */
    --font-size-sm: 0.6rem; /* 0.75rem  */
    --font-size-md: 0.64rem; /* 0.8rem  */
    --font-size-lg: 0.8rem; /* 1rem  */
    --font-size-xl: 0.96rem; /* 1.2rem  */
    --font-size-xxl: 1.02rem; /* 1.28rem  */
    --font-size-xxxl: 1.1rem; /* 1.4rem  */
    --font-size-xxxxl: 1.28rem; /* 1.6rem  */
    --font-size-big: 1.6rem; /* 2rem  */
    --font-size-bigger: 1.92rem; /* 2.4rem  */
    --font-size-huge: 2.56rem; /* 3.2rem  */

    /* Schriftgewichte */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Abstände */
    --spacing-none: 0;
    --spacing-xxs: 0.192rem; /* 0.24rem  */
    --spacing-xs: 0.3rem; /* 0.5rem  */
    --spacing-sm: 0.5rem; /* 0.8rem  */
    --spacing-sm-md: 0.52rem; /* 1rem  */
    --spacing-md: 0.75rem; /* 1rem  */
    --spacing-lg: 0.9rem; /* 1.5rem  */
    --spacing-xl: 1.28rem; /* 1.6rem  */
    --spacing-xxl: 1.92rem; /* 2.4rem  */
    --spacing-xxxl: 2.56rem; /* 3.2rem  */
    --spacing-big: 3.84rem; /* 4.8rem  */
    --spacing-bigger: 5.12rem; /* 6.4rem  */

    --radius-xxs: 0.192rem; /* 0.24rem  */
    --radius-xs: 0.4rem; /* 0.5rem  */
    --radius-sm: 0.64rem; /* 0.8rem  */
    --radius-md: 0.8rem; /* 1rem  */

    /* Positionierung */
    --top-spacing: 1.04rem; /* 1.3rem  */
    --side-percentage: 1.5%;
    --z-index-high: 100;
    --z-index-alert: 1000;

    /* Sonstiges */
    --letter-spacing-base: 0.04rem; /* 0.05rem  */
    --line-height-small: 1;
    --line-height-normal: normal;
    --line-height-big: 1.2; /* 1.5  */
    --line-height-normal: 1.6; /* 2  */

    /* Bildhöhen */
    --img-height-sm: 20vh; /* 20% der Viewport-Höhe */
    --img-height-smedi: 30vh; /* 30% der Viewport-Höhe */
    --img-height-md: 40vh; /* 40% der Viewport-Höhe */
    --img-height-mela: 50vh; /* 50% der Viewport-Höhe */
    --img-height-lg: 60vh; /* 60% der Viewport-Höhe */
  }

  html {
    color: var(--color-primary);
    font-size: var(--font-size-base);
    font-family: var(--font-family-main);
    background-color: var(--color-background);
    margin: var(--spacing-none);
    padding: var(--spacing-none);
    letter-spacing: var(--letter-spacing-base);
    scroll-behavior: smooth;
    font-optical-sizing: auto;
    height: 100dvh;
    width: 100dvw;
  }

  img {
    max-width: 100%;
    height: auto;
    border: var(--border-size) solid var(--border-color-black);
    border-radius: var(--border-radius);
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

  .returnHome {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-bigger);
    color: var(--color-primary);
    text-decoration: none;
    position: fixed;
    left: var(--side-percentage);
    padding-left: var(--spacing-xs);
    z-index: var(--z-index-high);
    top: var(--side-percentage);
  }

  .language-switch {
    position: fixed;
    top: var(--side-percentage);
    right: var(--side-percentage);
    display: flex;
    align-items: center;
    z-index: var(--z-index-high);
  }

  #en,
  #de,
  #line {
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
  }

  #line {
    margin: var(--spacing-none);
  }

  button {
    background-color: transparent;
  }

  .language-switch button {
    color: var(--color-secondary);
    border: none;
  }

  .language-switch button:disabled {
    color: var(--color-primary);
  }

  .language-switch button:not(:disabled):hover {
    color: var(--color-primary);
  }

  /* Theme Switcher Button */
  .theme-switcher {
    position: fixed;
    bottom: var(--top-spacing);
    right: var(--side-percentage);
    font-size: var(--font-size-xxxxl);
    font-weight: var(--font-weight-normal);
    background-color: transparent;
    cursor: pointer;
    z-index: var(--z-index-high);
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}

/* Kleine Geräte (Tablets und Handys im Querformat, 481px bis 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  :root {
    --border-color-black: #171717;
    --border-size: 0.088rem; /* 0.08rem, um 10% erhöht */
    --border-radius: 0.616rem; /* 0.56rem, um 10% erhöht */

    /* Schriftgrößen */
    --font-size-base: 0.715rem; /* 0.65rem */
    --font-size-sm: 0.66rem; /* 0.6rem */
    --font-size-md: 0.704rem; /* 0.64rem */
    --font-size-lg: 0.88rem; /* 0.8rem */
    --font-size-xl: 1.056rem; /* 0.96rem */
    --font-size-xxl: 1.122rem; /* 1.02rem */
    --font-size-xxxl: 1.21rem; /* 1.1rem */
    --font-size-xxxxl: 1.408rem; /* 1.28rem */
    --font-size-big: 1.76rem; /* 1.6rem */
    --font-size-bigger: 2.112rem; /* 1.92rem */
    --font-size-huge: 2.816rem; /* 2.56rem */

    /* Schriftgewichte */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Abstände */
    --spacing-none: 0;
    --spacing-xxs: 0.2112rem; /* 0.192rem */
    --spacing-xs: 0.33rem; /* 0.3rem */
    --spacing-sm: 0.55rem; /* 0.5rem */
    --spacing-sm-md: 0.572rem; /* 0.52rem */
    --spacing-md: 0.825rem; /* 0.75rem */
    --spacing-lg: 0.99rem; /* 0.9rem */
    --spacing-xl: 1.408rem; /* 1.28rem */
    --spacing-xxl: 2.112rem; /* 1.92rem */
    --spacing-xxxl: 2.816rem; /* 2.56rem */
    --spacing-big: 4.224rem; /* 3.84rem */
    --spacing-bigger: 5.632rem; /* 5.12rem */

    --radius-xxs: 0.2112rem; /* 0.192rem */
    --radius-xs: 0.44rem; /* 0.4rem */
    --radius-sm: 0.704rem; /* 0.64rem */
    --radius-md: 0.88rem; /* 0.8rem */

    /* Positionierung */
    --top-spacing: 1.144rem; /* 1.04rem */
    --side-percentage: 1.65%; /* 1.5% */
    --z-index-high: 100;
    --z-index-alert: 1000;

    /* Sonstiges */
    --letter-spacing-base: 0.044rem; /* 0.04rem */
    --line-height-small: 1.1; /* 1 */
    --line-height-normal: normal; /* Bleibt unverändert */
    --line-height-big: 1.32; /* 1.2 */
    --line-height-larger: 1.76; /* 1.6 */

    /* Bildhöhen */
    --img-height-sm: 20vh; /* 20% der Viewport-Höhe */
    --img-height-smedi: 30vh; /* 30% der Viewport-Höhe */
    --img-height-md: 40vh; /* 40% der Viewport-Höhe */
    --img-height-mela: 50vh; /* 50% der Viewport-Höhe */
    --img-height-lg: 60vh; /* 60% der Viewport-Höhe */
  }

  html {
    color: var(--color-primary);
    font-size: var(--font-size-base);
    font-family: var(--font-family-main);
    background-color: var(--color-background);
    margin: var(--spacing-none);
    padding: var(--spacing-none);
    letter-spacing: var(--letter-spacing-base);
    scroll-behavior: smooth;
    font-optical-sizing: auto;
  }

  img {
    max-width: 100%;
    height: auto;
    border: var(--border-size) solid var(--border-color-black);
    border-radius: var(--border-radius);
    object-fit: contain;
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

  .returnHome {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-bigger);
    color: var(--color-primary);
    text-decoration: none;
    position: fixed;
    left: var(--side-percentage);
    padding-left: var(--spacing-xs);
    z-index: var(--z-index-high);
    top: var(--side-percentage);
  }

  .language-switch {
    position: fixed;
    top: var(--side-percentage);
    right: var(--side-percentage);
    display: flex;
    align-items: center;
    z-index: var(--z-index-high);
  }

  #en,
  #de,
  #line {
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
  }

  #line {
    margin: var(--spacing-none);
  }

  button {
    background-color: transparent;
  }

  .language-switch button {
    color: var(--color-secondary);
    border: none;
  }

  .language-switch button:disabled {
    color: var(--color-primary);
  }

  .language-switch button:not(:disabled):hover {
    color: var(--color-primary);
  }

  /* Theme Switcher Button */
  .theme-switcher {
    position: fixed;
    bottom: var(--top-spacing);
    right: var(--side-percentage);
    font-size: var(--font-size-xxxxl);
    font-weight: var(--font-weight-normal);
    background-color: transparent;
    cursor: pointer;
    z-index: var(--z-index-high);
    writing-mode: vertical-rl;
    text-orientation: upright;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  #bottomLink {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-big);
    position: absolute;
    bottom: var(--side-percentage);
    left: 50vw;
    transform: translateX(-50%);
    font-style: normal;
    line-height: var(--line-height-normal);
  }

  #topLink {
    position: absolute;
    top: 0;
    padding-top: var(--side-percentage);
    left: 50vw;
    transform: translateX(-50%);
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  #rightLink {
    top: 50vh;
    right: var(--side-percentage);
    transform: translateY(-50%);
    position: absolute;
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  #leftLink {
    top: 50vh;
    left: var(--side-percentage);
    transform: translateY(-50%) rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
  }

  .custom-link {
    color: var(--color-black);
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease;
    margin: var(--spacing-xxs);
  }
}

/* Mittlere Geräte (Laptops und kleinere Bildschirme, 769px bis 1024px) */
@media (min-width: 768px) and (max-width: 1023px) {
  :root {
    --border-color-black: #171717;
    --border-size: 0.088rem; /* 0.08rem, um 10% erhöht */
    --border-radius: 0.616rem; /* 0.56rem, um 10% erhöht */

    /* Schriftgrößen */
    --font-size-base: 0.615rem; /* 0.65rem */
    --font-size-sm: 0.66rem; /* 0.6rem */
    --font-size-md: 0.704rem; /* 0.64rem */
    --font-size-lg: 0.88rem; /* 0.8rem */
    --font-size-xl: 1.056rem; /* 0.96rem */
    --font-size-xxl: 1.122rem; /* 1.02rem */
    --font-size-xxxl: 1.21rem; /* 1.1rem */
    --font-size-xxxxl: 1.408rem; /* 1.28rem */
    --font-size-big: 1.76rem; /* 1.6rem */
    --font-size-bigger: 2.112rem; /* 1.92rem */
    --font-size-huge: 2.816rem; /* 2.56rem */

    /* Schriftgewichte */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Abstände */
    --spacing-none: 0;
    --spacing-xxs: 0.2112rem; /* 0.192rem */
    --spacing-xs: 0.33rem; /* 0.3rem */
    --spacing-sm: 0.55rem; /* 0.5rem */
    --spacing-sm-md: 0.572rem; /* 0.52rem */
    --spacing-md: 0.825rem; /* 0.75rem */
    --spacing-lg: 0.99rem; /* 0.9rem */
    --spacing-xl: 1.408rem; /* 1.28rem */
    --spacing-xxl: 2.112rem; /* 1.92rem */
    --spacing-xxxl: 2.816rem; /* 2.56rem */
    --spacing-big: 4.224rem; /* 3.84rem */
    --spacing-bigger: 5.632rem; /* 5.12rem */

    --radius-xxs: 0.2112rem; /* 0.192rem */
    --radius-xs: 0.44rem; /* 0.4rem */
    --radius-sm: 0.704rem; /* 0.64rem */
    --radius-md: 0.88rem; /* 0.8rem */

    /* Positionierung */
    --top-spacing: 1.144rem; /* 1.04rem */
    --side-percentage: 1.65%; /* 1.5% */
    --z-index-high: 100;
    --z-index-alert: 1000;

    /* Sonstiges */
    --letter-spacing-base: 0.044rem; /* 0.04rem */
    --line-height-small: 1.1; /* 1 */
    --line-height-normal: normal; /* Bleibt unverändert */
    --line-height-big: 1.32; /* 1.2 */
    --line-height-larger: 1.76; /* 1.6 */

    /* Bildhöhen */
    --img-height-sm: 20vh; /* 20% der Viewport-Höhe */
    --img-height-smedi: 30vh; /* 30% der Viewport-Höhe */
    --img-height-md: 40vh; /* 40% der Viewport-Höhe */
    --img-height-mela: 50vh; /* 50% der Viewport-Höhe */
    --img-height-lg: 60vh; /* 60% der Viewport-Höhe */
  }

  html {
    color: var(--color-primary);
    font-size: var(--font-size-base);
    font-family: var(--font-family-main);
    background-color: var(--color-background);
    margin: var(--spacing-none);
    padding: var(--spacing-none);
    letter-spacing: var(--letter-spacing-base);
    scroll-behavior: smooth;
    font-optical-sizing: auto;
  }

  img {
    max-width: 80%;
    height: auto;
    border: var(--border-size) solid var(--border-color-black);
    border-radius: var(--border-radius);
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

  .returnHome {
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-bigger);
    color: var(--color-primary);
    text-decoration: none;
    position: fixed;
    left: var(--side-percentage);
    padding-left: var(--spacing-xs);
    z-index: var(--z-index-high);
    top: var(--side-percentage);
  }

  .language-switch {
    position: fixed;
    top: var(--side-percentage);
    right: var(--side-percentage);
    display: flex;
    align-items: center;
    z-index: var(--z-index-high);
  }

  #en,
  #de,
  #line {
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
  }

  #line {
    margin: var(--spacing-none);
  }

  button {
    background-color: transparent;
  }

  .language-switch button {
    color: var(--color-secondary);
    border: none;
  }

  .language-switch button:disabled {
    color: var(--color-primary);
  }

  .language-switch button:not(:disabled):hover {
    color: var(--color-primary);
  }

  /* Theme Switcher Button */
  .theme-switcher {
    position: fixed;
    bottom: var(--top-spacing);
    right: var(--side-percentage);
    font-size: var(--font-size-xxxxl);
    font-weight: var(--font-weight-normal);
    background-color: transparent;
    cursor: pointer;
    z-index: var(--z-index-high);
    writing-mode: vertical-rl;
    text-orientation: upright;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  #bottomLink {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-big);
    position: absolute;
    bottom: var(--side-percentage);
    left: 50vw;
    transform: translateX(-50%);
    font-style: normal;
    line-height: var(--line-height-normal);
  }

  #topLink {
    position: absolute;
    top: 0;
    padding-top: var(--side-percentage);
    left: 50vw;
    transform: translateX(-50%);
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  #rightLink {
    top: 50vh;
    right: var(--side-percentage);
    transform: translateY(-50%);
    position: absolute;
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  #leftLink {
    top: 50vh;
    left: var(--side-percentage);
    transform: translateY(-50%) rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
  }

  .custom-link {
    color: var(--color-black);
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease;
    margin: var(--spacing-xxs);
  }
}

/* Große Geräte (Desktops und größere Bildschirme, 1025px bis 1200px) */
@media (min-width: 1024px) and (max-width: 1200px) {
  :root {
    --border-color-black: #171717;
    --border-size: 0.088rem; /* 0.08rem, um 10% erhöht */
    --border-radius: 0.616rem; /* 0.56rem, um 10% erhöht */

    /* Schriftgrößen */
    --font-size-base: 0.65rem; /* 0.65rem */
    --font-size-sm: 0.66rem; /* 0.6rem */
    --font-size-md: 0.704rem; /* 0.64rem */
    --font-size-lg: 0.88rem; /* 0.8rem */
    --font-size-xl: 1.056rem; /* 0.96rem */
    --font-size-xxl: 1.122rem; /* 1.02rem */
    --font-size-xxxl: 1.21rem; /* 1.1rem */
    --font-size-xxxxl: 1.408rem; /* 1.28rem */
    --font-size-big: 1.76rem; /* 1.6rem */
    --font-size-bigger: 2.112rem; /* 1.92rem */
    --font-size-huge: 2.816rem; /* 2.56rem */

    /* Schriftgewichte */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    /* Abstände */
    --spacing-none: 0;
    --spacing-xxs: 0.2112rem; /* 0.192rem */
    --spacing-xs: 0.33rem; /* 0.3rem */
    --spacing-sm: 0.55rem; /* 0.5rem */
    --spacing-sm-md: 0.572rem; /* 0.52rem */
    --spacing-md: 0.9rem; /* 0.75rem */
    --spacing-lg: 1.1rem; /* 0.9rem */
    --spacing-xl: 1.508rem; /* 1.28rem */
    --spacing-xxl: 2.312rem; /* 1.92rem */
    --spacing-xxxl: 2.916rem; /* 2.56rem */
    --spacing-big: 4.224rem; /* 3.84rem */
    --spacing-bigger: 5.632rem; /* 5.12rem */

    --radius-xxs: 0.2112rem; /* 0.192rem */
    --radius-xs: 0.44rem; /* 0.4rem */
    --radius-sm: 0.704rem; /* 0.64rem */
    --radius-md: 0.88rem; /* 0.8rem */

    /* Positionierung */
    --top-spacing: 1.144rem; /* 1.04rem */
    --side-percentage: 1.65%; /* 1.5% */
    --z-index-high: 100;
    --z-index-alert: 1000;

    /* Sonstiges */
    --letter-spacing-base: 0.044rem; /* 0.04rem */
    --line-height-small: 1.1; /* 1 */
    --line-height-normal: normal; /* Bleibt unverändert */
    --line-height-big: 1.32; /* 1.2 */
    --line-height-larger: 1.76; /* 1.6 */

    /* Bildhöhen */
    --img-height-sm: 15vh; /* 20% der Viewport-Höhe */
    --img-height-smedi: 25vh; /* 30% der Viewport-Höhe */
    --img-height-md: 35vh; /* 40% der Viewport-Höhe */
    --img-height-mela: 45vh; /* 50% der Viewport-Höhe */
    --img-height-lg: 55vh; /* 60% der Viewport-Höhe */
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
}

/* Extra große Geräte (Sehr große Bildschirme, ab 1201px) */
@media (min-width: 1201px) {
  /* Stile für sehr große Bildschirme und Fernseher */
}

/* Ultra große Bildschirme (ab 1600px) */
@media (min-width: 1600px) {
  /* Stile für sehr große Bildschirme (z.B. 4K-Monitore) */
}
</style>
