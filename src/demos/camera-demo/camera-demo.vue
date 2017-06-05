<template lang="html">
  <div class="">
    <ludic-app :update="update"></ludic-app>
  </div>
</template>

<script>
// import {Screen, Camera, app} from 'ludic'
// import ColorScreen from './colorScreen'
//
// export default class Demo1Screen extends Screen {
//   constructor() {
//     super();
//
//     this.camera = new Camera();
//     this.camera.centerWorldToCamera();
//   }
//
//   update(delta, ctx){
//     ctx.fillStyle = 'white';
//     ctx.clearRect(0, 0, app.canvas.width(), app.canvas.height());
//     ctx.fillRect(0, 0, app.canvas.width(), app.canvas.height());
//
//     this.camera.draw(ctx);
//     this.camera.drawAxes(ctx);
//
//     ctx.fillStyle = 'black'
//     ctx.fillRect(-1,-1,2,2);
//   }
// }

import {LudicApp, Camera, app, ScreenManager} from 'ludic'
// import DemoSelectorScreen from 'demos/DemoSelectorScreen'
//
// export default class LudicDemosApp extends LudicApp {
//   constructor(config){
//     super(config);
//
//     // this.screenListener = app.screenManager.newListener(true);
//     this.demoSelectorScreen = new DemoSelectorScreen();
//     // add the DemoSelectorScreen to the ScreenManager.
//     app.screenManager.addScreen(this.demoSelectorScreen);
//   }
//
//   update(delta, time){
//     // add the screen manager to the update loop. all arguments are applied to
//     //  the active screen's update method, so passing the context (optional)
//     //  ensures each screen will have the drawing context on update.
//     app.screenManager.update(delta, app.context);
//   }
// }

export default {
  data(){
    return {
      screenManager: new ScreenManager(),
    }
  },
  methods: {
    update(delta, time){

    }
  }
}
</script>

<style lang="css">
</style>
