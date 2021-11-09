import Vue from 'vue'
import VueRouter from 'vue-router'
import routesArr from './routes'
import Login from '@/views/Login'
import Registration from '@/views/Registration'
import { beforeAuthPageHook } from '@/router/hooks/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: beforeAuthPageHook,
    meta: {
      layout: 'login-layout'
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    beforeEnter: beforeAuthPageHook,
    meta: {
      layout: 'login-layout'
    }
  },
  ...routesArr
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
