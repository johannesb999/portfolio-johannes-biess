<template>
  <div>
    <!-- Head-Tags werden in nuxt.config.ts (app.head) gesetzt -->
    <NuxtPage />

    <ThemeSwitch />
    <AppHeader />
    <ImageViewer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const german = computed(() => route.path.startsWith('/de'));
const pageNames: Record<string, [string, string]> = {
  about: ['Über mich', 'About me'], contact: ['Kontakt', 'Contact'], resume: ['Lebenslauf', 'Resume'],
  legal: ['Impressum', 'Legal information'], hfgMaster: ['Master · Strategische Gestaltung', 'Master · Strategic Design'],
  hfg: ['Bachelor · Internet of Things', 'Bachelor · Internet of Things'],
  beacon: ['Beacon', 'Beacon'], kai: ['KAI', 'KAI'], goEase: ['GoEase', 'GoEase'],
  plantMonit: ['PlantMonit', 'PlantMonit'], playground: ['Playground', 'Playground'],
  trickyTowers: ['TrickyTowers', 'TrickyTowers'], jumpStar: ['JumpStar', 'JumpStar'], drawingLight: ['DrawingLight', 'DrawingLight'],
};
useHead(() => {
  const name = pageNames[route.path.split('/').filter(Boolean).at(-1) || ''];
  return { htmlAttrs: { lang: german.value ? 'de' : 'en' }, title: name ? `${name[german.value ? 0 : 1]} · Johannes Biess` : 'Johannes Biess · Design & Development' };
});
</script>

<style lang="scss">
/* ---------------------------------------------------------------------------
   Design-Token in BEM-Schreibweise: --block__element--modifier
   Beispiel: --font__size--lg, --color--primary, --spacing--md
   Responsive Abweichungen stehen in assets/styles/responsive.scss.
   --------------------------------------------------------------------------- */
:root {
  /* Farben */
  --color--primary: #171717;
  --color--background: #fbfbfb;
  --color--secondary: #d3d1d1;
  --color--accent: #afafaf;
  --color--gray: #bfbfbf;
  --color--gray-light: #0000001d;
  --color--black: #171717;
  --color--primary-translucent: #171717b0;
  --color--transition: rgba(146, 146, 146, 0.3);

  /* Rahmen */
  --border__size: 0.1rem;
  --border__radius: 0.7rem;
  --border__color: #d3d1d1;

  /* Schriftfamilien */
  --font__family--main: "Roboto Mono", monospace;
  --font__family--alt: "Inter Tight", sans-serif;
  --font__family--legal: "Roboto", sans-serif;

  /* Schriftgrößen (Basis 0.8rem = 12.8px) */
  --font__size--base: 0.8rem;
  --font__size--sm: 0.75rem;
  --font__size--md: 0.8rem;
  --font__size--lg: 1rem;
  --font__size--xl: 1.2rem;
  --font__size--xxl: 1.28rem;
  --font__size--xxxl: 1.4rem;
  --font__size--xxxxl: 1.6rem;
  --font__size--big: 2rem;
  --font__size--bigger: 2.4rem;
  --font__size--huge: 3.2rem;
  // Die skalierte Layout-Basis darf lesbaren Text nicht unter 16px verkleinern.
  --font__size--minimum: 16px;
  --font__size--section-minimum: 20px;
  --font__size--title-minimum: 28px;
  --control__size--minimum: 44px;
  --link__hover--scale: 1.035;
  --email__popup--width: 352px;
  --viewer__inset: clamp(16px, 3vw, 48px);
  --viewer__backdrop: rgba(251, 251, 251, 0.96);
  --viewer__motion--duration: 280ms;
  --flap__height: 1.9rem;
  --flap__cell--minimum: 10px;
  --flap__line-height: 2rem;

  /* Schriftgewichte */
  --font__weight--thin: 100;
  --font__weight--extra-light: 200;
  --font__weight--light: 300;
  --font__weight--normal: 400;
  --font__weight--bold: 700;

  /* Zeilen- und Zeichenabstand */
  --letter-spacing--base: 0.05rem;
  --letter-spacing--wide: 0.4375rem;
  --line-height--small: 1;
  --line-height--normal: 2;
  --line-height--big: 1.5;
  --project__copy--leading: 1.5;

  /* Abstände */
  --spacing--none: 0;
  --spacing--xxs: 0.24rem;
  --spacing--xs: 0.5rem;
  --spacing--sm: 0.8rem;
  --spacing--md: 1rem;
  --spacing--md-lg: 1.3rem;
  --spacing--lg: 1.5rem;
  --spacing--xl: 1.6rem;
  --spacing--xxl: 2.4rem;
  --spacing--xxxl: 3.2rem;
  --spacing--big: 4.8rem;
  --spacing--bigger: 6.4rem;

  /* Radien */
  --radius--xxs: 0.24rem;
  --radius--xs: 0.5rem;
  --radius--sm: 0.8rem;
  --radius--md: 1rem;

  /* Layout */
  --layout__inset--top: 1.3rem;
  --layout__inset--side: 1.3%;
  --layout__scrollbar-width: 0.01rem;
  --layout__height--viewport: 100vh;
  --about__content--max: 88rem;
  --home__intro--width: 38rem;
  --about__portrait--max: 35rem;
  --project__hero--max: 112rem;
  --project__hero--inset: 7%;
  --project__hero--gap: 4.8rem;
  --project__hero--clearance: 8rem;
  --project__hero--stacked-reserve: 38rem;
  --project__section--gap: clamp(48px, 6vw, 96px);
  --project__media--gap: clamp(24px, 3vw, 48px);
  --project__details--inset: calc(9vh + var(--project__media--gap));
  --accordion__image--width: 480px;
  --accordion__image--ratio: 4 / 3;
  --accordion__index--width: 1.5rem;
  --accordion__color--interactive: var(--color--accent);
  --interaction__duration--color: 180ms;
  --research__accent: #f44b17;
  --beacon__color--interactive: #c4380e;
  --kai__color--interactive: #356b79;
  --research__mark--size: 3rem;
  --playground__width--max: 87.5rem;
  --playground__inset--side: 7%;
  --playground__inset--top: max(80px, 12vh);
  --playground__tiles--gap: clamp(16px, 2vw, 28px);
  --playground__tile--row: clamp(300px, 32vw, 430px);
  --playground__tile--ratio: 4 / 3;
  --site-map__width: 128px;
  --site-map__width--compact: 88px;
  --site-map__stroke: 1px;
  --timeline__width--max: 93.75rem;
  --timeline__marker--size: 1.5625rem;
  --timeline__axis--width: 0.25rem;
  --timeline__marker--ring: 0.1875rem;
  --z--high: 100;
  --z--alert: 1000;
  --shadow--light: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);
}

