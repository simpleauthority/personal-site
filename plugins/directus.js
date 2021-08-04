import { Directus } from '@directus/sdk'

const directus = new Directus('https://cms.jacobandersen.dev/')

export default ({ app }, inject) => {
  inject('items', collection => directus.items(collection))
  inject('single', name => directus.singleton(name))
  inject('asset', id => `https://cms.jacobandersen.dev/assets/${id}`)
}
