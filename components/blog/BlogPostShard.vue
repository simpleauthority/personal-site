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
      >
        <header slot="header">
          <nuxt-link :to="'/blog/post/' + post.post_slug">
            <h4>{{ post.post_title }}</h4>
          </nuxt-link>
          <small>Post #{{ number }} &vert; {{ formatShort(post.created_at) }}</small>
        </header>
        <!-- eslint-disable-next-line vue/no-v-html -->
        {{ post.post_summary }}
      </b-card>
    </b-col>
  </no-ssr>
</template>

<script>
import DateMixin from '~/mixins/date-mixin'

export default {
  name: 'BlogPostShard',
  mixins: [DateMixin],
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
