<script setup>
useHead({
  title: 'Jacob Andersen',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto flex gap-x-32">
    <section class="flex flex-col justify-between w-3/5 gap-y-12">
      <section>
        <h1 class="font-semibold text-8xl bg-violet-600 p-2 mb-6">Jacob Andersen</h1>
        <div class="font-thin">
          <h2 class="text-3xl mb-4">Computer Scientist, Software Artisan, Bibliophile, Husband</h2>
          <p class="text-sm text">Welcome to my humble abode on the Internet. Sometimes I write posts about computer science and/or software development (not necessarily at the same time). Other times I like to post about things I'm reading or doing. I also like to post about life in general. All things considered, nothing is predictable here. All opinions are my own and do not reflect those of any of my employers: past, present, or future.</p>
        </div>
      </section>
      <section>
        <h1 class="font-semibold text-3xl mb-4">My Projects</h1>
        <ContentList path="/portfolio">
          <template #default="{ list }">
            <div class="grid grid-cols-2 gap-x-12 gap-y-8">
                <div v-for="entry in list" :key="entry._path" class="flex flex-col justify-between ring-1 ring-violet-300 rounded-md p-4">
                  <div>
                    <h2 class="text-xl mb-2 font-medium">{{ entry.name }}</h2>
                    <p class="text-sm ml-1 font-thin">{{ entry.description }}</p>
                  </div>
                  <div class="flex flex-col gap-y-2 mt-5 text-sm font-light">
                    <LinkButton :link="entry.link" text="View Demo" disabled-text="No Demo Available" />
                    <LinkButton :link="entry.source_link" text="View Source" />
                  </div>
                </div>
            </div>
          </template>
        </ContentList>
      </section>
    </section>
    <section class="flex flex-col justify-start w-2/5 gap-y-12">
      <div>
        <div class="mb-4">
          <h1 class="font-semibold text-3xl">Miscellania</h1>
          <p class="font-light text-xs">Here are links to a few things that I can't figure out a good place for. Kind of like <span class="italic">that</span> bookshelf in <span class="italic">that</span> room that you really want to clean but haven't yet...</p>
        </div>
        <ul class="font-light text-xl space-y-2">
          <li><nuxt-link to="/reading-list" class="text-indigo-300 hover:text-indigo-500">Reading List</nuxt-link> <p class="text-xs">You saw that "Bibliophile" word, right? Yeah...</p></li>
          <li><nuxt-link to="/gallery" class="text-indigo-300 hover:text-indigo-500">Photo Gallery</nuxt-link> <p class="text-xs">I like to take photos...when I get time, they'll be in here...</p></li>
          <li><nuxt-link to="/resume" class="text-indigo-300 hover:text-indigo-500">Resume</nuxt-link> <p class="text-xs">If you're into that sort of thing, have a look...</p></li>
          <li><nuxt-link to="/contact" class="text-indigo-300 hover:text-indigo-500">Get In Touch</nuxt-link> <p class="text-xs">You can get ahold of me if you want to...details inside!</p></li>
        </ul>
      </div>
      <div>
        <h1 class="font-semibold text-3xl mb-4">My Blog Posts</h1>
        <section>
          <ContentList path="/blog" :query="{sort: [{written: 1}], limit: 10}">
            <template #default="{ list }">
              <ul class="space-y-6">
                <li v-for="entry in list" :key="entry._path" class="ring-1 ring-violet-300 p-4 rounded-md">
                  <h2 class="text-xl font-medium"><nuxt-link :href="entry._path" class="text-indigo-300 hover:text-indigo-500">{{ entry.title }}</nuxt-link></h2>
                  <div class="ml-1 space-y-2 font-thin">
                    <h3 class="italic">{{ entry.written }}</h3>
                    <p class="text-sm">{{ entry.description }}</p>
                  </div>
                </li>
              </ul>
            </template>
          </ContentList>
        </section>
      </div>
    </section>
  </div>
</template>