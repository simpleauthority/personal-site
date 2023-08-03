<script setup lang="ts">
import { Info } from '~/components/BookCard.vue'

export interface Props {
    infos: Info[],
    columnCount: number
}

const { infos, columnCount } = defineProps<Props>()

const PER_PAGE = 10
const pages = Math.floor((infos.length + PER_PAGE - 1) / PER_PAGE)
const page = ref(1)

const hasNextPage = computed(() => page.value + 1 <= pages)

function nextPage() {
    if (hasNextPage) {
        page.value++
    }
}

const hasPrevPage = computed(() => page.value > 1)

function prevPage() {
    if (hasPrevPage) {
        page.value--
    }
}

const pageOffset = computed(() => page.value == 1 ? 0 : (page.value - 1) * PER_PAGE)
const infosSubset = computed(() => infos.slice(pageOffset.value, pageOffset.value + PER_PAGE))
</script>

<template>
    <BookCard v-for="info in infosSubset" :key="info.cover_key" :info="info" />
    <div :class="`col-span-${columnCount} flex justify-evenly`">
        <div v-if="hasPrevPage" @click="prevPage">&lt;</div>
        <div v-if="hasNextPage" @click="nextPage">&gt;</div>
    </div>
</template>