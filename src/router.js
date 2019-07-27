import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '*',
      redirect: '/'
    },

    {
      path:'/',
      name: 'home',
      component:()=> import ('./views/home')
    },
    {
      path: '/form',
      name: 'form',
      component:()=> import('./views/Form')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:()=> import('./views/dashboard')
    },
    
    {
      path: '/login',
      name: 'login',
      component:()=> import('./views/login')
    },
    {
      path: '/signup',
      name: 'signup',
      component:()=> import('./views/signup')
    },
    {
      path: '/blog/:id',
      name: 'blog-page',
      component:()=> import('./views/blog-page')
    },
  ]
})
