import Vue from 'vue'

// import vue plugins
import VueRouter from 'vue-router'
import LudicVue from 'ludic-vue'

import routes from './routes'

// import LudicAppContainer from 'components/ludicAppContainer'

// Vue.component('ludic-app', LudicAppContainer)

Vue.use(VueRouter)
Vue.use(LudicVue)

let router = new VueRouter({
  mode: 'history',
  routes,
})

const app = new Vue({
  el: '#app',
  router
})
