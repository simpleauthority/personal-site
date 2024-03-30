<script setup lang="ts">
import { Size, type Info } from '~/components/BookCard.vue'

export interface Props {
    infos: Info[],
    imageSize?: Size
}

const { infos, imageSize } = defineProps<Props>()

const PER_PAGE = 6
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

function goToPage(newPage: number) {
    if (newPage === page.value) return;
    if (newPage < 1 || newPage > pages) return;
    page.value = newPage
}

const pageOffset = computed(() => page.value == 1 ? 0 : (page.value - 1) * PER_PAGE)
const infosSubset = computed(() => infos.slice(pageOffset.value, pageOffset.value + PER_PAGE))

const navigablePages = computed(() => {
    const tmp = []
    let numEntries = 0
    let curPage = page.value

    // add up to 3 entries, counting downward
    while (curPage > 0 && numEntries < 4) {
        tmp.unshift(curPage)
        numEntries++
        curPage--
    }

    curPage = page.value + 1
    
    // add up to 7 more, counting upward
    while (curPage <= pages && numEntries <= 10) {
        tmp.push(curPage)
        numEntries++
        curPage++
    }

    return tmp
})
</script>

<template>
    <BookCard v-for="info in infosSubset" :key="info.cover_key" :info="info" :size="imageSize" />
    <Paginator v-if="pages > 1" class="mt-4 col-span-full flex justify-evenly" :page="page" :navigable-pages="navigablePages" :has-prev-page="hasPrevPage" :has-next-page="hasNextPage" @prevPage="prevPage" @goToPage="goToPage" @nextPage="nextPage" />
</template>