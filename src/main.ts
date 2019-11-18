import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from '@/routes'

import '@/plugins/element'
import '@/plugins/axios'
import '@/styles/index.scss'
import '@/permission/index'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
