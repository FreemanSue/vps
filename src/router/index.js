import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
// import store from '@/store'


Vue.use(VueRouter)

const router = new VueRouter(routes)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]



export default router
