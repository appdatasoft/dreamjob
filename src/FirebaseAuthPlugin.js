import store from './store'
import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB_JqocqTtYSyvo2kej0_K5cOsuB4_p1mA",
  authDomain: "hackohire.firebaseapp.com",
  databaseURL: "https://hackohire.firebaseio.com",
  projectId: "hackohire",
  storageBucket: "hackohire.appspot.com",
  messagingSenderId: "874634580789"
}
export const firebase = Firebase.initializeApp(config)

export const db = firebase.database()


export default {
  install: (Vue, options) => {
    const firebase1 = firebase
    const auth = firebase1.auth()
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      store.commit('updateUser',{ user })
    })
  }
}
