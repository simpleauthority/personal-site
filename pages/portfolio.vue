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
    <header class="text-center mb-4">
      <h1>My Portfolio</h1>
    </header>
    <ContentList path="/portfolio">
        <template #default="{ list }">
            <div v-for="entry in list" :key="entry._path">
                <h2>{{ entry.name }}</h2>
                <p>{{ entry.description }}</p>
                <p>{{ entry.link }}</p>
                <p>{{ entry.source_link }}</p>
            </div>
        </template>
        <template #not-found>
            <p>No entries found.</p>
        </template>
    </ContentList>
  </div>
</template>