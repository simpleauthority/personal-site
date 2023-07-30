export default defineNuxtConfig({
  css: ['~/assets/formatting.scss'],
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vue-masonry.client.js',
    '~/plugins/vue-moment.js',
    '~/plugins/vue-disqus.js',
    '~/plugins/directus.js'
  ]
})