@supports (height: 100svh) {
  :root {
    --layout__height--viewport: 100svh;
  }
}

:root[data-theme="dark"] {
  --viewer__backdrop: rgba(23, 23, 23, 0.96);
  --beacon__color--interactive: #ff784d;
  --kai__color--interactive: #9ac5ce;
  --color--primary: #fbfbfb;
  --color--background: #171717;
  --color--secondary: #707070;
  --color--accent: #d4d4d4;
  --color--gray: #bfbfbf;
  --color--gray-light: #b3b3b32a;
  --color--black: #fbfbfb;
  --color--primary-translucent: #eeeeeedc;
  --border__color: #444444dc;
}

html {
  margin: var(--spacing--none);
  padding: var(--spacing--none);
  min-height: var(--layout__height--viewport);
  width: 100%;
  color: var(--color--primary);
  background-color: var(--color--background);
  font-family: var(--font__family--main);
  font-size: var(--font__size--base);
  font-optical-sizing: auto;
  letter-spacing: var(--letter-spacing--base);
  scrollbar-gutter: stable both-edges;
  /* Kein CSS-Smooth-Scrolling beim Routenwechsel — sonst ruckelt die Y-Position */
  scroll-behavior: auto;
  transition: background-color 0.5s ease, color 0.5s ease;
}

html,
body {
  overflow-x: hidden;
}

body {
  font-size: var(--font__size--minimum);
  /* Scrollbar dauerhaft reservieren, damit die Breite zwischen Seiten nicht springt */
  overflow-y: scroll;
}

img {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: auto;
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--border__radius);
  object-fit: cover;
  object-position: center;
}

button {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: var(--layout__scrollbar-width);
  background-color: var(--color--background);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color--background);
  border: var(--spacing--none) solid var(--color--background);
}

/* Basisklasse fuer Links ausserhalb von AppLink (ScrollLink, DetailsScroll).
   AppLink setzt sie zusaetzlich, damit seitenspezifische Overrides weiter greifen. */
.custom-link {
  display: inline-block;
  margin: var(--spacing--xxs);
  color: var(--color--black);
  text-decoration: none;
  transition: transform 0.3s ease;

  &:not(.app-link):hover {
    transform: scale(var(--link__hover--scale));
  }
}
</style>

<style lang="scss">
/* Responsive Token-Overrides und globale UI-Anpassungen */
@use "@/assets/styles/responsive.scss" as *;
</style>
