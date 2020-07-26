<template>
  <div class="everything">
    <SiteNavbar />
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SiteNavbar from '../components/SiteNavbar.vue'

export default {
  head() {
    return {
      title: 'Jacob Andersen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A description'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '#'
        }
      ]
    }
  },
  components: { SiteNavbar },
  computed: {
    ...mapGetters([
      'getSiteMeta',
      'getSiteImages'
    ])
  }
}
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background-image: url('~assets/prism.png');
}
</style>
