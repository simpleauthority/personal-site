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
            <no-ssr>
              <b-col
                v-for="(post, idx) in posts"
                :key="'post-' + idx"
                v-masonry-tile
                cols="12"
                lg="6"
                xl="4"
                class="post"
              >
                <b-card
                  bg-variant="light"
                  sub-title-tag="time"
                  :img-src="getFeaturedImage(post.featured_media)"
                  img-top
                >
                  <header slot="header">
                    <nuxt-link :to="'/blog/post/' + post.slug">
                      <h4>{{ post.title.rendered }}</h4>
                    </nuxt-link>
                    <small>{{ getPostNumber(idx) }} &vert; {{ getPostedDate(post.date) }}</small>
                  </header>
                  <div v-html="post.excerpt.rendered" />
                </b-card>
              </b-col>
            </no-ssr>
          </b-row>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostMethodsMixin from '../../mixins/post-methods-mixin'

export default {
  mixins: [PostMethodsMixin],
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
