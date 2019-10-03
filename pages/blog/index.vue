<template>
  <div>
    <header class="page-header">
      <h1>So you're looking for blog posts?</h1>
      <h2>
        Well, here they are!
      </h2>
    </header>
    <main>
      <b-container>
        <div v-masonry item-selector=".post">
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
                    <nuxt-link :to="'/blog/post/' + post.id">
                      <h4>{{ post.title.rendered }}</h4>
                    </nuxt-link>
                    <small>{{ getSubtitle(idx, post.date) }}</small>
                  </header>
                  <p v-html="post.excerpt.rendered" />
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
export default {
  async asyncData({ store }) {
    const posts = await store.dispatch('blog/getPostsRequest')
    return { posts }
  },
  methods: {
    getFeaturedImage(id) {
      if (id === 0) return ''
      return `https://api.jacob.engineer/blog/media/${id}/mime`
    },
    getSubtitle(idx, date) {
      return `Post #${this.posts.length - idx}, posted ${this.$moment(
        new Date(date)
      ).format('dddd, MMMM Do YYYY')}`
    }
  }
}
</script>

<style lang="scss">
.post {
  margin-bottom: 15px;
}
</style>
