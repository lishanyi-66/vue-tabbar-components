import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Home from '../views/Home.vue'
// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Category.vue'
// import Cart from '../views/cart/Cart.vue'
// import Profile from '../views/profile/Profile.vue'

Vue.use(VueRouter)

//路由懒加载
const home=()=>import('../views/home/Home.vue')
const category = ()=>import('../views/category/Category.vue')
const cart =()=>import('../views/cart/Cart.vue')
const profile =()=>import('../views/profile/Profile.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    // name: 'Home',
    component: home
  },{
    path:'/category',
    component:category
  },{
    path:'/cart',
    component:cart
  },{
    path:'/profile',
    component:profile
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
