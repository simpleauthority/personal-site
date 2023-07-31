<script setup>
useHead({
  title: 'About Jacob Andersen',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})
</script>

<template>
  <div>
    <header class="text-center mt-10 mb-5">
      <h1 class="text-title text-4xl">About Me</h1>
    </header>
    <div class="h-full flex flex-col items-center pb-5">
      <ContentDoc class="container space-y-5" />
    </div>
  </div>
</template>