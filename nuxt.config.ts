export default defineNuxtConfig({
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