<template>
  <div>
    <header class="text-center mb-4">
      <h1>{{ post.post_title }}</h1>
      <h2>
        {{ formatLong(post.posted) }}
      </h2>
    </header>
    <main class="fullpost">
      <b-container>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-for="(block, idx) in post.post_content" :key="'post-block-' + idx" v-html="block" />
        <b-button to="/blog" variant="info" block class="go-back">
          Go back to all posts
        </b-button>
      </b-container>
    </main>
  </div>
</template>

<script>
import DateMixin from '~/mixins/date-mixin'

export default {
  layout: 'page',
  head() {
    return {
      title: this.post.post_title + ' - Jacob Andersen\'s Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Engineer-in-progress'
        }
      ]
    }
  },
  mixins: [DateMixin],
  validate({ params }) {
    return /^[A-z0-9-_]*$/.test(params.slug)
  },
  async asyncData({ app, params, error }) {
    const post = (await app.$strapi['$blog-posts'].find({
      post_slug: params.slug,
      _limit: 1
    }))[0]

    if (post === undefined) {
      error({ status: 404, message: 'Unknown Post' })
      return
    }

    try {
      post.post_content = await (() => {
        return app.$parseEjs(post.post_content)
      })()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      error({
        status: 500,
        message: 'Failed to parse post content'
      })
      return
    }

    return { post }
  }
}
</script>

<style lang="scss">
body {
  .fullpost {
    width: 48rem;
    margin: 0 auto 2rem auto;

    section {
      .alert {
        width: 48rem;
        margin: 0 auto 2rem auto;
      }

      table {
        width: 48rem;
        margin: 0 auto 2rem auto;
        background: #ededed;
        color: #2b2b2b;

        &, th, td {
          border: 3px solid #e0e0e0;
          padding: 1rem;
        }
      }

      div {
        &.img {
          box-sizing: border-box;
          max-width: 48rem;
          margin: 0 auto 2rem auto;

          img {
            width: 100%;
            margin: 0;
          }

          span {
            &.caption {
              font-style: italic;
              display: block;
              margin: 10px 0 5px 0;
            }

            &.positioned-caption {
              position: relative;
              margin: 0;
              bottom: 20px;
              left: 30px;
            }

            &.bolded-caption {
              font-weight: 500;
            }
          }
        }

        &.img-stretched {
          max-width: 100%;
        }

        &.img-bordered {
            border: 2px solid #e0e0e0;
        }

        &.img-with-bg {
          background: url('~assets/image-bg-pattern.png');
          background-repeat: repeat;

          img {
            padding: 2rem;
          }
        }
      }

      pre {
        width: 48rem;
        margin: 0 auto 2rem auto;
        padding: 2rem;
        color: #efefef;
        background: #2B2B2B;
      }

      blockquote {
        background: #ededed;
        border-left: 10px solid #ccc;
        margin: 1.5em auto 2rem auto;
        padding: 1rem 10px;
        font-size: 2.25rem;
        quotes: "\201C""\201D""\2018""\2019";
        border-radius: 3px;

        &:before {
          color: #ccc;
          content: open-quote;
          font-size: 9rem;
          line-height: 0.1em;
          margin-right: 0.1em;
          vertical-align: -0.5em;
        }

        p {
          display: inline;

          &.main {
            vertical-align: -1rem;
          }
        }

        footer {
          font-size: 1.5rem;
          margin: 1rem 0 0 17rem;
        }
      }

      iframe {
        &.media-embed {
          width: 48rem;
        }
      }

      .checklist {
        margin-bottom: 2rem;

        .form-check {
          input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

              &:checked ~ .checkmark {
                background-color: #2196F3;
              }

              &:checked ~ .checkmark:after {
                display: block;
              }
          }

          .checkmark {
            position: absolute;
            top: 12px;
            left: 0;
            height: 35px;
            width: 35px;
            background-color: #ababab;

            &:after {
                content: "";
                position: absolute;
                display: none;
                left: 12px;
                top: 6px;
                width: 8px;
                height: 16px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
          }

          label {
            font-size: 1.7rem;
            margin-left: 24px;
            line-height: 60px;
          }
        }
      }
    }

    .go-back {
      display: block;
      width: 48rem;
      margin: 40px 0 20px 0;
    }
  }
}
</style>
