<template>
  <b-container>
    <Nav class="nav" />

    <main>
      <nuxt />
    </main>
  </b-container>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: { Nav }
}
</script>

<style lang="scss" scoped>
    .nav {
        margin: 1rem auto 2rem auto;
        text-align: center;
    }
</style>
