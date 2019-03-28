//import firebase from 'firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import Router from 'vue-router'
import Home from '@/components/Home'
import Manager from '@/components/Manager'
import Login from '@/components/views/Login'
import SignUp from '@/components/views/SignUp'
import Timeline from '@/components/views/Timeline'
import Google from '@/components/views/Google'
import SignOut from '@/components/views/SignOut'
import store from '../store'
import NProgress from 'nprogress';

import AddProfile from '../components/views/profile/AddProfile'
import EditProfile from '../components/views/profile/EditProfile'
import ListProfile from '../components/views/profile/ListProfile'
import '../../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/google',
      name: 'google',
      component: Google
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOut
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
  {
        name: 'Add',
        path: '/add',
        component: AddProfile,
        meta: {
          authRequired: true
        }
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditProfile,
      meta: {
        authRequired: true
      }
  },
  {
      name: 'List',
      path: '/index',
      component: ListProfile
  },
  ]
});

router.beforeEach((to, from, next) => {
if(to.matched.some(record => record.meta.authRequired)) {
  if(!store.state.user) {
    next({
      path:'/login',
      query: { redirect: to.fullPath}
    })
  }else {
    next()
  }
}else {
  next()
}
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;