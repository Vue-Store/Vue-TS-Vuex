import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/Layout/Index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: false,
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/index',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
]

/* Global Route */
export default new Router({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: routes
})
