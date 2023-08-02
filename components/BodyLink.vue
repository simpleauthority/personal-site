<script setup lang="ts">
defineProps<{ to?: string, linkText: string, linkClass?: string, containerClass?: string }>()
</script>

<template>
    <div :class="containerClass || ''">
        <nuxt-link :to="to" :class="linkClass || ''" class="text-indigo-300 hover:text-indigo-500">{{ linkText }}</nuxt-link>
        <p class="text-sm"><slot></slot></p>
    </div>
</template>