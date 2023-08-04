<script setup lang="ts">
export interface Props {
    page: number,
    navigablePages: number[],
    hasPrevPage: boolean,
    hasNextPage: boolean
}

const { page, navigablePages } = defineProps<Props>()

defineEmits<{
    prevPage: [void],
    goToPage: [page: number],
    nextPage: [void]
}>()
</script>

<template>
    <div>
        <div v-if="hasPrevPage" @click="$emit('prevPage')" class="inline text-indigo-300 hover:text-indigo-500 hover:cursor-grab">Previous</div>
        <div v-for="navigablePage in navigablePages" @click="$emit('goToPage', navigablePage)" :class="{'font-black': navigablePage === page}" class="inline text-indigo-300 hover:text-indigo-500 hover:cursor-grab">
            {{ navigablePage }}
        </div>
        <div v-if="hasNextPage" @click="$emit('nextPage')" class="inline text-indigo-300 hover:text-indigo-500 hover:cursor-grab">Next</div>
    </div>
</template>