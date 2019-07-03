<template>
  <div>
    <header class="resume-header">
      <h1>
        Jacob Andersen
      </h1>
      <h2>
        <a href="mailto:jacob@algorithmjunkie.com">
          jacob[at]algorithmjunkie[dot]com
        </a>
        &mdash; 805-345-6098
      </h2>
    </header>
    <section class="resume-body">
      <b-container>
        <b-row>
          <b-col cols="12">
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Current Goal
              </h4>
              <b-card-text>
                <p>
                  Seeking a challenging position in the development field where
                  I am able to apply innovative technologies to create or
                  improve provided services.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="6">
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Relevant Skills
              </h4>
              <b-card-text>
                <b-list-group>
                  <b-list-group-item>
                    JavaScript, jQuery, Cash, and Zepto
                  </b-list-group-item>
                  <b-list-group-item>React, Vue, and Angular</b-list-group-item>
                  <b-list-group-item>Redux and Vuex</b-list-group-item>
                  <b-list-group-item>CSS, SASS, and LESS</b-list-group-item>
                  <b-list-group-item>
                    NPM, Yarn, Bower, and Webpack
                  </b-list-group-item>
                  <b-list-group-item>
                    Git, Subversion, Mercurial
                  </b-list-group-item>
                  <b-list-group-item>
                    Agile, Scrum, and Kanban
                  </b-list-group-item>
                  <b-list-group-item>
                    XML, HTML, HAML, and SLIM
                  </b-list-group-item>
                  <b-list-group-item>
                    IntelliJ IDE and Visual Studio Code
                  </b-list-group-item>
                  <b-list-group-item>
                    Polling, SSE, and Websockets
                  </b-list-group-item>
                </b-list-group>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" md="6">
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Other Skills
              </h4>
              <b-card-text>
                <b-list-group>
                  <b-list-group-item>
                    Java, .NET Core, C#, PHP, Python
                  </b-list-group-item>
                  <b-list-group-item>Batch, Bash, and ZSH</b-list-group-item>
                  <b-list-group-item>
                    Maven and Gradle Build Systems
                  </b-list-group-item>
                  <b-list-group-item>
                    Continuous Integration &amp; Deployment
                  </b-list-group-item>
                  <b-list-group-item>
                    Automated Unit Testing (TDD)
                  </b-list-group-item>
                  <b-list-group-item>
                    Code Hotswapping / Hot-Reloading
                  </b-list-group-item>
                  <b-list-group-item>
                    REST, JWT, Oauth2, Sessions
                  </b-list-group-item>
                  <b-list-group-item>
                    MySQL, MongoDB, and SQL Server
                  </b-list-group-item>
                  <b-list-group-item>
                    Apache, Nginx, and IIS
                  </b-list-group-item>
                  <b-list-group-item>
                    Windows and Linux Administration
                  </b-list-group-item>
                </b-list-group>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Education
              </h4>
              <b-card-text>
                <section class="resume-entry">
                  <h5>
                    High School Diploma
                  </h5>
                  <p class="indented">
                    June 2016
                  </p>
                  <p class="indented">
                    Ernest Righetti High School &mdash; Orcutt, California
                  </p>
                </section>
                <section class="resume-entry">
                  <h5>
                    Associate of Arts: Computer Science
                  </h5>
                  <p class="indented">
                    August 2017 &ndash; Present
                  </p>
                  <p class="indented">
                    Allan Hancock College &mdash; Santa Maria, California
                  </p>
                </section>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Employment
              </h4>
              <b-card-text>
                <section class="resume-entry">
                  <h5>
                    Rabobank N.A., Application Manager
                  </h5>
                  <p class="indented">
                    October 2017 &ndash; February 2019
                  </p>
                  <ul class="outdented">
                    <li>
                      Made use of the .NET OnBase API to create custom solutions
                      to major business-line pain points including document
                      routing and custom processing.
                    </li>
                    <li>
                      Provided support and bug-fixes of custom .NET applications
                      within OnBase spanning different departments such as loan
                      operations and corporate security.
                    </li>
                    <li>
                      Established new OnBase virtualized architecture to reduce
                      manual workload required to fail over in emergency
                      situations.
                    </li>
                  </ul>
                </section>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Jacob Andersen's Resume",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Read Jacob Andersen's resume and hire him!"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.resume-header {
  margin-top: 15px;
  text-align: center;

  color: #ccc;

  h1 {
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 992px) {
      font-size: 3rem;
    }

    @media (min-width: 1200px) {
      font-size: 4.2rem;
    }
  }

  h2 {
    font-size: 0.8rem;

    @media (min-width: 576px) {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      font-size: 1.7rem;
    }

    @media (min-width: 992px) {
      font-size: 2.3rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.9rem;
    }
  }

  a {
    color: #ccc;

    &:hover {
      text-decoration: none;
      color: #aaa;
    }
  }
}

.resume-body {
  margin-top: 30px;

  .card {
    margin-bottom: 10px;

    .resume-entry {
      margin-bottom: 15px;

      @media (min-width: 768px) {
        margin-bottom: 25px;
      }

      h5 {
        font-size: 1rem;

        @media (min-width: 576px) {
          font-size: 1.35rem;
        }
      }

      p {
        margin: 2px 0;
        font-size: 0.75rem;

        @media (min-width: 576px) {
          font-size: 1.15rem;
        }
      }

      ul {
        margin-top: 15px;
        list-style-type: lower-roman;

        li {
          margin: 4px 0;
          font-size: 0.75rem;

          @media (min-width: 576px) {
            font-size: 1.15rem;
          }

          @media (min-width: 992px) {
            margin: 8px 0;
          }
        }
      }

      .indented {
        margin-left: 15px;

        @media (min-width: 576px) {
          margin-left: 20px;
        }
      }

      .outdented {
        margin-left: -10px;
      }
    }
  }
}
</style>
