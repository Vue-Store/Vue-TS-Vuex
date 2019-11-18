import Vue from 'vue'
import './plugins/axios'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from '@/routes'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
// import './styles/reset.styl'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
