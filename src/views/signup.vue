<template>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-50 p-b-90">
          <form @submit.prevent="signUp" class="login100-form validate-form flex-sb flex-w">
            <span class="login100-form-title p-b-51">
              Sign up
            </span>

            
            <div class="wrap-input100 validate-input m-b-16" data-validate = "Full name is required">
              <input class="input100" type="text" name="fullname" placeholder="First name & Last name" v-model="fullname">
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
              <input class="input100" type="text" name="username" placeholder="Username" v-model="form.username">
              <span class="focus-input100"></span>
            </div>
            
            
            <div class="wrap-input100 validate-input m-b-16" data-validate = "Email is required">
              <input class="input100" type="email" name="email" placeholder="Email" v-model="form.email">
              <span class="focus-input100"></span>
            </div>
            
            <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
              <input class="input100" type="password" name="pass" placeholder="Password" v-model="form.password">
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
              <input class="input100" type="password" name="cpass" placeholder="Confirm Password" v-model="passwordConfirm" @change="checkPassword">
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">
                Sign up
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  computed:{
    fullname:{
      get(){
        return this.form.first_name + this.form.last_name
      },
      set(value){
        if(value.indexOf(' ') !== -1) {
          let s = value.split(' ')
          this.form.first_name = s[0] + ' '
          this.form.last_name = s[1]
        } else {
          this.form.first_name = value
        }
        
        
      }
    }
  },

     data:()=>({
        form:{
            username: '',
            first_name: '',
            last_name:'',
            email: '',
            password:''    

        },
           passwordConfirm:'' 

        // { "username":"startuper", "password":"123", "first_name": "izzat", "last_name":"izzatov", "email":"asd@mail.ru" }
        
    }),
    
    methods:{
      checkPassword(){
        if(this.form.password !== this.passwordConfirm){
          alert('Password not matched!')
          this.passwordConfirm = ''
          return false
        }

        return true
      },

     async signUp(){
       if(!this.checkPassword()) return

        try{
          let res = await this.$store.dispatch('post', {url:'/user/register/', data: this.form})
          alert(res)
          this.$router.push({name: 'login'})
        }
        catch(arr){
          alert(arr)
        }
     }
      
    }
    
}
</script>
    
<style>
* {
	margin: 0px; 
	padding: 0px; 
	box-sizing: border-box;
}
body, html {
	height: 100%;
	font-family: Ubuntu-Regular, sans-serif;
}
/*---------------------------------------------*/
a {
	font-family: Ubuntu-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}
a:focus {
	outline: none !important;
}
a:hover {
	text-decoration: none;
  color: #403866;
}
/*---------------------------------------------*/
h1,h2,h3,h4,h5,h6 {
	margin: 0px;
}
p {
	font-family: Ubuntu-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
}
ul, li {
	margin: 0px;
	list-style-type: none;
}
/*---------------------------------------------*/
input {
	outline: none;
	border: none;
}
textarea {
  outline: none;
  border: none;
}
textarea:focus, input:focus {
  border-color: transparent !important;
}
label {
  display: block;
  margin: 0;
}
/*---------------------------------------------*/
button {
	outline: none !important;
	border: none;
	background: transparent;
}
button:hover {
	cursor: pointer;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-login100 {
  width: 100%;  
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;;
}
.wrap-login100 {
  width: 390px;
  background: #fff;
  border-radius: 10px;
  position: relative;
}
/*==================================================================
[ Form ]*/
.login100-form {
  width: 100%;
}
.login100-form-title {
  font-family: Ubuntu-Bold;
  font-size: 30px;
  color: #403866;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  display: block;
}
/*------------------------------------------------------------------
[ Input ]*/
.wrap-input100 {
  width: 100%;
  position: relative;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: 20px 0 20px 0;
}
/*---------------------------------------------*/
.input100 {
  font-family: Ubuntu-Bold;
  color: #403866;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  width: 100%;
  background: transparent;
  height: 62px;
  padding: 0 20px 0 38px;
}
/*------------------------------------------------------------------
[ Focus Input ]*/
.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid #827ffe;
  border-radius: 3px;
  visibility: hidden;
  opacity: 0;
}
.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;
}
.container-login100-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.login100-form-btn {
  font-family: Ubuntu-Bold;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 62px;
  background-color: #8583e9;
  border-radius: 3px;
}
.login100-form-btn:hover {
  background-color: #403866;
}
/*------------------------------------------------------------------
[ Alert validate ]*/
.validate-input {
  position: relative;
}
</style>