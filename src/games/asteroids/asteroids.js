import {app, LudicApp, Camera} from 'ludic'
import {Engine} from 'ein'
// import Ship from './entities/ship'

export default class Asteroids extends LudicApp {
  constructor(config) {
    super(config)


    this.camera = new Camera()
    this.camera.centerWorldToCamera()

    // create an update function that has context passed into it
    this.update = this.update.bind(this,app.context)


    // ein
    this.engine = new Engine()

    // this.ship = new Ship(0,0)
  }

  update(ctx, delta, time){
    app.canvas.clear('black', ctx)

    this.camera.draw(ctx)
    this.camera.drawAxes(ctx)

    this.engine.update(delta, time)

    this.ship.draw(ctx)
  }
}
