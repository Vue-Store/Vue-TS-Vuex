import Vue, { PluginObject } from 'vue'
import { Notification } from 'element-ui';
import axios, { AxiosAdapter } from 'axios'

import { globalConfig } from '@/config'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: globalConfig.baseUrl,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  headers: {
    'Content-Type': 'application/json'
  }
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  cfg => {
    // Do something before request is sent
    return cfg
  },
  err => {
    // Do something with request error
    return Promise.reject(err)
  }
)
// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    const res = response.data

    if ((<number>res.code) !== 0) {
      Notification.error({
        title: 'Error!',
        message: <string>res.message,
        duration: 2 * 1000
      })
      return Promise.reject(res)
    }
    return res
  },
  err => {
    // Do something with response error
    return Promise.reject(err)
  }
)

const Plugin: PluginObject<any> = {
  install: Vue => {
    Vue.$axios = _axios
  }
}
Plugin.install = Vue => {
  Vue.$axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
