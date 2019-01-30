import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    hidden: false,
    component: () => import('@/views/index/index')
  }
]

/* Global Route */
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes
})
