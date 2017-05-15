import Home from './home'

// demo router
import DemoRouter from 'demos/demoRouter'
// demos
import CameraDemo from 'demos/camera-demo'
import InputDemo from 'demos/input-demo'

import ScreenManager from 'demos/screen-manager'
import GamepadDemo from 'demos/gamepad'
import Box2dDemo from 'demos/box2d'
import FirebaseDemo from 'demos/firebase-demo'
import GyroDemo from 'demos/gyro-demo/gyro'

// games
// import GamesRouter from 'games/gamesRouter'
// import AsteroidsGame from 'games/asteroids'

export default [
  {
    path: '/',
    name: 'index',
    component: Home,
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
      {
        path: 'firebase-demo',
        name: 'firebase-demo',
        component: FirebaseDemo,
        meta: {
          title: "Firebase Demo"
        },
      },
    ]
  },
  // {
  //   path: '/games',
  //   name: 'games',
  //   component: GamesRouter,
  //   children: [
  //     {
  //       path: 'asteroids',
  //       name: 'game-asteroids',
  //       component: AsteroidsGame,
  //       meta: {
  //         title: 'Asteroids'
  //       }
  //     }
  //   ]
  // },

  // put the catch all redirect at the end
  {
    path: '*',
    redirect: '/',
  },
]
