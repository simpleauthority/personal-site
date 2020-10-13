<template>
  <div>
    <header class="text-center mb-4">
      <h1>About Me</h1>
    </header>
    <main>
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="content" />
      </b-container>
    </main>
  </div>
</template>

<script>
import remark from 'remark'
import html from 'remark-html'

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
        return new Promise((resolve, reject) => (
          remark()
            .use(html)
            .use({
              settings: {
                emphasis: '_',
                strong: '*'
              }
            })
            .process(about.content, (err, file) => {
              if (err) {
                reject(err)
              } else {
                resolve(file.contents)
              }
            })
        ))
      })()
    } catch {
      error({
        status: 500,
        message: 'Failed to parse post content'
      })
      return {
        content: 'Failed to load, try again later! Sorry!'
      }
    }

    return about
  }
}
</script>
