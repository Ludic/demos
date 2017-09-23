<template lang="html">
  <div id="box2d-demo">
    <ludic-app :update="update" @app-ready="onReady" use-ludic-ui></ludic-app>
    <div class="">
      <p>Click the canvas to create a box at that location.</p>
      <p>Use the arrow keys to move it around the screen.</p>
    </div>
  </div>
</template>

<script>
import {app as $app, Camera} from 'ludic'
import {World, DebugDraw} from 'ludic-box2d'
import {UIText} from 'ludic-vue' // TODO: make this ludic-ui
import Block from './block'

export default {
  beforeDestroy(){
    $app.input.removeInputListener(this.inputListener)
  },
  methods: {
    onReady(){
      this.camera = new Camera($app.canvas)
      this.world = new World(0,-9.8)
      this.debugDraw = DebugDraw.newDebugger($app.canvas)
      this.world.SetDebugDraw(this.debugDraw)

      this.boxColor = 'blue'

      // setup world boundaries
      this.platform = new Block(8,-8,7,1,'green',this.world, true, -1, false)
      this.boxes = []

      // set a move speed for our box
      this.moveSpeed = 1

      this.inputListener = $app.input.newInputListener({
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
          mouseMove: this.onMouseMove,
          mouseEnter: this.onMouseEnter,
          mouseLeave: this.onMouseLeave,
        },
        // passing true here also adds the listener to the controller.
        //  saves a call like `$app.input.addInputListener(this.inputListener)`
      }, true)

      this.text = new UIText('Click here to drop a box')
      // $app.$ui.named.text = this.text
      // $app.$ui.set('text', this.text)
      // $app.$ui.children.push(this.text)
      // console.log($app.$ui.$vm)
    },

    update(delta, time){
      let ctx = $app.context
      $app.canvas.clear()

      this.world.step(delta)
      this.camera.draw(ctx)
      this.camera.drawAxes(ctx)


      // draw our box

      this.boxes.forEach((box)=>{
        ctx.save()
        box.draw(ctx)
        ctx.restore()
      })
      ctx.save()
      this.platform.draw(ctx)
      ctx.restore()

      this.world.drawDebug(true)
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
      let {x,y} = this.camera.getWorldPointFromPixelPoint(canvasCoords)
      this.box = new Block(x,y,2,2,this.boxColor,this.world)
      this.boxes.push(this.box)
    },

    onMouseEnter(...args){
      // $app.$ui.set('text', this.text)
      $app.$ui.named.text = this.text
    },
    onMouseMove({x,y}){
      this.text.x = x
      this.text.y = y
    },
    onMouseLeave(...args){
      console.log('leave', args)
      // $app.$ui.set('text', null)
      $app.$ui.named.text = null
    },

    // drawing methods
    drawBox(ctx){
      if(this.box){
        ctx.save()
        this.box.draw(ctx)
        ctx.restore()
      }
    },
  }
}
</script>

<style lang="css">
</style>
