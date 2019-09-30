<template>
  <b-list-group>
    <b-list-group-item v-for="(item, idx) in items" :key="idx">
      {{ item }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'SimpleListGroup',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
