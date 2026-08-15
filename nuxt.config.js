export default defineNuxtConfig({
  compatibilityDate: "2026-08-11",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxt/content"],
  css: ["~/assets/css/main.scss"],
  nitro: {
    prerender: {
      ignore: ["/__nuxt_content/content/sql_dump.txt"],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
