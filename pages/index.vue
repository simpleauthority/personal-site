<script setup>
useHead({
  title: 'Jacob Andersen',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})

definePageMeta({
  layout: "no-nav",
});
</script>

<template>
  <section class="h-full flex justify-center items-center">
    <div class="flex-col text-center">
      <div class="mb-6 xxs:mb-12 space-y-4">
        <h1 class="text-title text-4xl xxs:text-6xl sm:text-8xl">
          Hi, I'm Jacob.
        </h1>
        <h2 class="text-subtitle text-xl xxs:text-2xl sm:text-4xl text-[#4f5253]">
          I'm a future Computer Scientist.
        </h2>
        <h3 class="text-subtitle text-lg xxs:text-xl sm:text-3xl text-[#5f6f75]">
          If you'd like, you can:
        </h3>
      </div>
      <Navigation />
    </div>
  </section>
</template>