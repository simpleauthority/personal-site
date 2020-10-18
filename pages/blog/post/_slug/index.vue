<template>
  <div>
    <header class="text-center mb-4">
      <h1>{{ post.post_title }}</h1>
      <h2>
        {{ formatLong(post.posted) }}
      </h2>
    </header>
    <main class="fullpost editorjs-output">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-for="(block, idx) in post.post_content" :key="'post-block-' + idx" v-html="block" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
      </b-container>
    </main>
  </div>
</template>

<script>
import DateMixin from '~/mixins/date-mixin'

export default {
  layout: 'page',
  head() {
    return {
      title: this.post.post_title + ' - Jacob Andersen\'s Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Engineer-in-progress'
        }
      ]
    }
  },
  mixins: [DateMixin],
  validate({ params }) {
    return /^[A-z0-9-_]*$/.test(params.slug)
  },
  async asyncData({ app, params, error }) {
    const post = (await app.$strapi['$blog-posts'].find({
      post_slug: params.slug,
      _limit: 1
    }))[0]

    if (post === undefined) {
      error({ status: 404, message: 'Unknown Post' })
      return
    }

    try {
      post.post_content = await (() => {
        return app.$parseEjs(post.post_content)
      })()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      error({
        status: 500,
        message: 'Failed to parse post content'
      })
      return
    }

    return { post }
  }
}
</script>

<style lang="scss">
body {
  .fullpost {
    .go-back {
      display: block;
      width: 100%;
      margin: 40px 0 20px 0;
    }
  }
}
</style>
