<template lang="html">
  <div id="screen-manager-demo">
    <ludic-app :update="update" @app-ready="onReady"></ludic-app>
    <div class="">
      <p>Hit 'enter' to push a new ColorScreen onto the screen manager stack</p>
      <p>Use 'esc' to pop it off and return to the previous screen</p>
    </div>
  </div>
</template>

<script>
import {ScreenManager, Camera, Ludic} from 'ludic'
import ColorScreen from './colorScreen'
export default {
  beforeDestroy(){
    Ludic.input.removeInputListener(this.inputListener)
  },
  methods: {
    onReady(){
      this.camera =  new Camera()
      this.screenManager = new ScreenManager()

      this.inputListener = Ludic.input.newInputListener({
        binder: this,
        keyConfig: {
          'esc.up': this.onEscUp,
          'enter.up': this.onEnterUp,
        },
      },true)
    },

    update(delta,time){
      let ctx = Ludic.context
      ctx.fillStyle = 'white'
      ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height())
      ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height())

      // this.camera.draw(ctx)
      this.screenManager.update(delta,ctx)
    },

    // key event handlers
    onEscUp(){
      this.screenManager.popScreen()
    },
    onEnterUp(){
      this.screenManager.addScreen(new ColorScreen())
    },
  }
}
</script>

<style lang="css">
</style>
