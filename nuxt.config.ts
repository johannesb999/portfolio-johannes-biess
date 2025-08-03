// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image-edge"],

  compatibilityDate: "2024-08-27",

  app: {
    head: {
      title: "Johannes Biess",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
