// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vesp/nuxt-fontawesome', 'nuxt-gtag'],
  fontawesome: {
    icons: {
      solid: ['cog'],
      brands: ['twitter'],
    }
  },
  gtag: {
    id: 'G-QVBZW1PKD2'
  }
})