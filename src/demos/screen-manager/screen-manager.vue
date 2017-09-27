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
import {ScreenManager, Screen, Camera} from 'ludic'
import ColorScreen from './colorScreen'
export default {
  beforeDestroy(){
    this.app.$input.removeInputListener(this.inputListener)
  },
  methods: {
    onReady(app){
      this.app = app
      this.camera =  new Camera(this.app.$canvas)
      this.screenManager = new ScreenManager(this.app)

      this.inputListener = this.app.$input.newInputListener({
        binder: this,
        keyConfig: {
          'esc.up': this.onEscUp,
          'enter.up': this.onEnterUp,
        },
      },true)
    },

    update(delta,time){
      let ctx = this.app.$context
      ctx.fillStyle = 'white'
      ctx.clearRect(0, 0, this.app.$canvas.width(), this.app.$canvas.height())
      ctx.fillRect(0, 0, this.app.$canvas.width(), this.app.$canvas.height())

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
