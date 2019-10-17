import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path:'/', name: 'index', component:()=> import('./views/Home.vue') },
    { path:'/home', name: 'home', component:()=> import('./views/Home.vue') },
    { path:'/contatos', name: 'contatos', component:()=> import('./views/Contatos.vue') },
    { path:'/about', name:'about', component:()=> import('./views/About.vue') }
  ]
})
