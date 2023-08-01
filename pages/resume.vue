<script setup>
useHead({
  title: 'Jacob Andersen\'s Resume',
  meta: [
    {
      name: 'description',
      content: 'Computer Scientist in progress'
    }
  ]
})
</script>

<template>
  <div class="flex flex-col items-center pb-5">
    <ContentDoc v-slot="{ doc }">
      <header class="text-center mt-10 mb-5">
        <h1 class="text-title text-4xl">{{ doc.full_name }}</h1>
          <div>
            <h2 class="text-subtitle text-xl sm:text-2xl"><a :href="`mailto:${doc.email}`">{{ doc.email }}</a><span class="hidden sm:inline-block">&nbsp;&ndash;&nbsp;</span><br class="block sm:hidden" /><a :href="`tel:${doc.phone_number}`">{{ doc.phone_number }}</a></h2>
          </div>
      </header>
      <main class="space-y-5 px-5">
        <!-- objective -->
        <section>
          <header>
            <h2 class="text-title text-2xl underline underline-offset-3 mb-2">Objective</h2>
          </header>
          <main>
            <p>{{ doc.current_goal }}</p>
          </main>
        </section>
        <!-- qualifications -->
        <section>
          <header>
            <h2 class="text-title text-2xl underline underline-offset-3 mb-2">Qualifications</h2>
          </header>
          <main class="flex flex-col sm:flex-row sm:justify-evenly gap-y-5 sm:gap-y-0 sm:gap-x-5">
            <!-- relevant skills -->
            <section class="rounded-md w-full ring-2 ring-violet-300 p-5">
              <header>
                <h2 class="text-subtitle text-xl underline underline-offset-2 pb-2">Relevant Skills</h2>
              </header>
              <main>
                <ul class="list-disc list-inside">
                  <li v-for="(skill, i) in doc.relevant_skills" :key="`relevant_skill_${i}`">
                      {{ skill }}
                  </li>
                </ul>
              </main>
            </section>
            <!-- other skills -->
            <section class="rounded-md w-full ring-2 ring-violet-300 p-5">
              <header>
                <h2 class="text-subtitle text-xl underline underline-offset-2 pb-2">Other Skills</h2>
              </header>
              <main>
                <ul class="list-disc list-inside">
                  <li v-for="(skill, i) in doc.other_skills" :key="`other_skill_${i}`">
                      {{ skill }}
                  </li>
                </ul>
              </main>
            </section>
          </main>
        </section>
        <!-- professional experience -->
        <section class="rounded-md w-full ring-2 ring-violet-300 p-5">
          <header>
            <h2 class="text-title text-2xl underline underline-offset-3 mb-2">Professional Experience</h2>
          </header>
          <main>
            <ul class="space-y-4">
              <li v-for="(experience, i) in doc.professional_experience" :key="`experience_${i}`">
                  <h1 class="text-xl mb-1 sm:mb-0">{{ experience.job_title }}<span class="hidden sm:inline-block">,&nbsp;</span><br class="block sm:hidden" />{{ experience.company_name }}</h1>
                  <div class="indent-0 sm:indent-2">
                    <p class="mb-1 sm:mb-0 font-light"><span>{{ experience.start_date }}</span> &ndash; <span >{{ experience.end_date }}</span></p>
                    <ul class="list-[upper-roman] list-inside space-y-1 text-sm sm:text-base">
                      <li v-for="(highlight, j) in experience.highlights" :key="`experience_${i}_highlight_${j}`">
                          {{ highlight }}
                      </li>
                    </ul>
                  </div>
              </li>
            </ul>
          </main>
        </section>
        <!-- education -->
        <section class="rounded-md w-full ring-2 ring-violet-300 p-5">
          <header>
            <h2 class="text-title text-2xl underline underline-offset-3 mb-2">Education</h2>
          </header>
          <main>
            <ul class="space-y-4">
              <li v-for="(education, i) in doc.education" :key="`education_${i}`">
                <h1 class="text-xl">{{ education.program_name }}</h1>
                <div class="indent-0 sm:indent-2">
                  <div class="text-lg font-light">
                    <p><span>{{ education.school_name }}</span><span class="hidden sm:inline-block">&nbsp;&ndash;&nbsp;</span><br class="block sm:hidden" /><span>{{ education.location }}</span></p>
                    <p><span>{{ education.start_date }}</span> &ndash; <span>{{ education.end_date || "Ongoing" }}</span></p>
                    <p>Cumulative GPA: {{ education.cum_gpa }}</p>
                  </div>
                  <ul class="list-[upper-roman] list-inside space-y-1 text-sm sm:text-base">
                    <li v-for="(highlight, j) in education.highlights" :key="`education_${i}_highlight_${j}`">
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </main>
        </section>
      </main>
    </ContentDoc>
  </div>
</template>