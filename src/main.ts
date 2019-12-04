import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'

import store from './store/index'

import App from './App.vue'
import router from '@/routes'

import '@/plugins/element'
import '@/plugins/axios'
import '@/styles/index.scss'
import '@/permission/index'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
