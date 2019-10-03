export default {
  async loadPostsRequest({ commit }) {
    const posts = await this.$axios.$get('blog/posts')
    if (posts !== undefined) {
      commit('setPosts', posts)
    }
  }
}
