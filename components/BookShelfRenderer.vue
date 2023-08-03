<script setup lang="ts">
import { Info } from '~/components/BookCard.vue'

export interface Props {
    name: string,
    fileName: string,
    columnCount: number
}

const { name, fileName, columnCount } = defineProps<Props>()

const flooredColumnCount = computed(() => Math.floor(columnCount))

function buildShelfURL(file: any) {
  const shelfBase = 'https://openlibrary.org/people/jacobandersen/books'
  const limit = 1000

  return `${shelfBase}/${file}?limit=${limit}`
}

const { data, error, pending } = await useFetch<any>(buildShelfURL(fileName))

const infos: Info[] = data.value?.reading_log_entries.map((entry: any) => {
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
    <section>
        <h2 class="text-2xl">{{ name }} ({{ infos.length }})</h2>
        <div :class="`grid grid-cols-${flooredColumnCount} gap-4 justify-items-center`">
            <PaginatedBookCardRenderer :infos="infos" :column-count="flooredColumnCount" />
        </div>
    </section>
</template>