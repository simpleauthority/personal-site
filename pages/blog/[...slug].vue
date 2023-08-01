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
      <div class="flex flex-col items-center pb-5 px-5 xs:px-0">
        <div class="prose prose-invert prose-img:mx-auto prose-img:rounded-md prose-img:ring-2 prose-img:ring-violet-300 max-w-none">
          <ContentRenderer :value="doc" class="container space-y-5"/>
        </div>
      </div>
    </ContentDoc>
  </div>
</template>