<template lang="html">
  <div id="gamepad-demo">
    <ludic-app :update="update" @app-ready="onReady"></ludic-app>
    <div class="">
      <p>Click the canvas to create a box at that location.</p>
      <p>Use the arrow keys to move it around the screen.</p>
    </div>
  </div>
</template>

<script>
import {app, Camera} from 'ludic'
export default {
  beforeDestroy(){
    app.input.removeInputListener(this.inputListener)
  },
  methods: {
    onReady(){
      this.camera = new Camera()

      // set a move speed for our box
      this.moveSpeed = 1

      this.inputListener = app.input.newInputListener({
        binder: this,
        keyConfig: {
          // we use `.down` to tell the input controller to only send the keydown event
          'up.down': this.onUp,
          'down.down': this.onDown,
          'left.down': this.onLeft,
          'right.down': this.onRight,
        },
        methods: {
          mouseUp: this.onMouseUp,
          left: this.onLeft,
          right: this.onRight,
          up: this.onUp,
          down: this.onDown,
          leftStick: this.onLeftStick,
        },
        // passing true here also adds the listener to the controller.
        //  saves a call like `app.input.addInputListener(this.inputListener)`
      }, true)
    },

    update(delta, time){
      app.input.update()
      let ctx = app.context
      app.canvas.clear()

      this.camera.draw(ctx)

      // draw our box
      this.drawBox(ctx)
    },

    // input key handlers
    onUp(){
      if(this.box){
        // the y axis increases from bottom to top
        this.box.y += this.moveSpeed
      }
    },
    onDown(){
      if(this.box){
        this.box.y -= this.moveSpeed
      }
    },
    onLeft(){
      if(this.box){
        // the x axis increases from left to right
        this.box.x -= this.moveSpeed
      }
    },
    onRight(){
      if(this.box){
        this.box.x += this.moveSpeed
      }
    },
    // input mouse handlers
    onMouseUp(canvasCoords, mouseEvent){
      // the first argument is the coordinates of the click in relation to the canvas
      //  we will use our camera to convert the coordinates
      // create our box if it does not already exist
      if(!this.box){
        let {x,y} = this.camera.getWorldPointFromPixelPoint(canvasCoords)
        this.box = {
          x,
          y,
          width: 2,
          height: 2,
          color: 'blue',
        }
      }
    },
    onLeftStick(x,y){
      if(x < -0.5){
        this.onLeft()
      } else if(x > 0.5){
        this.onRight()
      }
      if(y < -0.5){
        this.onUp()
      } else if(y > 0.5){
        this.onDown()
      }
    },

    // drawing methods
    drawBox(ctx){
      if(this.box){
        // we want to save the current context state onto a stack so that we can
        //  make changes to the context, and then restore it back to the way it was before
        ctx.save()
        // set the fill color for our box
        ctx.fillStyle = this.box.color
        // draw the box using its coordinates
        ctx.fillRect(this.box.x, this.box.y, this.box.width, this.box.height)
        // pop the last saved state from the context stack and set as the current context
        ctx.restore()
      }
    },
  }
}
</script>

<style lang="css">
</style>
