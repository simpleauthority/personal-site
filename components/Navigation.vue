<template>
  <nav>
    <ul>
      <nuxt-link v-if="includeHome" to="/">
        <li>Go back home</li>
      </nuxt-link>
      <nuxt-link
        v-for="(item, idx) in pages"
        :key="'nav-link-' + idx"
        :to="'/' + item.path"
      >
        <li>{{ item.text }}</li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute()

const items = [
  {
    path: 'about',
    text: 'Learn about me'
  },
  {
    path: 'resume',
    text: 'See my resume'
  },
  {
    path: 'portfolio',
    text: 'Browse my portfolio'
  },
  {
    path: 'blog',
    text: 'Read my blog'
  }
]

const currentPage = computed(() => {
  return route.path.substring(1)
})

const includeHome = computed(() => {
  return !!currentPage && currentPage.value !== ''
})

const pages = computed(() => {
  const filteredItems = items.filter(item => !isCurrentPage(item.path))
  
  if (isBlogPost()) {
    filteredItems.pop()
  }
  
  return filteredItems
})

function isCurrentPage(path) {
  return currentPage.value === path
}

function isBlogPost() {
  return currentPage.value.startsWith('blog/post')
}
</script>

<style lang="scss" scoped>
nav {
  ul {
    margin: 0 auto;
    list-style-type: none;
    color: #ffffff;
    font-weight: 300;
    font-size: 0.9rem;
    padding: 0;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;

      li {
        display: inline-block;
        background: #0b485b;
        padding: 10px;
        margin-right: 12px;
        margin-bottom: 6px;
        border-radius: 6px;
        width: 13rem;

        &:hover {
          background: #0d556b;
        }
      }
    }

    @media (min-width: 576px) {
      font-size: 1rem;

      a {
        li {
          padding: 10px;
          margin-right: 12px;
          margin-bottom: 12px;
          width: 15rem;
        }
      }
    }

    @media (min-width: 768px) {
      font-size: 0.95rem;

      a {
        li {
          padding: 12px;
          margin-right: 18px;
          width: 19rem;
        }
      }
    }

    @media (min-width: 992px) {
      font-size: 1rem;

      a {
        li {
          padding: 13.5px;
          margin-right: 23px;
          width: 11rem;
        }
      }
    }

    @media (min-width: 1200px) {
      font-size: 1rem;

      a {
        li {
          padding: 15px;
          margin-right: 25px;
          width: 12rem;
        }
      }
    }
  }
}
</style>
