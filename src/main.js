// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
//import firebase from 'firebase'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css'
//import FirebaseAuthPlugin from './FirebaseAuthPlugin'
Vue.use(VueFire)
//Vue.use(FirebaseAuthPlugin)
sync(store, router)


Vue.config.productionTip = false;
let app = '';
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
