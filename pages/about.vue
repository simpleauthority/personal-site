<template>
  <div>
    <header class="text-center mb-4">
      <h1>About Me</h1>
    </header>
    <main>
      <b-container>
        <p>{{ content }}</p>
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'page',
  transition: 'page',
  async asyncData({ app }) {
    return await app.$strapi.$about.find()
  }
}
</script>
