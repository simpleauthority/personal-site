<template>
  <div>
    <header class="text-center mb-4">
      <h1>Cool Things I've Made</h1>
    </header>
    <main>
      <b-container>
        <b-row>
          <PortfolioEntry
            v-for="(item, idx) in items"
            :key="'item-' + idx"
            :title="item.project_title"
            :href="item.project_url"
            :image="item.project_image.url"
          >
            {{ item.project_description }}
          </PortfolioEntry>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PortfolioEntry from '../components/portfolio/PortfolioEntry'

export default {
  layout: 'page',
  transition: 'page',
  head() {
    return {
      title: 'Jacob Andersen\'s Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Engineer-in-progress'
        }
      ]
    }
  },
  components: { PortfolioEntry },
  async asyncData({ app }) {
    return {
      items: (await app.$strapi['$portfolio-items'].find())
    }
  }
}
</script>
