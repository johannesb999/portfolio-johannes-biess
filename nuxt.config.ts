// https://nuxt.com/docs/api/configuration/nuxt-config

// Allow deploying under a subpath by honoring NUXT_APP_BASE_URL (e.g. "/portfolio-johannes-biess/")
const base = process.env.NUXT_APP_BASE_URL || "/";

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

  compatibilityDate: "2024-08-27",

  app: {
    baseURL: base,
    head: {
      title: "Johannes Biess",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
