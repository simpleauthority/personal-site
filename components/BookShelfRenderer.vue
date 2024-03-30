<script setup lang="ts">
import { Size, type Info } from '~/components/BookCard.vue'

export interface Props {
    name: string,
    fileName: string,
    columnCount: number,
    imageSize?: Size
}

const { name, fileName, columnCount, imageSize } = defineProps<Props>()

const flooredColumnCount = computed(() => Math.floor(columnCount))

function buildShelfURL(file: any) {
  const shelfBase = 'https://openlibrary.org/people/jacobandersen/books'
  const limit = 1000

  return `${shelfBase}/${file}?limit=${limit}`
}

const data = await $fetch<any>(buildShelfURL(fileName))

const infos: Info[] = data?.reading_log_entries.map((entry: any) => {
    return {
        title: entry.work.title || "Unknown Title",
        cover_key: entry.work.cover_edition_key || undefined,
        author: {
            name: entry.work.author_names[0],
            key: entry.work.author_keys[0]
        }
  }
})
</script>

<template>
    <section class="ring-2 p-4 rounded-md">
        <h2 class="text-2xl mb-2">{{ name }} <span v-if="infos">({{ infos.length }})</span></h2>
        <div :class="`grid grid-cols-${flooredColumnCount} gap-4`">
            <PaginatedBookCardRenderer :infos="infos" :image-size="imageSize" />
        </div>
    </section>
</template>