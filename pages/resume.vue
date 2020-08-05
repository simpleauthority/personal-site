<template>
  <div>
    <header class="page-header">
      <h1>
        {{ full_name }}
      </h1>
      <h2>
        <ContactInformationLine
          :email="email"
          :phone="phone_number"
        />
      </h2>
    </header>
    <main>
      <b-container>
        <b-row>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Current Goal
              </template>
              <template #content>
                <p>
                  {{ current_goal }}
                </p>
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12" md="6">
            <ResumeSection>
              <template #header>
                Relevant Skills
              </template>
              <template #content>
                <SimpleListGroup
                  :items="mapObjectsToFields(relevant_skills, 'content')"
                />
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12" md="6">
            <ResumeSection>
              <template #header>
                Other Skills
              </template>
              <template #content>
                <SimpleListGroup
                  :items="mapObjectsToFields(other_skills, 'content')"
                />
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Professional Experience
              </template>
              <template #content>
                <ResumeEntry v-for="(entry, idx) in professional_experience" :key="'job-' + idx" :title="entry.job_title + ', ' + entry.company_name">
                  <template #content>
                    <IndentableParagraph
                      :items="[prettifyDates(entry.start_date, entry.end_date)]"
                    />
                    <IndentableList
                      :out="true"
                      :items="mapObjectsToFields(entry.highlights, 'content')"
                    />
                  </template>
                </ResumeEntry>
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Education
              </template>
              <template #content>
                <ResumeEntry v-for="(entry, idx) in education" :key="'education-' + idx" :title="entry.program_name">
                  <template #content>
                    <IndentableParagraph
                      :items="[
                        prettifyDates(entry.start_date, entry.end_date),
                        entry.school_name + ' &mdash; ' + entry.location
                      ]"
                    />
                  </template>
                </ResumeEntry>
              </template>
            </ResumeSection>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import ContactInformationLine from '../components/resume/ContactInformationLine'
import ResumeSection from '../components/resume/ResumeSection'
import SimpleListGroup from '../components/resume/SimpleListGroup'
import ResumeEntry from '../components/resume/ResumeEntry'
import IndentableParagraph from '../components/resume/IndentableParagraph'
import IndentableList from '../components/resume/IndentableList'
import DateMixin from '~/mixins/date-mixin'

export default {
  components: {
    ContactInformationLine,
    ResumeSection,
    SimpleListGroup,
    ResumeEntry,
    IndentableParagraph,
    IndentableList
  },
  mixins: [DateMixin],
  computed: {
    relevantSkillsMapped() {
      return this.mapObjectsToFields(this.relevant_skills, 'content')
    },
    otherSkillsMapped() {
      return this.mapObjectsToFields(this.other_skills, 'content')
    }
  },
  async asyncData({ app }) {
    return await app.$strapi.$resume.find()
  },
  methods: {
    mapObjectsToFields(arr, field) {
      return arr.map(obj => obj[field])
    },
    prettifyDates(start, end) {
      return this.formatShort(start) + ' &ndash; ' + (end ? this.formatShort(end) : 'Present')
    }
  }
}
</script>
