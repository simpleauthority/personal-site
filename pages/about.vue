<template>
  <div>
    <header class="text-center mb-4">
      <h1>About Me</h1>
    </header>
    <main class="editorjs-output">
      <b-container>
        <div v-html="about_me" />
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'page',
  transition: 'page',
  async asyncData ({ $single }) {
    return await $single('about_me').read()
  },
  head () {
    return {
      title: 'About Jacob Andersen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Computer Scientist in progress'
        }
      ]
    }
  }
}
</script>
