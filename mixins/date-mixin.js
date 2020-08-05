export default {
  methods: {
    formatShort(date) {
      return this.$moment(date).format('MMMM YYYY')
    },

    formatLong(date) {
      return this.$moment(date).format('dddd, MMMM Do YYYY')
    }
  }
}
