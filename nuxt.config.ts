export default defineNuxtConfig({
  app: {
    baseURL: "/personal-site/"
  },
  css: [
    '~/assets/main.css',
    '~/assets/formatting.scss'
  ],
  devtools: { 
    enabled: true 
  },
  modules: [
    '@nuxt/content'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})