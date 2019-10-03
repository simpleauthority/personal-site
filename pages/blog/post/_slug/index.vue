<template>
  <div>
    <header class="page-header">
      <h1>{{ post.title }}</h1>
      <h2>
        {{ getPostedDate(post.posted) }}
      </h2>
    </header>
    <main class="fullpost">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-html="post.content" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
      </b-container>
    </main>
  </div>
</template>

<script>
import ApiHelperMixin from '../../../../mixins/api-helper-mixin'

export default {
  mixins: [ApiHelperMixin],
  head() {
    return {
      title: `${this.post.title} | Jacob Andersen's Blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Check out Jacob's Post "${this.post.title}" on https://jacob.engineer`
        }
      ]
    }
  },
  validate({ params }) {
    return /^[A-z0-9-_]*$/.test(params.slug)
  },
  asyncData({ store, params, error }) {
    const post = store.getters['blog/getPost'](params.slug)
    if (post === undefined) error({ status: 404, message: 'Unknown Post' })
    return { post }
  }
}
</script>

<style lang="scss">
body {
  .fullpost {
    margin-bottom: 30px;
    color: #ccc;

    .go-back {
      display: block;
      margin: 40px 0 20px 0;
    }
  }
}
</style>
