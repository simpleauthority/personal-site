<template>
  <div>
    <header class="text-center mb-4">
      <h1>
        {{ full_name }}
      </h1>
      <h2>
        <ContactInformationLine :email="email" :phone="phone_number" />
      </h2>
    </header>
    <section>
      <b-container>
        <b-row>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Current Goal
              </template>
              <template #content>
                <div v-html="current_goal" />
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
                  :items="relevant_skills"
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
                  :items="other_skills"
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
                <ResumeEntry
                  v-for="(entry, idx) in professional_experience"
                  :key="'job-' + idx"
                  :title="entry.job_title + ', ' + entry.company_name"
                >
                  <template #content>
                    <IndentableParagraph
                      :items="[prettifyDates(entry.start_date, entry.end_date)]"
                    />
                    <IndentableList
                      :out="true"
                      :items="entry.highlights"
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
                <ResumeEntry
                  v-for="(entry, idx) in education"
                  :key="'education-' + idx"
                  :title="entry.program_name"
                >
                  <template #content>
                    <IndentableParagraph
                      :items="[
                        prettifyDates(entry.start_date, entry.end_date),
                        entry.school_name + ' &mdash; ' + entry.location,
                      ]"
                    />
                  </template>
                </ResumeEntry>
              </template>
            </ResumeSection>
          </b-col>
        </b-row>
      </b-container>
    </section>
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
  layout: 'page',
  transition: 'page',
  async asyncData ({ $single }) {
    return await $single('resume').read()
  },
  head () {
    return {
      title: "Jacob Andersen's Resume",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Computer Scientist in progress'
        }
      ]
    }
  },
  methods: {
    prettifyDates (start, end) {
      return (
        this.formatShort(start) +
        ' &ndash; ' +
        (end ? this.formatShort(end) : 'Present')
      )
    }
  }
}
</script>
