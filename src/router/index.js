import Vue from "vue"
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Classification = () => import('views/classification/Classification')
const User = () => import('views/user/User')

Vue.use(VueRouter)

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/user',
      component: User
    }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
