// import {default as Ludic, Camera} from 'ludic'
// import LudicDemosApp from 'src/app'

//Config Ludic?
// Ludic.devmode = true;

// var config = {
//   canvas: {
//     fullscreen: true
//   },
//   camera: {
//     fps: false,
//     extras: {
//       axes: true,
//       grid: false
//     },
//     ptm: 25
//   },
//   world: {
//     gravity: {
//       x: 0,
//       y: -10
//     },
//     drawDebug: true
//   },
//   input: {
//     logAllKeys:false,
//     logUnmappedKeys:true,
//   }
// };




// var LudicDemos = new LudicDemosApp({
//   canvas: {
//     fullscreen: true,
//   },
// });
// LudicDemos.run();

///////////////////////////////////////////////////////////////////////

import Vue from 'vue'
import routes from './routes'

import VueRouter from 'vue-router'

import LudicAppContainer from 'components/ludicAppContainer'

Vue.component('ludic-app', LudicAppContainer)

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes,
})

const app = new Vue({
  el: '#app',
  router
})
