<template>
  <div class="everything">
    <SiteNavbar />
    <nuxt />
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar.vue'

export default {
  components: { SiteNavbar }
}
</script>

<style lang="scss">
.everything {
  min-height: 100vh;
  background-image: url('~assets/prism.png');
}
</style>
