import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from "../views/BookManage.vue";
import AddBook from "../views/AddBook.vue";
import Index from "../views/Index.vue"
import BookUpdate from '../views/BookUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图书管理',
    show: true,
    component: Index,
    redirect: "/bookManage",
    children:[
      {
        path: '/bookManage',
        name: '查询图书',
        component: BookManage
      },
      {
        path: '/addBook',
        name: '添加图书',
        component: AddBook
      },
    ]
  },
  {
    path: '/update',
    component: BookUpdate,
    show: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
