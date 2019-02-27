import Vue from 'vue'
import './plugins/axios'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from '@/routes'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.stylus'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
