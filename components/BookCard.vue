<script setup lang="ts">
export interface Props {
    size?: Size,
    info: Info
}

const { size, info } = withDefaults(defineProps<Props>(), { size: Size.Medium })

const coverURL = computed(() => {
    if (!info.cover_key) {
        return '/img/no_image_found.jpg'
    }

    return `https://covers.openlibrary.org/b/olid/${info.cover_key}-${size}.jpg`
})
</script>

<script lang="ts">
export enum Size {
    Small = "S",
    Medium = "M",
    Large = "L"
}

export interface Author {
    name: string,
    key: string
}

export interface Info {
    title: string,
    author: Author,
    cover_key: string
}
</script>

<template>
    <div>
        <img :src="coverURL" :alt="info.title" class="w-[180px] h-[280px]" />
        {{ info.title }} by {{ info.author.name }}
    </div>
</template>