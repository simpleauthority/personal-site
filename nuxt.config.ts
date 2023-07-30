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
  plugins: [
    '~/plugins/vue-masonry.client.ts',
    '~/plugins/vue-moment.ts',
    '~/plugins/vue-disqus.ts'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})