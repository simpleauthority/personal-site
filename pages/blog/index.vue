<template>
  <div>
    <header class="text-center mb-4">
      <h1>My Scribblings</h1>
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
import BlogPostShard from '../../components/blog/BlogPostShard'

export default {
  layout: 'page',
  components: { BlogPostShard },
  async asyncData({ app }) {
    return {
      posts: (await app.$strapi['$blog-posts'].find())
    }
  }
}
</script>

<style lang="scss">
.posts {
  .post {
    margin-bottom: 15px;
  }
}
</style>
