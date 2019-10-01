<template>
  <div>
    <!-- eslint-disable -->
    <p
      v-for="(item, idx) in items"
      :key="idx"
      :class="out ? 'outdented' : 'indented'"
      v-html="item"
    />
  </div>
</template>

<script>
export default {
  name: 'IndentableParagraph',
  props: {
    out: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
