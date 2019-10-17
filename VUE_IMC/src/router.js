import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', name: 'index', component:()=> import('./views/Home.vue') },
    { path:'/home', name: 'home', component:()=> import('./views/Home.vue') },
    { path:'/sobre', name: 'contatos', component:()=> import('./views/Sobre.vue') },
  ]
})
