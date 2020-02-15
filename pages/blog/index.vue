<template>
  <div>
    <b-container class="controls-container">
      <b-row>
        <b-col cols="6">
          <div class="sort-container">
            <b-button>Idk something here</b-button>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="search-container">
            <b-form @submit.prevent="goToSearchResult">
              <b-form-input list="results" placeholder="Search Posts" @input="getSearchResults" />
              <b-form-datalist id="results" v-model="search.choice" :options="search.results" />
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <header class="page-header">
      <h1>My Scribblings</h1>
      <h2>
        &lt;3. I love you!
      </h2>
    </header>
    <main class="posts">
      <b-container>
        <div v-if="posts.length === 0">
          <p>Awww. No posts yet.</p>
        </div>
        <div v-else v-masonry item-selector=".post">
          <b-row>
            <BlogPostShard v-for="(post, idx) in posts" :key="'post-' + idx" :post="post" :number="posts.length - idx" />
          </b-row>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import BlogPostShard from '../../components/blog/BlogPostShard'

export default {
  components: { BlogPostShard },
  data() {
    return {
      search: {
        term: '',
        choice: '',
        results: []
      }
    }
  },
  head() {
    return {
      title: "Jacob Andersen's Blog",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Check out Jacob\'s scribblings. WARNING: There may be randomness ahead.'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      posts: state => state.blog.posts
    })
  },
  methods: {
    async getSearchResults(data) {
      if (data === undefined || data.length === 0) return
      const results = await this.$store.dispatch('blog/performPostSearch', data)
      if (results === undefined || results.length === 0) return
      this.search.results = _.map(results, result => ({ text: result.title, value: result.id }))
    },
    goToSearchResult() {
      if (this.search.choice === undefined || this.search.choice.length === 0 || isNaN(this.search.choice)) return
      // eslint-disable-next-line no-console
      console.log(this.search.choice)
      this.search = {}
    }
  }
}
</script>

<style lang="scss">
.controls-container {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;

  .sort-container {
    float: left;
    margin-left: 15px;
  }

  .search-container {
    float: right;
    margin-right: 15px;
  }
}
.posts {
  .post {
    margin-bottom: 15px;
  }
}
</style>
