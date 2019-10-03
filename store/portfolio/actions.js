export default {
  async loadPortfolioItemsRequest({ commit }) {
    const items = await this.$axios.$get('blog/pages/portfolio')
    if (items !== undefined) {
      commit('setItems', items)
    }
  }
}
