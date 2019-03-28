<template>
  <section>
    <h3></h3>
    <div class="ui stackable grid vertically padded container">
        <div class="eight wide column">
            <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
    <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Select your dream companies</div>
        </md-card-header>
           <div class="panel-body">
         <form id="form" class="form-inline md-content" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Dream Company:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <!--<div class="form-group">
            <label for="bookAuthor">Dream Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookUrl">Expected Salary:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>-->
          <input type="submit" class="btn btn-primary" value="Add">
        </form>
      </div>
        
                <tr v-for="book in books">
                <md-layout-item class="md-content">{{book.author}}</md-layout-item>
               <md-layout-item class="md-content" v-bind:id="book.author"><md-button class="btn btn-info">SELECT</md-button></md-layout-item>
                
                </tr>
                
              
        <!--</div>-->
        </md-card-content>    
</md-card>
</form>
</div>
 
        </div>
        <div class="four wide column"></div>
    </div>
     
  </section>
  
</template>
<script>
import {mapState} from 'vuex'
import { validationMixin } from 'vuelidate'
import UserSidebar from '@/components/views/UserSidebar'
import Tweets from '@/components/views/Tweets'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
import { firebase } from './../../FirebaseAuthPlugin'
let db1 = firebase.database()
let booksRef = db1.ref('books')
export default {
  computed: {
    ...mapState(['user']),
    displayName () {
      return !!this.user ? this.user.email : ''
    }
  },
  name: 'Timeline',
  components: {
            UserSidebar,
            Tweets
        },
    firebase: {
      books: booksRef
    },
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
      newBook: {
          title: '',
          author: '',
          url: ''
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
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
    }  
}
</script>
<style lang="scss" scoped>
.md-content {
    width: 500px;
    height: 60px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    
  }
  .md-content1 {
    width: 40px;
    height: 40px;
    display: inline-flex;
    //justify-content: center;
    align-items: right;
    font-size: 15px;
  }
  .button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

  
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  small {
    display: block;
  }
</style>

