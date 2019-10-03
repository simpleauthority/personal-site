<template>
  <b-col cols="12" lg="6" xl="4">
    <b-card
      :title="title"
      :img-src="image"
      :img-alt="alt"
      img-top
      bg-variant="light"
      class="portfolio-entry"
    >
      <b-card-text>
        <slot />
      </b-card-text>
      <template #footer>
        <b-button
          v-if="href !== undefined"
          block
          variant="dark"
          :href="href"
          target="_blank"
        >
          <p>{{ linkText }}</p>
        </b-button>
      </template>
    </b-card>
  </b-col>
</template>

<script>
import defaultPortfolioImage from '../../assets/default-portfolio-image.png'

export default {
  name: 'PortfolioEntry',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: defaultPortfolioImage
    },
    alt: {
      type: String,
      default: 'Some image'
    },
    href: {
      type: String,
      default: undefined
    },
    linkText: {
      type: String,
      default: 'See more'
    }
  }
}
</script>

<style lang="scss">
.portfolio-entry {
  min-height: 575px;
  max-height: 575px;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    min-height: 560px;
    max-height: 560px;
  }

  @media (min-width: 768px) {
    min-height: 580px;
    max-height: 580px;
  }

  @media (min-width: 1200px) {
    min-height: 610px;
    max-height: 610px;
  }

  .card-img-top {
    min-height: 150px;
  }

  .card-text {
    p {
      font-size: 0.95rem;

      @media (min-width: 576px) {
        font-size: 1.05rem;
      }

      @media (min-width: 768px) {
        font-size: 1.1rem;
      }

      @media (min-width: 992px) {
        font-size: 1.1rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.12rem;
      }
    }
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
