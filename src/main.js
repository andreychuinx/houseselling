// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Notification from 'vue-notification'
import ElementUI from 'element-ui'
import * as VueGoogleMaps from 'vue2-google-maps';

import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API_KEY,
    libraries: 'places',
  }
});

axios.defaults.baseURL = 'http://apibucket.sabikaorganizer.com:3001/api'
// axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
