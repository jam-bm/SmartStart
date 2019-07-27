<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import home from './views/home'
import Form from './views/Form'
import dashboard from './views/dashboard'
import blogPage from './views/blog-page'
import login from './views/login'
import signup from './views/signup'
export default {
  data:() =>({
    
  }),
beforeMount(){
  this.$store.dispatch('initProfile')
},
  components:{
    home,
    Form,
    dashboard,
    blogPage,
    login,
    signup
  },
  
  
}
</script>
<style>

</style>
