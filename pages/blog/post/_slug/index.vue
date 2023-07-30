<template>
  <div>
    <header class="text-center mb-4">
      <h1>{{ post.post_title }}</h1>
      <h2>
        {{ formatLong(post.date_created) }}
      </h2>
    </header>
    <main class="fullpost editorjs-output">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="post.post_content" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
        <Disqus />
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'page',
  validate ({ params }) {
    return /^[A-z0-9-]*$/.test(params.slug)
  },
  async asyncData ({ $items, params, error }) {
    const post = (await $items('blog_posts').readMany({ search: params.slug })).data[0]

    if (post === undefined) {
      error({ status: 404, message: 'Unknown Post' })
      return
    }

    return { post }
  },
  head () {
    return {
      title: this.post.post_title + " - Jacob Andersen's Blog",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Engineer-in-progress'
        }
      ]
    }
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
