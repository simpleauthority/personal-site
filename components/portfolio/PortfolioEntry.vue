<template>
  <b-col cols="12" lg="6" xl="4" class="entry-container">
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
          <p class="link-text">
            {{ linkText }}
          </p>
        </b-button>
      </template>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'PortfolioEntry',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
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
.entry-container {
  margin-bottom: 15px;

  .portfolio-entry {
    min-height: 575px;
    max-height: 575px;

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
      height: 14rem;
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

      .link-text {
        margin-top: 1rem;
      }
  }
}
</style>
