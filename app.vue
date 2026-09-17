<template>
  <div>
    <!-- Head-Tags werden in nuxt.config.ts (app.head) gesetzt -->
    <NuxtPage />

    <ThemeSwitch />
    <AppHeader />
  </div>
</template>

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
  --z--high: 100;
  --z--alert: 1000;
  --shadow--light: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);
}

:root[data-theme="dark"] {
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
  min-height: 100dvh;
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
  /* Scrollbar dauerhaft reservieren, damit die Breite zwischen Seiten nicht springt */
  overflow-y: scroll;
}

img {
  width: 100%;
  max-width: 100%;
  height: fit-content;
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

  &:hover {
    transform: scale(1.1);
  }
}
</style>

<style lang="scss">
/* Responsive Token-Overrides und globale UI-Anpassungen */
@use "@/assets/styles/responsive.scss" as *;
</style>
