import {Screen, Camera, Ludic} from 'ludic'
import * as lud from 'ludic'
import {EntityManager} from 'ein'
import Block from 'src/entities/block'
import {LudicConnect} from 'ludic-connect'
window.lc = LudicConnect;

export default class MultiplayerDemoScreen extends Screen {
  constructor() {
    super();
    this.camera = new Camera(Ludic.canvas);
    this.camera.centerWorldToCanvas();

    this.inputListener = Ludic.input.newInputListener({
      methods: {
        mouseMove: this.onMouseMove
      }
    }, true);

    // initialize an EntityManager
    this.em = new EntityManager();

    // initialize a Block Entity
    this.block = new Block(0, 0, 100, 100);

    LudicConnect.onMessage = function(message){
      let data = JSON.parse(message.data);
      console.log(data.x);
      console.log(data.y);
      this.block.path = Path2D.rect(data.x, data.y, 100, 100);
    }.bind(this);
  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.block.draw(ctx);
    
    this.camera.update(delta);
  }

  onMouseMove(canvasPos, worldPos, event){
    if(LudicConnect.Host.dc && LudicConnect.Host.dc.readyState === 'open'){
      LudicConnect.send(JSON.stringify(canvasPos));
    }
  }
}
