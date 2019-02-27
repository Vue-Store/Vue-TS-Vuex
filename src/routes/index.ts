import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    hidden: false,
    component: () => import('@/views/Home.vue')
  }
]

/* Global Route */
export default new Router({
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: routes
})
