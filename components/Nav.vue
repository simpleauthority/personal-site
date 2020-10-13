<template>
  <nav>
    <ul>
      <nuxt-link v-if="includeHome" to="/">
        <li>
          Go back home
        </li>
      </nuxt-link>
      <nuxt-link v-for="(item, idx) in pages" :key="'nav-link-' + idx" :to="'/' + item.path">
        <li>{{ item.text }}</li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      items: [
        {
          path: 'about',
          text: 'Learn about me'
        },
        {
          path: 'resume',
          text: 'See my resume'
        },
        {
          path: 'Portfolio',
          text: 'Peruse my work'
        },
        {
          path: 'Blog',
          text: 'Read my blog'
        }
      ]
    }
  },
  computed: {
    currentPage() {
      return this.$nuxt.$route.path.substring(1)
    },
    includeHome() {
      return !!this.currentPage && this.currentPage !== ''
    },
    pages() {
      return this.items.filter(item => !this.isCurrentPage(item.path))
    }
  },
  methods: {
    isCurrentPage(path) {
      return this.currentPage === path
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    ul {
        margin: 0 auto;
      list-style-type: none;
      font-size: 1rem;
      color: #ffffff;
      font-weight: 300;

      a {
        color: inherit;
        text-decoration: none;

        li {
          display: inline-block;
          background: #0B485B;
          padding: 15px;
          margin-right: 25px;
          border-radius: 6px;
          width: 12rem;

          &:hover {
            background: #0d556b;
          }
        }
      }
    }
  }
</style>
