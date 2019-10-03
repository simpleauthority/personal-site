export default {
  getPostsRequest({ _ }) {
    return this.$axios.$get('blog/posts')
  },

  getPostRequest({ _ }, id) {
    return this.$axios.$get(`blog/posts/${id}`)
  }
}
