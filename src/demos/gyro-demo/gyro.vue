<template lang="html">
  <div id="gyro-demo">
    <img id="ball-image" src="/assets/repeat.jpg" style="display: none">
    <ludic-app :update="update" @app-ready="onReady"></ludic-app>
    <div class="">
      <p>Click the canvas to create a box at that location.</p>
      <p>Use the arrow keys to move it around the screen.</p>
    </div>
  </div>
</template>

<script>
import {app, Camera} from 'ludic'
import {World, DebugDraw, Box2D} from 'ludic-box2d'
import Block from './block'
import Ball from './ball'

export default {
  beforeDestroy(){
    app.input.removeInputListener(this.inputListener)
  },
  methods: {
    onReady(){

      this.camera = new Camera(app.canvas)
      this.world = new World(0,-20.0)
      this.debugDraw = DebugDraw.newDebugger(app.canvas)
      this.world.SetDebugDraw(this.debugDraw)

      // setup world boundaries
      this.platform = new Block(8,-8,7,1,'green',this.world, true, -1, false)

      // this.box = new Block(8, 1,2,2,'blue',this.world)
      this.ball = new Ball(8, 1, 1,'blue',this.world)



      // setup accelerator handler to update world gravity
      window.ondevicemotion = function(e) {
        this.world.SetGravity(new Box2D.b2Vec2(
          -e.accelerationIncludingGravity.x * 3,
          -e.accelerationIncludingGravity.y * 3
        ))
	    }.bind(this)

    },

    update(delta, time){
      let ctx = app.context
      app.canvas.clear()

      this.world.step(delta)
      this.camera.draw(ctx)
      this.camera.drawAxes(ctx)


      // draw ball
      ctx.save()
      this.ball.draw(ctx)
      ctx.restore()


      // draw the platform
      ctx.save()
      this.platform.draw(ctx)
      ctx.restore()

      this.world.drawDebug(true)
    },
  }
}
</script>

<style lang="css">
</style>
