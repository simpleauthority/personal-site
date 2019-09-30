<template>
  <a :href="'mailto:' + email">{{ asText }}</a>
</template>

<script>
export default {
  name: 'EmailLink',
  props: {
    email: {
      type: String,
      required: true
    }
  },
  computed: {
    asText() {
      return this.email.replace('@', '[at]').replace('.', '[dot]')
    }
  }
}
</script>
