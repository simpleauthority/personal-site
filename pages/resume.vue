<template>
  <div>
    <header class="page-header">
      <h1>
        Jacob Andersen
      </h1>
      <h2>
        <ContactInformationLine
          email="jacob@algorithmjunkie.com"
          phone="805-345-6098"
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
                  Seeking a challenging position in the development field where
                  I am able to apply innovative technologies to create or
                  improve provided services.
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
                  :items="[
                    'Javascript, jQuery, Cash, & Zepto',
                    'React, Vue, & Angular',
                    'Redux & Vuex',
                    'CSS, SASS, & LESS',
                    'NPM, Yarn, Bower, & Webpack',
                    'Git, Subversion, & Mercurial',
                    'Agile, Scrum, & Kanban',
                    'XML, HTML, HAML, & SLIM',
                    'IntelliJ IDE & Visual Studio Code',
                    'Polling, SSE, & Websockets'
                  ]"
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
                  :items="[
                    'Java, .NET Core, C#, PHP, & Python',
                    'Batch, Bash, & ZSH',
                    'Maven & Gradle Build Systems',
                    'Continuous Integration',
                    'Automated Unit Testing (TDD)',
                    'Code Hotswapping & Hot-Reloading',
                    'REST, JWT, Oauth2, & Sessions',
                    'MySQL, MongoDB, & SQL Server',
                    'Apache, Nginx, & IIS',
                    'Windows & Linux Administration'
                  ]"
                />
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Education
              </template>
              <template #content>
                <ResumeEntry title="Associate of Arts: Computer Science">
                  <template #content>
                    <IndentableParagraph
                      :items="[
                        'August 2017 &ndash; Present',
                        'Allan Hancock College &mdash; Santa Maria, California'
                      ]"
                    />
                  </template>
                </ResumeEntry>
                <ResumeEntry title="High School Diploma">
                  <template #content>
                    <IndentableParagraph
                      :items="[
                        'June 2016',
                        'Ernest Righetti High School &mdash; Orcutt, California'
                      ]"
                    />
                  </template>
                </ResumeEntry>
              </template>
            </ResumeSection>
          </b-col>
          <b-col cols="12">
            <ResumeSection>
              <template #header>
                Professional Experience
              </template>
              <template #content>
                <ResumeEntry title="Rabobank N.A., Assistant Vice President">
                  <template #content>
                    <IndentableParagraph
                      :items="['October 2017 &ndash; February 2019']"
                    />
                    <IndentableList
                      :out="true"
                      :items="[
                        'Made use of the .NET OnBase API to create custom solutions to major business-line pain points including document routing and custom processing.',
                        'Provided support and bug-fixes of custom .NET applications within OnBase spanning different departments such as loan operations and corporate security.',
                        'Established new OnBase virtualized architecture to reduce manual workload required to fail over in emergency situations.'
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

export default {
  components: {
    ContactInformationLine,
    ResumeSection,
    SimpleListGroup,
    ResumeEntry,
    IndentableParagraph,
    IndentableList
  },

  head() {
    return {
      title: "Jacob Andersen's Resume",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Read Jacob Andersen's resume and hire him (please)!"
        }
      ]
    }
  }
}
</script>
