<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      Jacob Andersen
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/resume">
          Resume
        </b-nav-item>
        <b-nav-item href="#">
          Portfolio
        </b-nav-item>
        <b-nav-item href="#">
          Blog
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'SiteNavbar'
}
</script>
