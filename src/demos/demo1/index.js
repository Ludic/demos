import {Screen, Camera, Ludic} from 'ludic'
import ColorScreen from './colorScreen'

export default class Demo1Screen extends Screen {
  constructor() {
    super();

    this.camera = new Camera();
    this.camera.centerWorldToCamera();
  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.camera.draw(ctx);
    this.camera.drawAxes(ctx);

    ctx.fillStyle = 'black'
    ctx.fillRect(-1,-1,2,2);
  }
}
