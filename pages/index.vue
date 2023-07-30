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
    <div class="flex-col text-center space-y-12">
      <h1 class="text-title text-9xl">
        Hi, I'm Jacob.
      </h1>
      <h2 class="text-subtitle text-5xl text-[#4f5253]">
        I'm a future Computer Scientist.
      </h2>
      <h3 class="text-subtitle text-3xl text-[#5f6f75]">
        If you'd like, you can:
      </h3>
      <Navigation />
    </div>
  </section>
</template>