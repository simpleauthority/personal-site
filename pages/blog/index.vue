<template>
  <div>
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
import { mapState } from 'vuex'
import BlogPostShard from '../../components/blog/BlogPostShard'

export default {
  components: { BlogPostShard },
  computed: {
    ...mapState({
      posts: state => state.blog.posts
    })
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
