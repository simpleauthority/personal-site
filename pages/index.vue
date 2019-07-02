<template>
  <section class="opener">
    <div class="opener-text">
      <h1 class="animated fadeInDown delay-1s">
        Oh, hey there.
      </h1>
      <h2 class="animated fadeIn delay-2s">
        My name is Jacob. I make cool stuff at the computer.
      </h2>
    </div>
  </section>
</template>

<style lang="scss">
@import 'assets/animate.css';

.opener {
  width: 100%;
  height: calc(100vh - 56px);
  background-image: url('~assets/nasa-backdrop.jpg');
  background-size: cover;
  background-position: center;

  .opener-text {
    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: rgba(230, 230, 230, 0.65);

    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
}
</style>
