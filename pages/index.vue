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
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <section class="lg:col-span-2">
      <h1 class="font-semibold text-4xl lg:text-6xl bg-violet-600 p-2 mb-6">Jacob Andersen</h1>
        <h2 class="font-light text-xl lg:text-2xl mb-4">Computer Scientist, Software Artisan, Bibliophile, Husband</h2>
        <p class="font-extralight text-lg">Welcome to my humble abode on the Internet. Sometimes I write posts about computer science and/or software development (not necessarily at the same time). Other times I like to post about things I'm reading or doing. I also like to post about life in general. All things considered, nothing is predictable here. All opinions are my own and do not reflect those of any of my employers: past, present, or future.</p>
    </section>
    <section class="lg:col-span-1">
        <div class="mb-4">
          <h1 class="font-semibold text-2xl">The Shelf</h1>
          <p class="font-light text-sm">This section is a shelf. Indeed, a splendid little shelf chock full of trinkets and widgets and gadgets and all manner of other whimsical oddities. Here you can find your way around my dwelling, until you've seen it all. Welcome one, welcome all. Please clean up as you go.</p>
        </div>
        <div class="font-light text-xl grid grid-cols-2 gap-4">
          <BodyLink to="/blog" linkText="Blog" class="block sm:hidden">
            Penny for <span class="font-bold">my</span> thoughts? Why, don't mind if I do...
          </BodyLink>
          <BodyLink to="/projects" linkText="Projects" class="block lg:hidden">
            Come have a look at my trinkets and widgets and gadgets and things!
          </BodyLink>
          <BodyLink to="/resume" linkText="Resume">
            If you're into that sort of thing, have a look...
          </BodyLink>
          <BodyLink to="/contact" linkText="Get In Touch">
            Wanna chat? Well get in line, bucko! Details inside.
          </BodyLink>
          <BodyLink to="/reading-list" linkText="Reading List">
            You saw that "Bibliophile" word, right? Yeah...
          </BodyLink>
          <BodyLink to="/gallery" linkText="Photo Gallery">
            I like to take photos. After I organize them, I put some of my favorites in this album.
          </BodyLink>
        </div>
    </section>
    <section class="hidden lg:block lg:col-span-2">
      <BodyLink to="/portfolio" container-class="text-2xl mb-4" link-class="font-semibold" link-text="Projects">
        Come have a look at my trinkets and widgets and gadgets and things!
      </BodyLink>
      <ContentList path="/portfolio">
        <template #default="{ list }">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div v-for="entry in list" :key="entry._path" class="flex flex-col justify-between ring-1 ring-violet-300 rounded-md p-4">
                <div>
                  <h2 class="text-xl mb-2 font-medium">{{ entry.name }}</h2>
                  <p class="ml-1 font-thin">{{ entry.description }}</p>
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
    <section class="hidden sm:block sm:col-span-2 lg:col-span-1">
        <BodyLink to="/blog" container-class="text-2xl mb-4" link-class="font-semibold" link-text="Blog">
          Penny for <span class="font-bold">my</span> thoughts? Why, don't mind if I do...
        </BodyLink>
        <section>
          <ContentList path="/blog" :query="{sort: [{written: 1}], limit: 10}">
            <template #default="{ list }">
              <ul class="space-y-6">
                <li v-for="entry in list" :key="entry._path" class="ring-1 ring-violet-300 p-4 rounded-md">
                  <h2 class="text-xl font-medium"><nuxt-link :href="entry._path" class="text-indigo-300 hover:text-indigo-500">{{ entry.title }}</nuxt-link></h2>
                  <div class="ml-1 space-y-2 font-thin">
                    <h3 class="italic">{{ entry.written }}</h3>
                    <p>{{ entry.description }}</p>
                  </div>
                </li>
              </ul>
            </template>
          </ContentList>
        </section>
    </section>
  </div>
</template>