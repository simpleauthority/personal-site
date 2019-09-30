<template>
  <a :href="'tel:' + phone">{{ phone }}</a>
</template>

<script>
export default {
  name: 'PhoneLink',
  props: {
    phone: {
      type: String,
      required: true
    }
  }
}
</script>
