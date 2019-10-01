<template>
  <span>
    <EmailLink :email="email" />
    <span class="d-none d-sm-inline">&mdash;</span>
    <span class="d-block d-sm-none" />
    <PhoneLink :phone="phone" />
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
