<script setup lang="ts">
useHead({
  title: 'Jacob Andersen\'s Reading List',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})
</script>

<template>
  <div class="grid grid-cols-3">
    <section class="col-span-3 mb-4">
      <BodyLink to="/" link-text="← Go Back" />
    </section>
    <section class="col-span-3 pb-6">
        <h1 class="font-semibold text-4xl lg:text-6xl xl:text-8xl bg-violet-600 p-2 mb-6">Reading List</h1>
        <p class="font-extralight text-xl">Alright. Well, here it is. The reading list. Do I earn the "Bibliophile" title yet? Don't worry, I'll add more books.</p>
    </section>
    <BookShelfRenderer name="To Be Read" file-name="want-to-read.json" :column-count="2" />
    <BookShelfRenderer name="Currently Reading" file-name="currently-reading.json" :column-count="1" />
    <BookShelfRenderer name="Already Read" file-name="already-read.json" :column-count="2" />
  </div>
</template>