// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image-edge"],
  css: [
    "~/assets/font.scss",
    // Load route-level styles globally to avoid FOUC/relayout when navigating
    "~/assets/styles/index.scss",
    "~/assets/styles/about.scss",
    "~/assets/styles/contact.scss",
    "~/assets/styles/project.scss",
    "~/assets/styles/cv.scss",
    "~/assets/styles/resume.scss",
    "~/assets/styles/skillset.scss",
  ],

  compatibilityDate: "2024-08-27",

  app: {
    head: {
      title: "Johannes Biess",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // Preload critical fonts to minimize layout shift when navigating
        { rel: 'preload', href: '/fonts/roboto-mono-v23-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/roboto-mono-v23-latin-700.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/inter-tight-v7-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/inter-tight-v7-latin-700.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      ],
    },
  },
});
