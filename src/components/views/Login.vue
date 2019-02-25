<template>
<div class="login">
<h3> Sign In</h3>
<form @submit.prevent="onSubmit" >
<input type="text" v-model="email" placeholder="Email"><br>
<input type="password" v-model="password" placeholder="Password"><br>
<!-- <button @click="login">Connection</button>-->
<input type="submit" value="Login"/>
<p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
 </form>
</div>
</template>

<script>
import firebase from 'firebase'
import {mapGetters} from 'vuex'
export default {
    name: 'login',
    computed: {
    ...mapGetters(['user']),
    nextRoute () {
      return this.$route.query.redirect || '/timeline'
    }
  },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    watch: {
    user (auth) {
      if(!!auth){
        this.$router.replace(this.nextRoute)
      }
    }
  },
    methods: {
        async onSubmit () {
      const auth = await this.$auth.login(this.email, this.password)
    }
    }
}
</script>

<style scoped>
.login {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>
