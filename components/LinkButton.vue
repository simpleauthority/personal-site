<script setup lang="ts">
defineProps<{ link?: string, text: string, disabledText?: string }>()

const classes = "rounded-full bg-violet-600 text-center py-1"
</script>

<template>
    <a v-if="link" :href="link" :class="classes" class="hover:bg-violet-700">{{ text }}</a>
    <div v-else :class="classes" class="opacity-50">{{ disabledText || "Disabled" }}</div>
</template>