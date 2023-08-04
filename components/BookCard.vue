<script setup lang="ts">
export interface Props {
    size?: Size,
    info: Info
}

const { size, info } = withDefaults(defineProps<Props>(), { size: Size.Small })

const coverURL = computed(() => {
    if (!info.cover_key) {
        return '/img/no_image_found.jpg'
    }

    return `https://covers.openlibrary.org/b/olid/${info.cover_key}-${size}.jpg`
})

const imageSizeClass = computed(() => {
    switch (size) {
        case Size.Small:
            return "w-[37px] h-[58px]"
        case Size.Medium:
            return "w-[180px] h-[280px]"
        case Size.Large:
            return "w-[321px] h-[500px]"
    }
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
    <div class="flex gap-x-4 items-center">
        <img :src="coverURL" :alt="info.title" :class="imageSizeClass" />
        <div>
            <p class="font-medium">{{ info.title }}</p>
            <p class="text-sm font-thin">{{ info.author.name }}</p>
        </div>
    </div>
</template>