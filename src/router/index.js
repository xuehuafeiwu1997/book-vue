import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import PageThree from "../views/PageThree.vue";
import PageFour from "../views/PageFour.vue";
// import App from "../App.vue"
import Index from "../views/Index.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: '导航一',
    component: Index,
    children:[
      {
        path: '/pageOne',
        name: '页面一',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: '页面二',
        component: PageTwo
      }
    ]
  },
  {
    path:'/navigation',
    name:'导航二',
    component: Index,
    children: [
      {
        path: '/pageThree',
        name: '页面三',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '页面四',
        component: PageFour
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
