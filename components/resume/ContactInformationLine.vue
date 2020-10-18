<template>
  <span>
    <EmailLink class="email" :email="email" />
    <span class="d-none d-lg-inline">&mdash;</span>
    <span class="d-block d-lg-none" />
    <PhoneLink class="phone" :phone="phone" />
  </span>
</template>

<script>
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'

export default {
  name: 'ContactInformationLine',
  components: { EmailLink, PhoneLink },
  props: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.email {
  font-size: 1.25rem;

  @media (min-width: 576px) {
    font-size: 2rem;
    margin-bottom: 0.87rem;
  }
}
</style>
