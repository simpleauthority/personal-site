export function useDateFormatting() {
  function formatShort (date) {
    return this.$moment(date).format('MMMM YYYY')
  }

  function formatLong (date) {
    return this.$moment(date).format('dddd, MMMM Do YYYY')
  }

  return { formatShort, formatLong }
}