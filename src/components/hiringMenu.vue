<template>
  <b-navbar 
    toggleable="md" 
    type="dark" class="navbar-inner">
    <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-brand to="/"><img src="" srcset="../assets/hohlogo.png 1x" width= "20%" alt="hackohire for happy teams"></b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item class="nav-btn" to="https://twitter.com/hackohire">Tech Hiring </b-nav-item>
      <b-nav-item class="nav-btn" href="/techTank">Tech Tank</b-nav-item>
      <b-nav-item class="nav-btn" href="/interviewHackathon">Interview Hackathon</b-nav-item>
    </b-navbar-nav>
    </b-navbar> 
  </template>
<script>
export default {
    name: 'HiringMenu'   
}
</script>

<style scoped>
.navbar {
    background-color: #563d7c;
}
.navbar-nav .nav-link {
    color: #cbbde2;
}
.nav-username {
  padding-left: .5em;
  padding-right: .5em;
}
/*.navbar-inner{
   background-color:transparent;
}*/
</style>