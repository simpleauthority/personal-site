export default {
  methods: {
    getFeaturedImage(media) {
      if (media === 0) return ''
      return `https://api.jacob.engineer/blog/media/${media}`
    },
    getPostedDate(date) {
      return this.$moment(new Date(date)).format('dddd, MMMM Do YYYY')
    }
  }
}
