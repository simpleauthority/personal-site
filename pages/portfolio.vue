<script setup>
useHead({
  title: 'Jacob Andersen\'s Portfolio',
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
      <h1 class="text-title text-4xl">My Portfolio</h1>
    </header>
    <ContentList path="/portfolio">
        <template #default="{ list }">
          <div class="flex justify-center pb-5">
            <div class="container">
              <section class="grid grid-cols-2 gap-x-8 gap-y-4">
                <div v-for="entry in list" :key="entry._path" class="rounded-md w-full border-2 border-black p-5">
                    <h2 class="text-subtitle text-2xl mb-2">{{ entry.name }}</h2>
                    <p>{{ entry.description }}</p>
                    <div class="flex gap-x-6 mt-5">
                      <a v-if="!!entry.link" :href="entry.link" target="_blank" class="rounded-full text-blue-100 bg-blue-400 hover:bg-blue-600 w-full text-center p-2">View demo</a>
                      <a :href="entry.source_link" target="_blank" class="rounded-full text-blue-100 bg-blue-400 hover:bg-blue-600 w-full text-center p-2">View source</a>
                    </div>
                </div>
              </section>
            </div>
          </div>
        </template>
        <template #not-found>
            <p>No entries found.</p>
        </template>
    </ContentList>
  </div>
</template>