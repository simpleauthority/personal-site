<template>
  <section class="opener">
    <div class="opener-text">
      <h1 class="animated fadeInDown delay-1s">
        Oh, hey there.
      </h1>
      <h2 class="animated fadeIn delay-2s">
        My name is Jacob. I make cool stuff on the computer.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Jacob Andersen's Personal Website",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Enter Jacob's world and take an adventure through inventive new technologies"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'assets/animate.css';

.opener {
  width: 100%;
  height: calc(100vh - 56px);
  background-image: url('~assets/nasa-backdrop.jpg');
  background-size: cover;
  background-position: center;

  .opener-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    color: rgba(230, 230, 230, 0.65);

    h1 {
      font-size: 3rem;

      @media (min-width: 576px) {
        font-size: 4.5rem;
      }

      @media (min-width: 768px) {
        font-size: 6rem;
      }

      @media (min-width: 992px) {
        font-size: 8rem;
      }

      @media (min-width: 1200px) {
        font-size: 10rem;
      }
    }

    h2 {
      font-size: 0.75rem;

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
        font-size: 3rem;
      }
    }
  }
}
</style>
