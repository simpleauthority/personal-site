<template>
  <div>
    <header class="page-header">
      <h1>Cool Things I've Made</h1>
      <h2>
        "W000000T!"
      </h2>
    </header>
    <main>
      <b-container>
        <b-row>
          <PortfolioEntry
            v-for="(item, idx) in items"
            :key="'item-' + idx"
            :title="item.title"
            :image="getFeaturedImage(item.featuredMedia)"
            :href="item.customLink"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="item.content" />
          </PortfolioEntry>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ApiHelperMixin from '../mixins/api-helper-mixin'
import PortfolioEntry from '../components/portfolio/PortfolioEntry'

export default {
  components: { PortfolioEntry },
  mixins: [ApiHelperMixin],
  computed: {
    ...mapState({
      items: state => state.portfolio.items
    })
  }
}
</script>
