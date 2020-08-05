<template>
  <div>
    <header class="page-header">
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
  components: { PortfolioEntry },
  async asyncData({ app }) {
    return {
      items: (await app.$strapi['$portfolio-items'].find())
    }
  }
}
</script>
