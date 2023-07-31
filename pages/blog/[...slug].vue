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
    <ContentDoc v-slot="{ doc }">
      <header class="text-center mt-10 mb-5">
        <h1 class="text-title text-4xl mb-2">{{ doc.title }}</h1>
        <h2 class="text-subtitle text-2xl">{{ doc.written }}</h2>
      </header>
      <div class="flex flex-col items-center pb-5">
        <ContentRenderer :value="doc" class="container space-y-2"/>
      </div>
    </ContentDoc>
  </div>
</template>