export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eddie Ebeling - UI/UX and Front End Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front-end and UX Developer. Experienced front-end developer and software engineer specializing in cross-platform and multi-device web development using HTML, CSS, and JavaScript.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        'vmid': 'og:title',
        'property': 'og:title',
        'content': 'Eddie Ebeling - UI/UX Developer',
        'template': chunk => `${chunk}` //or as string template: '%s - My page'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap' },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/0e3b38c677.js', type: 'text/javascript' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://ackee-eddieebeling.netlify.app',
    domainId: '1a056d97-72c3-4fa5-b4b3-803375a7d62e',
    ignoreLocalhost: false, // defaults to true
    detailed: true // defaults to false
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
