<template>
  <section>
    <h1 class="text-title">
      Hi, I'm Jacob.
    </h1>

    <h2 class="text-subtitle">
      I'm a future Computer Scientist.
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
  head () {
    return {
      title: 'Jacob Andersen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Computer Scientist in progress'
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
    font-size: 2.9rem;
    margin-bottom: 0.8rem;

    @media (min-width: 576px) {
      font-size: 5rem;
      margin-bottom: 0.87rem;
    }

    @media (min-width: 768px) {
      font-size: 5.3rem;
      margin-bottom: 0.95rem;
    }

    @media (min-width: 992px) {
      font-size: 6rem;
      margin-bottom: 1rem;
    }

    @media (min-width: 1200px) {
      font-size: 7rem;
      margin-bottom: 1.8rem;
    }
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #4f5253;

    @media (min-width: 576px) {
      font-size: 1.95rem;
      margin-bottom: 1.75rem;
    }

    @media (min-width: 768px) {
      font-size: 2.25rem;
      margin-bottom: 1.8rem;
    }

    @media (min-width: 992px) {
      font-size: 2.6rem;
      margin-bottom: 2.3rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.9rem;
      margin-bottom: 3rem;
    }
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #5f6f75;

    @media (min-width: 576px) {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 1.3rem;
    }

    @media (min-width: 992px) {
      font-size: 1.5rem;
      margin-bottom: 1.3rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
