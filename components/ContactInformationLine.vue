<template>
  <span>
    <EmailLink :email="email" />
    &mdash;
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
