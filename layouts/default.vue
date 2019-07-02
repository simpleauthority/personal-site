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
  height: 100vh;
  background-image: url('~assets/prism.png');
}
</style>
