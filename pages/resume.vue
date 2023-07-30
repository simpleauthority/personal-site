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
  <div>
    <header class="text-center mb-4">
      <h1>My Resume</h1>
    </header>
    <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.full_name }}</h1>
        <h2>{{ doc.phone_number }}</h2>
        <h2>{{ doc.email }}</h2>
        <p>{{ doc.current_goal }}</p>
        <p>Relevant Skills:</p>
        <ul>
            <li v-for="(skill, i) in doc.relevant_skills" :key="`relevant_skill_${i}`">
                {{ skill }}
            </li>
        </ul>
        <p>Other Skills:</p>
        <ul>
        <li v-for="(skill, i) in doc.other_skills" :key="`other_skill_${i}`">
            {{ skill }}
        </li>
        </ul>
        <p>Professional Experience:</p>
        <ul>
            <li v-for="(experience, i) in doc.professional_experience" :key="`experience_${i}`">
                <p>{{ experience.job_title }}</p>
                <p>{{ experience.company_name }}</p>
                <p>{{ experience.start_date }} &ndash; {{ experience.end_date }}</p>
                <p>Highlights:</p>
                <ul>
                    <li v-for="(highlight, j) in experience.highlights" :key="`experience_${i}_highlight_${j}`">
                        <p>{{ highlight }}</p>
                    </li>
                </ul>
            </li>
        </ul>
        <p>Education:</p>
        <ul>
            <li v-for="(education, i) in doc.education" :key="`education_${i}`">
                <p>{{ education.school_name }}</p>
                <p>{{ education.program_name }}</p>
                <p>{{ education.location }}</p>
                <p>{{ education.start_date }} &ndash; {{ education.end_date }}</p>
                <p>{{ education.cum_gpa }}</p>
                <p>Highlights:</p>
                <ul>
                    <li v-for="(highlight, j) in education.highlights" :key="`education_${i}_highlight_${j}`">
                        <p>{{ highlight }}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </ContentDoc>
  </div>
</template>