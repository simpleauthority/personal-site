<template>
  <div>
    <header class="page-header">
      <h1>{{ post.post_title }}</h1>
      <h2>
        {{ formatLong(post.posted) }}
      </h2>
    </header>
    <main class="fullpost">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-html="post.post_content" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
      </b-container>
    </main>
  </div>
</template>

<script>
import remark from 'remark'
import html from 'remark-html'
import DateMixin from '~/mixins/date-mixin'

export default {
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
        return new Promise((resolve, reject) => (
          remark()
            .use(html)
            .use({
              settings: {
                emphasis: '_',
                strong: '*'
              }
            })
            .process(post.post_content, (err, file) => {
              if (err) {
                reject(err)
              } else {
                resolve(file.contents)
              }
            })
        ))
      })()
    } catch {
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
    margin-bottom: 30px;
    color: #ccc;

    .go-back {
      display: block;
      margin: 40px 0 20px 0;
    }
  }
}
</style>
