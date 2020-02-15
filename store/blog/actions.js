export default {
  async loadPostsRequest({ commit }) {
    const posts = await this.$axios.$get('blog/posts')
    if (posts !== undefined) {
      commit('setPosts', posts)
    }

    const categories = await this.$axios.$get('blog/categories')
    if (categories !== undefined) {
      commit('setCategories', categories)
    }

    const tags = await this.$axios.$get('blog/tags')
    if (tags !== undefined) {
      commit('setTags', tags)
    }
  },

  performPostSearch({ _ }, term) {
    const query = `?query=${term}&page=1`
    return this.$axios.$get(`blog/search${query}`)
  }
}
