import Vue from 'vue'

// import vue plugins
import VueRouter from 'vue-router'
import LudicVue from 'ludic-vue'

import App from './app'
import routes from './routes'

import * as firebase from 'firebase/app'

// import LudicAppContainer from 'components/ludicAppContainer'

// Vue.component('ludic-app', LudicAppContainer)

Vue.use(VueRouter)
Vue.use(LudicVue)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCrLgTHaj860VbZkaZn_DiVnN5fyye6Jyk",
  authDomain: "mouse-move-demo.firebaseapp.com",
  databaseURL: "https://mouse-move-demo.firebaseio.com",
  storageBucket: "mouse-move-demo.appspot.com",
  messagingSenderId: "531318519558"
};
firebase.initializeApp(config);

let router = new VueRouter({
  mode: 'history',
  routes,
})

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
