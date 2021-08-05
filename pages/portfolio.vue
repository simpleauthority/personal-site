<template>
  <div>
    <header class="text-center mb-4">
      <h1>Some things I have created</h1>
      <h3><a href="https://github.com/simpleauthority/" target="_blank">See more on my GitHub Account</a></h3>
    </header>
    <main>
      <b-container>
        <b-row>
          <PortfolioEntry
            v-for="(item, idx) in data"
            :key="'item-' + idx"
            :title="item.item_name"
            :href="item.item_link"
            :source-href="item.item_source_link"
            :image="item.item_picture"
          >
            <div v-html="item.item_description" />
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
  layout: 'page',
  transition: 'page',
  async asyncData ({ $items }) {
    return await $items('portfolio_item').readMany()
  },
  head () {
    return {
      title: "Jacob Andersen's Portfolio",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Computer Scientist in progress'
        }
      ]
    }
  }
}
</script>
