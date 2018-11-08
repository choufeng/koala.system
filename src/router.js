import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import UserLayout from './layouts/UserLayout.vue'
import BasicLayout from './layouts/BasicLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/system',
      name: 'system',
      component: UserLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('./pages/Login')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: BasicLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('./pages/Dashboard')
        }
      ]
    }
  ]
})
