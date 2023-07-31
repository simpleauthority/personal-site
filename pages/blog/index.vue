<script setup>
useHead({
  title: 'Jacob Andersen\'s Blog',
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
      <h1 class="text-title text-4xl">My Blog Posts</h1>
    </header>
    <ContentList path="/blog" :query="{sort: [{written: 1}]}">
        <template #default="{ list }">
          <div class="flex justify-center pb-5 px-5">
            <div class="container">
              <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                <div v-for="entry in list" :key="entry._path" class="rounded-md w-full border-2 border-black p-5">
                    <h2 class="text-subtitle text-2xl"><a :href="entry._path">{{ entry.title }}</a></h2>
                    <h3 class="text-subtitle text-lg mb-2">{{ entry.written }}</h3>
                    <p>{{ entry.description }}</p>
                    <div class="flex gap-x-6 mt-5">
                      <nuxt-link :to="entry._path" class="rounded-full text-blue-100 bg-blue-400 hover:bg-blue-600 w-full text-center p-2">Continue reading</nuxt-link>
                    </div>
                </div>
              </section>
            </div>
          </div>
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
  </div>
</template>