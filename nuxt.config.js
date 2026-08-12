export default defineNuxtConfig({
  compatibilityDate: "2026-08-11",
  devtools: { enabled: false },
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Eddie Ebeling — Creative Technologist",
      meta: [
        {
          name: "description",
          content: "The portfolio of Eddie Ebeling, a front-end developer and product-minded creative technologist.",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
