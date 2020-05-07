export default {
  getSiteInfo(state) {
    return state.site_info
  },

  getSiteTitle(state) {
    return state.site_info.title
  },

  getSiteDescription(state) {
    return state.site_info.description
  },

  getSiteImages(state) {
    return state.site_info.images
  },

  getFacebook(state) {
    return state.site_info.social.facebook
  },

  getTwitter(state) {
    return state.site_info.social.twitter
  },

  getSiteMeta(state) {
    return state.site_info.meta
  },

  getSiteTwitterMeta(state) {
    return state.site_info.twitter
  },

  getSiteOpenGraphMeta(state) {
    return state.site_info.open_graph
  },

  getSiteCodeInjection(state) {
    return state.site_info.code_injection
  }
}
