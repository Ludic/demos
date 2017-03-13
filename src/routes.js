import App from './App.vue'

// demo router
import DemoRouter from 'demos/demoRouter'
// demos
import CameraDemo from 'demos/camera-demo'
import InputDemo from 'demos/input-demo'
import GyroDemo from 'demos/gyro-demo'
import Box2dDemo from 'demos/box2d-demo'
import ScreenManager from 'demos/screen-manager'
import GamepadDemo from 'demos/gamepad'
import Box2dDemo from 'demos/box2d'

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
        path: 'box2d-demo',
        name: 'box2d-demo',
        component: Box2dDemo,
        meta: {
          title: "Box2D Demo"
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
        path: 'gyro-demo',
        name: 'gyro-demo',
        component: GyroDemo,
        meta: {
          title: "Gyro Demo"
        },
      },
      {
        path: 'box2d-demo',
        name: 'box2d-demo',
        component: Box2dDemo,
        meta: {
          title: "Box2d Demo"
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
      {
        path: 'gamepad-demo',
        name: 'gamepad-demo',
        component: GamepadDemo,
        meta: {
          title: "Gamepad Demo"
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
