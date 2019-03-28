<template>
  <nav class="navbar navbar-expand-sm bg-success1 navbar-dark justify-content-center">
  <b-navbar-brand to="/"><img src="" srcset="../assets/dreamjob-logo.png 1x" width= "100%" alt="hackohire for happy teams"></b-navbar-brand>
    
  <ul class="navbar-nav">
   <li class="nav-item">
    <router-link :to="{name: 'home'}"  class="nav-link">Home</router-link>
    </li>
    <!--<li class="nav-item">
    <router-link :to="{name: 'timeline'}"  class="nav-link">Timeline</router-link>
    </li>-->
    <li class="nav-item">
    <router-link v-show="!user" :to="{name: 'login'}"  class="nav-link">Sign in</router-link>
    </li>
    <li class="nav-item">
    <router-link v-show="!!user" :to="{name: 'signout'}"  class="nav-link">Logout</router-link> 
    </li>
        
       <!-- <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">All Item</router-link>
        </li>-->
      </ul>
  </nav>
 
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
<style>
.bg-success1
{
  background-color: #ffffff !important;
}
</style>