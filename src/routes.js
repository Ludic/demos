import Home from './home'

import * as demos from 'demos'

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
    component: demos.DemoRouter,
    children: [
      {
        path: 'simple-init-demo',
        name: 'simple-init-demo',
        component: demos.SimpleInitDemo,
        meta: {
          title: "Simple Initialization Demo"
        },
      },
      {
        path: 'input-demo',
        name: 'input-demo',
        component: demos.InputDemo,
        meta: {
          title: "Input Demo"
        },
      },
      {
        path: 'ein-demo',
        name: 'ein-demo',
        component: demos.EinDemo,
        meta: {
          title: "Ein Demo"
        },
      },
      // {
      //   path: 'camera-demo',
      //   name: 'camera-demo',
      //   component: demos.CameraDemo,
      //   meta: {
      //     title: "Camera Demo"
      //   },
      // },
      {
        path: 'gyro-demo',
        name: 'gyro-demo',
        component: demos.GyroDemo,
        meta: {
          title: "Gyro Demo"
        },
      },
      {
        path: 'box2d-demo',
        name: 'box2d-demo',
        component: demos.Box2dDemo,
        meta: {
          title: "Box2d Demo"
        },
      },

      {
        path: 'screen-manager',
        name: 'screen-manager',
        component: demos.ScreenManager,
        meta: {
          title: "Screen Manager"
        },
      },
      {
        path: 'gamepad-demo',
        name: 'gamepad-demo',
        component: demos.GamepadDemo,
        meta: {
          title: "Gamepad Demo"
        },
      },
      {
        path: 'firebase-demo',
        name: 'firebase-demo',
        component: demos.FirebaseDemo,
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
