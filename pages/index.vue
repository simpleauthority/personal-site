<template>
  <section>
    <h1 class="text-title">
      Hi, I'm Jacob.
    </h1>

    <h2 class="text-subtitle">
      I'm a future engineer.
    </h2>

    <h3 class="text-subtitle">
      If you'd like, you can:
    </h3>

    <Nav />
  </section>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: { Nav },
  head() {
    return {
      title: 'Jacob Andersen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A description'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  h1 {
    font-size: 1rem;

   @media (min-width: 576px) {
      font-size: 2.5rem;
    }

   @media (min-width: 768px) {
      font-size: 4rem;
    }

   @media (min-width: 992px) {
      font-size: 6rem;
    }

   @media (min-width: 1200px) {
      font-size: 7rem;
      margin-bottom: 1.6rem;
    }
  }

  h2 {
    font-size: 0.75rem;
    color: #4F5253;

    @media (min-width: 576px) {
      font-size: 1.35rem;
    }

    @media (min-width: 768px) {
      font-size: 1.9rem;
    }

    @media (min-width: 992px) {
      font-size: 2.6rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.9rem;
      margin-bottom: 3rem;
    }
  }

  h3 {
    font-size: 0.5rem;
    color: #5F6F75;

    @media (min-width: 576px) {
      font-size: 0.6rem;
    }

    @media (min-width: 768px) {
      font-size: 0.75rem;
    }

    @media (min-width: 992px) {
      font-size: 1rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
