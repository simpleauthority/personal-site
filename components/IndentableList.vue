<template>
  <ul :class="out ? 'outdented' : 'indented'">
    <li v-for="(item, idx) in items" :key="idx">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IndentableList',
  props: {
    items: {
      type: Array,
      required: true
    },
    out: {
      type: Boolean,
      default: false
    }
  }
}
</script>
