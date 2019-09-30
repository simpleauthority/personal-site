<template>
  <section class="resume-entry">
    <h5>
      {{ title }}
    </h5>
    <slot name="content" />
  </section>
</template>

<script>
export default {
  name: 'ResumeEntry',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.resume-entry {
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  h5 {
    font-size: 1rem;

    @media (min-width: 576px) {
      font-size: 1.35rem;
    }
  }

  p {
    margin: 2px 0;
    font-size: 0.75rem;

    @media (min-width: 576px) {
      font-size: 1.15rem;
    }
  }

  ul {
    margin-top: 15px;
    list-style-type: lower-roman;

    li {
      margin: 4px 0;
      font-size: 0.75rem;

      @media (min-width: 576px) {
        font-size: 1.15rem;
      }

      @media (min-width: 992px) {
        margin: 8px 0;
      }
    }
  }
}
</style>
