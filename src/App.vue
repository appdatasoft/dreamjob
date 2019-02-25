<template>
  <div id="app">
  
    <div id="nav" class="gap">
      <navigation></navigation>
        <router-view/> 
        <div class="page-header">
      <h1>Create Your Dream Job <br><small>growth hacking your career</small></h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">What is your dream job?</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Dream Companies:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Dream Title:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">Expected Salary:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Dream Job">
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Top Dream Jobs</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Dream Companies</th>
              <th>Dream Titles</th>
              <th>Dream Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books">
              <td><a v-bind:href="book.url">{{book.title}}</a></td>
              <td>{{book.author}}</td>
               <td>{{book.url}}</td>
              <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  </div>

</template>

<script>
import Vue from 'vue'
import Navigation from '@/components/Navigation'
import { firebase } from './FirebaseAuthPlugin'
import toastr from 'toastr'
import FirebaseAuthPlugin from './FirebaseAuthPlugin'

Vue.use(FirebaseAuthPlugin)
let db1 = firebase.database()
let booksRef = db1.ref('books')
export default {
  name: 'App',
  components: {
    Navigation
  },
   firebase: {
    books: booksRef
  }, 
  data () {
    return {
      newBook: {
          title: '',
          author: '',
          url: ''
      },
    }
  },
   methods: {
     async onSubmit () {
      const auth = await this.$auth.login(this.email, this.password)
    },
      addBook: function () {
        booksRef.push(this.newBook);
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.url = 'http://';
      },
      removeBook: function (book) {
        booksRef.child(book['.key']).remove()
        toastr.success('Book removed successfully')
      }
    },
}
</script>
<style lang="css">
/*<link type="text/css" rel="stylesheet" href="node_modules/firebaseui/dist/firebaseui.css" />
*/@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main{
  margin: 0;
  padding: 0;
}

.fa-icon {
    top: .125em;
    position: relative;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: .2rem;
}
#textsize{
  font-size: 64px;
  font-weight: 600;
}
#textsize2{
  font-size: 28px;
  font-weight: 400;
}
.button {
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 25*4px 25*2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: blue; 
  color: white; 
  
}
.button1:hover {
  background-color: black;
  color: white;
}
#textsize3{
  font-size: 32px;
line-height: 40px;
  font-weight: 600;
  color: #000000
}
.device-container{
  padding-top: 30px;
}
.gap {
    margin-top: 50px;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.gap {
    margin-top: 50px;
  }
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
