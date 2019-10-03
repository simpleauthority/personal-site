export default {
  async nuxtServerInit({ dispatch }) {
    await dispatch('blog/loadPostsRequest')
  }
}
