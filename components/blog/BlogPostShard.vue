<template>
  <no-ssr>
    <b-col
      v-masonry-tile
      cols="12"
      lg="6"
      xl="4"
      class="post"
    >
      <b-card
        bg-variant="light"
        sub-title-tag="time"
        :img-src="getFeaturedImage(post.featuredMedia)"
        img-top
      >
        <header slot="header">
          <nuxt-link :to="'/blog/post/' + post.slug">
            <h4>{{ post.title }}</h4>
          </nuxt-link>
          <small>Post #{{ number }} &vert; {{ getPostedDate(post.posted) }}</small>
        </header>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="post.excerpt" />
      </b-card>
    </b-col>
  </no-ssr>
</template>

<script>
import ApiHelperMixin from '../../mixins/api-helper-mixin'

export default {
  name: 'BlogPostShard',
  mixins: [ApiHelperMixin],
  props: {
    post: {
      type: Object,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  }
}
</script>
