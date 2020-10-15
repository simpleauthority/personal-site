<template>
  <div>
    <header class="text-center mb-4">
      <h1>About Me</h1>
    </header>
    <main class="editorjs-output">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-for="(block, idx) in content" :key="'about-block-' + idx" v-html="block" />
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'page',
  transition: 'page',
  head() {
    return {
      title: 'About Jacob Andersen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Engineer-in-progress'
        }
      ]
    }
  },
  async asyncData({ app, error }) {
    const about = await app.$strapi.$about.find()

    try {
      about.content = await (() => {
        return app.$parseEjs(about.content)
      })()
    } catch {
      error({
        status: 500,
        message: 'Failed to parse page content'
      })

      return {
        content: 'Failed to load, try again later! Sorry!'
      }
    }

    return about
  }
}
</script>
