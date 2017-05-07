import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Resource from 'vue-resource'
import './ui/ui'
import './map/map'
import Qs from 'qs'
import axios from './axios/http.js'
import './public/animate.min.css'
Vue.use(Resource)

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.$axios = axios

// 将Qs挂载到prototype上，在组件中可以直接使用this.Qs访问
Vue.prototype.$Qs = Qs

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
