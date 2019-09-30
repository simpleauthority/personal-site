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

<style lang="scss">
.list-group-item {
  font-size: 0.75rem;

  @media (min-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 992px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
}
</style>
