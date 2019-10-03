<template>
  <div>
    {{ post }}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^[0-9]*$/.test(params.id)
  },
  async asyncData({ store, route }) {
    const post = await store.dispatch('blog/getPostRequest', route.params.id)
    return { post }
  }
}
</script>
