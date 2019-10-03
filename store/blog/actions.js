export default {
  async loadPostsRequest({ commit }) {
    const posts = await this.$axios.$get('blog/posts')
    if (posts !== undefined) {
      commit('setPosts', posts)
    }
  },

  loadFullPostRequest({ _ }, id) {
    return this.$axios.$get(`blog/posts/${id}`)
  }
}
