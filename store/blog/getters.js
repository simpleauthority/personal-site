import _ from 'lodash'

export default {
  getPosts(state) {
    return state.posts
  },

  getPost(state) {
    return (slug) => {
      return _.find(state.posts, post => post.slug === slug)
    }
  }
}
