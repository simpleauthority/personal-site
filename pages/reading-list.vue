<script setup>
useHead({
  title: 'Jacob Andersen\'s Resume',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})

const books = (await queryContent('reading-list').find())[0].books
const currentlyReading = books.filter(book => book.status === 'active')[0]
const inQueue = books.filter(book => book.status === 'queue')
</script>

<template>
  <div class="grid grid-cols-2">
    <section class="col-span-2">
      <BodyLink to="/" link-text="← Go Back" />
    </section>
    <section class="col-span-2 row-span-3 pb-6">
        <h1 class="font-semibold text-4xl lg:text-6xl xl:text-8xl bg-violet-600 p-2 mb-6">Reading List</h1>
        <p class="font-extralight text-xl">Alright. Well, here it is. The reading list. Do I earn the "Bibliophile" title yet? Don't worry, I'll add more books.</p>
    </section>
    <section>
      <h2 class="text-4xl">Currently Reading</h2>
      <h3 class="text-2xl">{{ currentlyReading.title }} by {{ currentlyReading.author }}</h3>
    </section>
    <section>
      <h2 class="text-4xl">Still To Read</h2>
      <div class="grid grid-cols-2">
        <div v-for="book in inQueue" :key="`${book.id.type}-${book.id.value}`">
            {{ book.title }} by {{ book.author }}
        </div>
      </div>
    </section>
  </div>
</template>