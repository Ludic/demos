import App from './App.vue'

// demo router
import DemoRouter from 'demos/demoRouter'
// demos
import CameraDemo from 'demos/camera-demo'
import InputDemo from 'demos/input-demo'
import ScreenManager from 'demos/screen-manager'

export default [
  {
    path: '/',
    name: 'index',
    component: App,
  },
  {
    path: '/demos',
    name: 'demos',
    component: DemoRouter,
    children: [
      {
        path: 'input-demo',
        name: 'input-demo',
        component: InputDemo,
        meta: {
          title: "Input Demo"
        },
      },
      {
        path: 'camera-demo',
        name: 'camera-demo',
        component: CameraDemo,
        meta: {
          title: "Camera Demo"
        },
      },
      {
        path: 'screen-manager',
        name: 'screen-manager',
        component: ScreenManager,
        meta: {
          title: "Screen Manager"
        },
      },
    ]
  },

  // put the catch all redirect at the end
  {
    path: '*',
    redirect: '/',
  },
]
