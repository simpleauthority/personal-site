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
    <header class="text-center mb-4">
      <h1>My Blog Posts</h1>
    </header>
    <ContentList path="/blog">
        <template #default="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2><nuxt-link :to="article._path">{{ article.title }}</nuxt-link></h2>
            </div>
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
  </div>
</template>