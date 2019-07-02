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
                My current goal is to be hired at a progressive startup that
                wants to change the world. Let me know how I can help.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Skills
              </h4>
              <b-card-text>
                Some of my skills are...This page is currently WIP.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card bg-variant="light" header-tag="header">
              <h4 slot="header">
                Professional Experience
              </h4>
              <b-card-text>
                Some of my professional experience is...This page is currently
                WIP.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style lang="scss">
.resume-header {
  margin-top: 15px;
  text-align: center;

  color: #ccc;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
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
  }
}
</style>
