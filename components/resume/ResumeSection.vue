<template>
  <b-card bg-variant="light" header-tag="header">
    <h4 slot="header">
      <slot name="header" />
    </h4>
    <b-card-text>
      <slot name="content" />
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'ResumeSection'
}
</script>
