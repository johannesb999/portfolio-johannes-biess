// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  constructionRoute,
  entryProject,
  hideableProjects,
} from "./composables/projects";

// Allow deploying under a subpath by honoring NUXT_APP_BASE_URL (e.g. "/portfolio-johannes-biess/")
const base = process.env.NUXT_APP_BASE_URL || "/";

// Die einzelnen Projektseiten sind online ausgeblendet ("under construction"),
// lokal aber erreichbar:
//   npm run dev                  -> Projektseiten sichtbar
//   npm run build / generate     -> Direktaufrufe landen auf der Baustellen-Seite
//
// Umschaltbar über SHOW_PROJECTS, um den jeweils anderen Zustand zu pruefen:
//   SHOW_PROJECTS=false npm run dev       -> lokal wie online (Baustelle)
//   SHOW_PROJECTS=true  npm run build     -> Projekte gehen online
//
// Der Wert steuert beides: die Weiterleitungen hier und die Projektliste auf der
// Baustellen-Seite (ueber runtimeConfig.public.showProjects).
const showProjects =
  process.env.SHOW_PROJECTS !== undefined
    ? process.env.SHOW_PROJECTS === "true"
    : process.env.NODE_ENV === "development";

const hiddenProjectRoutes = showProjects
  ? {}
  : Object.fromEntries(
      ["de", "en"].flatMap((locale) =>
        hideableProjects.map((name) => [
          `/${locale}/project/${name}`,
          { redirect: { to: `/${locale}/project/${constructionRoute}`, statusCode: 302 } },
        ])
      )
    );

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image-edge"],
  css: [
    "~/assets/font.scss",
    // Base styles that are used across pages
    "~/assets/styles/index.scss",
    // Ensure page transition animations are always available (no code-split)
    "~/assets/styles/transitions.scss",
  ],

  routeRules: hiddenProjectRoutes,

  runtimeConfig: {
    public: {
      // Zum Build-Zeitpunkt festgelegt, passend zu den routeRules oben
      showProjects,
      // Ziel des PROJEKTE-Links auf der Startseite: das erste Karussell-Projekt,
      // solange die Projekte sichtbar sind — sonst die Baustellen-Seite.
      projectsEntry: showProjects ? entryProject : constructionRoute,
    },
  },

  compatibilityDate: "2024-08-27",

  app: {
    baseURL: base,
    head: {
      title: "Johannes Biess",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          // Gespeichertes Theme setzen, bevor der Browser das erste Mal zeichnet —
          // sonst blitzt die helle Variante kurz auf. Gegenstueck: app.vue.
          innerHTML:
            'try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light"}catch(e){}',
        },
      ],
      link: [
        // Preload critical fonts to minimize layout shift; prefix with baseURL and omit crossorigin to avoid cache mismatch
        { rel: 'preload', href: `${base}fonts/roboto-mono-v23-latin-regular.woff2`, as: 'font', type: 'font/woff2' },
        { rel: 'preload', href: `${base}fonts/roboto-mono-v23-latin-700.woff2`, as: 'font', type: 'font/woff2' },
        { rel: 'preload', href: `${base}fonts/inter-tight-v7-latin-regular.woff2`, as: 'font', type: 'font/woff2' },
        { rel: 'preload', href: `${base}fonts/inter-tight-v7-latin-700.woff2`, as: 'font', type: 'font/woff2' },
      ],
    },
  },
});
