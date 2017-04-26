import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Resource from 'vue-resource'
import './ui/ui'
import './map/map'

Vue.use(Resource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
