import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store/index.js'
import VueDraggable from 'vue-draggable'


import './assets/scss/style.scss'

Vue.use(VueDraggable)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
