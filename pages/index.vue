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

    <nav>
      <ul>
        <nuxt-link to="/about">
          <li>
            Learn about me
          </li>
        </nuxt-link>
        <nuxt-link to="/resume">
          <li>
            See my resume
          </li>
        </nuxt-link>
        <nuxt-link to="/portfolio">
          <li>
            Peruse my work
          </li>
        </nuxt-link>
        <nuxt-link to="/blog">
          <li>
            Read my blog
          </li>
        </nuxt-link>
      </ul>
    </nav>
  </section>
</template>

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

  nav {
    ul {
      list-style-type: none;
      font-size: 1rem;
      color: #ffffff;
      font-weight: 300;

      a {
        color: inherit;
        text-decoration: none;

        li {
          display: inline-block;
          background: #0B485B;
          padding: 15px;
          margin-right: 25px;
          border-radius: 6px;
          width: 12rem;

          &:hover {
            background: #0d556b;
          }
        }
      }
    }
  }
}
</style>
