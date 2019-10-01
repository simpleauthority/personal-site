<template>
  <div>
    <header class="page-header">
      <h1>Cool Things I've Made</h1>
      <h2>
        "W000000T!"
      </h2>
    </header>
    <main>
      <b-container>
        <b-row>
          <PortfolioEntry
            title="Weather"
            :image="weather"
            href="https://apps.jacob.engineer/weather"
          >
            Weather is a simple geographic weather app that allows you to view
            your local weather or the weather anywhere in the world both via
            location prompting and a search utility. Along with the weather
            information, it shows a bit of location data and also grabs a local
            image from Wikipedia for your viewing pleasure. Units are available
            in US or SI format.
          </PortfolioEntry>
          <PortfolioEntry
            title="Cycles"
            :image="cycles"
            href="https://apps.jacob.engineer/cycles/"
          >
            Cycles is a simple application that offers optimal sleep times. It
            offers two options, "now" or "set time". The "now" mode uses your
            local time and recommends times that you should optimally wake up.
            On the other hand, the "set time" mode allows you to enter when you
            would like to wake up and calculates the most opportune time for you
            to go to sleep.
          </PortfolioEntry>
          <PortfolioEntry
            title="My GitHub Profile"
            :image="github"
            href="https://github.com/simpleauthority"
          >
            GitHub is a social code-sharing website where many developers
            congregrate to both host their code and collaborate on many
            projects. Below is my GitHub profile where you can find my
            bleeding-edge projects and also see everywhere that I participate in
            the Open Source Software (OSS) development community. The main topic
            I contribute to on GitHub is Minecraft.
          </PortfolioEntry>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PortfolioEntry from '../components/portfolio/PortfolioEntry'
import weatherImage from '../assets/weather.png'
import cyclesImage from '../assets/cycles.png'
import githubImage from '../assets/github.png'

export default {
  components: { PortfolioEntry },
  head() {
    return {
      title: "Jacob Andersen's Portfolio",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Check out the (super cool) things Jacob has made.'
        }
      ]
    }
  },
  computed: {
    weather() {
      return weatherImage
    },
    cycles() {
      return cyclesImage
    },
    github() {
      return githubImage
    }
  }
}
</script>
