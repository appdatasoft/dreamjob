<template>
<div class="head_1">
    <header>
    <div>
    <!--<v-hiringmenu/>-->
   <!--<HiringMenu></HiringMenu>-->
    </div>
    
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
            <br>
            <br>
            <br>
             <h1 class="mb-4" id= "textsize5">Learn, teach, get your dream job.</h1>
             </br>
              <h2>Growth hacking your career.</h2>
              </br>
              </br>
              </br>
              </br>
             <div class="row">                
              </div>
              <br>
             <!--<a href="/login" class="ui massive blue inverted black button">CREATE YOUR DREAM JOB</a>-->
              <router-link v-show="!user" :to="{name: 'login'}"  class="ui massive blue inverted green button">CREATE YOUR DREAM JOB</router-link>
    
            <!-- <a href="https://goo.gl/forms/wktdAeVXlYA3RICt2" class="ui massive blue inverted black button">CREATE YOUR DREAM JOB</a>-->
              </div>
          </div>
          <div class="col-lg-4 my-auto">
            <div class="device-container">
                  <div class="screen" id="foot">
                 <img src="../assets/dreamjob3.gif" height="500px" width="400px" class="img-fluid" alt="">
                 </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--<b-container>-->
    </br>
    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
        </br>
          <h1 class="mb-4" id= "textsize4">Your Career, Your Control.</h1>
        <!--  <p class="text-muted">Take control of your career</p>-->
        </br>
        </br>
          <hr>
        </div>
        </br>

        <div class="row">
          <div class="col-lg-6 my-auto">
          <div class="feature-item">
                  <div style="text-align:left">
                   <div class="ui segment">
                    <h3 class="mb-4 text-center" id= "textsize3">Teach</h3>
                     <h3 class="text-center" id= "textsize6">About Your Dream Job</h3>
                     <h3 class="text-center" id= "textsize7"><a href="">Learn More</a></h3>
                    </div>
                  </div>
                  </div>
          </div>
          <div class="col-lg-6 my-auto">
          <div class="feature-item">
                  <div style="text-align:left">
                   <div class="ui segment">
                    <h3 class="mb-4 text-center" id= "textsize3">Learn</h3>
                     <h3 class="text-center" id= "textsize6">About Your Dream Job</h3>
                     <h3 class="text-center" id= "textsize7"><a href="">Learn More</a></h3>
                    
                    </div>
                  </div>
                  </div>
          </div>
         
        </div>
        <br>
        <hr>
        <br>
        <br>
        <div class="section-heading text-center">
        </br>
          <h1 class="mb-4" id= "textsize3">Don't just apply for a job, create your dream job.</h1>
       
        </div>
        
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">   
                    <div class="screen" id="foot">
                <img src="../assets/growth.gif" class="img-fluid" alt="">        
                  </div>   
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                  <div style="text-align:left">
                    <!--<i class="icon-screen-smartphone text-primary"></i>-->
                   <div class="ui segment">
                    <h3 class="text-center">Skill Tests</h3>
                    <h5 class="text-center">Find the skill tests conducted at your dream companies.</h5>
                  <!--<h4><a href="/timeline">Learn More</a></h4>-->
                 <!--<router-link v-show="!user" :to="{name: 'login'}">Learn More</router-link>
                 --> </div>
                  </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                  <div style="text-align:left">
                    <!--<i class="icon-camera text-primary"></i>-->
                    <div class="ui segment">
                    <h3 class="text-center">Culture Fit</h3>
                    <h5 class="text-center">Learn the culture at your dream companies. </h5>
                    <!--<h4><a href="http://www.dreamjobb.com/timeline">Learn More</a></h4>-->
                   <!--<router-link v-show="!user" :to="{name: 'login'}">Learn More</router-link>
                   --> </div>
                  </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Take control of your career. </h2>
          <!--<p class="text-muted"><a href="/timeline">Learn More</a></p>-->
           <router-link v-show="!user" :to="{name: 'login'}">Learn More</router-link>
          <hr>
        </div>
         
      </div>
      <div class="overlay"></div>
    </section>
    <section class="contact bg-primary1" id="contact">
      <div class="container1">
        <h2>We <img src="../assets/heart-icon.png" width="2%" height="2%"></img>
          <i class="fa fa-heart"></i>
          new friends!</h2>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="https://twitter.com/@hackohire">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook">
            <a href="https://www.facebook.com/groups/2004861469565107/">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
 <!--</b-container>-->
</div>
</template>
<link src='../css/detectify.css'/>
<link src='../../css/new-age.min.css'/>
<link src='../../css/cataraman.css'/>
<link src='../../css/lato.css'/>
<link src='../../css/multi.css'/>
<link src='../../device-mockups/device-mockups.min.css'/>
<link src='../../vendor/bootstrap/css/bootstrap.min.css'/>
<link src='../../vendor/font-awesome/css/font-awesome.min.css'/>
<link src='../../vendor/simple-line-icons/css/simple-line-icons.css'/>
<link rel="stylesheet" href="../../vendor/font-awesome/css/font-awesome.min.css">
<style>
.fit-content{
    color: #f9f900;
    font-weight: 600;
    text-decoration: underline;
  }
  
  .bg-primary1{
    background-color: #fbb813;
  }
 .container1{
  padding: 20px;
  text-align: center;
}
.device-container{
  padding-top: 30px;
}
.text-muted1{
  font-size: 12px;
  color:#ccc;
}
section.img {            
  position: relative;
  padding: 270px 0;
  background-image: url("../../img/bg-cta2.gif");
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<script>
export default {
     name: 'Home'
}
</script>