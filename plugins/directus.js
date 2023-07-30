import { Directus } from '@directus/sdk'

const directus = new Directus('https://cms.jacobandersen.dev/')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('items', collection => directus.items(collection))
  nuxtApp.provide('single', name => directus.singleton(name))
  nuxtApp.provide('asset', id => `https://cms.jacobandersen.dev/assets/${id}`)
})