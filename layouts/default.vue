<template>
  <nuxt />
</template>

<script>
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
  }
}
</script>
