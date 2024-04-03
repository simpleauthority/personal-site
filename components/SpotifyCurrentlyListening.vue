<script setup lang="ts">
interface Artist {
  name: string,
  type: string
}

interface Image {
  width: number,
  height: number,
  url: string
}

interface Album {
  album_type: string,
  artists: Artist[],
  images: Image[]
  name: string,
}

interface Item {
  album: Album,
  artists: Artist[],
  duration_ms: number,
  name: string
}

interface NowPlayingResponse {
  progress_ms: number,
  is_playing: boolean,
  item: Item
}

function fetchCurrentlyListening(): Promise<NowPlayingResponse> {
  return $fetch<NowPlayingResponse>("https://spotify-now-playing.algorithmjunkie.workers.dev")
}

function msToMinutesSeconds(ms: number): string {
  const minutes = (Math.floor(ms/60/1000) % 60).toString()
  const seconds = (Math.floor(ms/1000) % 60).toString()
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

let now = ref(await fetchCurrentlyListening())
let paused = computed(() => !now.value.is_playing)

const classList = "font-light text-sm"

onMounted(async () => {
  setInterval(async () => {
    now.value = await fetchCurrentlyListening()
  }, 1000)
})
</script>

<template>
  <p :class="classList" v-if="!now">
    Not currently listening to anything.
  </p>
  <p :class="classList" v-else>{{ paused ? "(paused) " : "" }}{{ now.item.name }} by {{ now.item.artists[0].name }} ({{ msToMinutesSeconds(now.progress_ms) }} / {{ msToMinutesSeconds(now.item.duration_ms) }})</p>
</template>