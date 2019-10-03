<template>
  <div>
    <header class="page-header">
      <h1>{{ post.title.rendered }}</h1>
      <h2>
        {{ getPostedDate(post.date) }}
      </h2>
    </header>
    <main class="fullpost">
      <b-container>
        <section v-html="post.content.rendered" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
      </b-container>
    </main>
  </div>
</template>

<script>
import PostMethodsMixin from '../../../../mixins/post-methods-mixin'

export default {
  mixins: [PostMethodsMixin],
  head() {
    return {
      title: `${this.post.title.rendered} | Jacob Andersen's Blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Check out Jacob's Post "${this.post.title.rendered}" on https://jacob.engineer`
        }
      ]
    }
  },
  validate({ params }) {
    return /^[A-z0-9-_]*$/.test(params.slug)
  },
  async asyncData({ store, params, error }) {
    const post = store.getters['blog/getPost'](params.slug)
    if (post === undefined) error({ status: 404, message: 'Unknown Post' })
    const fullPost = await store.dispatch('blog/loadFullPostRequest', post.id)
    if (fullPost.data && fullPost.data.status === 404) error({ status: 404, message: 'Unknown Post' })
    return { post: fullPost }
  }
}
</script>

<style lang="scss">
body {
  //margin-bottom: 30px;

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
