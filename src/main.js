// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import { sync } from 'vuex-router-sync'
//import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import 'mdbvue/build/css/mdb.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App'
import router from './router'
//import firebase from 'firebase'
import store from './store'
import 'bootstrap'; 

//import FirebaseAuthPlugin from './FirebaseAuthPlugin'
Vue.use(VueFire)
Vue.use(Vuetify)
//Vue.use(FirebaseAuthPlugin)
sync(store, router)

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
let app = '';
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
