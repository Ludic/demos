import {Screen, Camera, Ludic} from 'ludic'
import * as lud from 'ludic'
import {EntityManager} from 'ein'
import Block from 'src/entities/block'
import {LudicConnect} from 'ludic-connect'

export default class MultiplayerDemoScreen extends Screen {
  constructor() {
    super();
    console.log(LudicConnect);
    this.camera = new Camera(Ludic.canvas);
    this.camera.centerWorldToCanvas();

    this.inputListener = Ludic.input.newInputListener({
      methods: {
        mouseMove: this.onMouseMove
      }
    }, true);

    // initialize an EntityManager
    this.em = new EntityManager();

    LudicConnect.createLobby("multiplayer lobby");
  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.camera.update(delta);
  }

  onMouseMove(canvasPos, worldPos, event){
    // console.log(event.region);
  }
}
