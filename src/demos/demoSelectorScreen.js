import {Screen, Camera, Ludic, classTypeOf} from 'Ludic'
import {EntityManager, GenericSystem} from 'ein'
import Button from 'src/components/button'
import Clickable from 'src/components/clickable'

export default class DemoSelectorScreen extends Screen {
  constructor() {
    super();

    this.camera = new Camera(Ludic.canvas);
    this.camera.centerWorldToCanvas();

    // create an input listener. passing `true` automatically adds
    //  the listener to the controller.
    this.inputListener = Ludic.input.newInputListener({

      methods: {
        mouseMove: this.onMouseMove
      }
    }, true);

    this.rect = new Path2D();
    this.rect.rect(0,0,10,10);

    // initialize an EntityManager
    this.em = new EntityManager();

    this.clicker = new GenericSystem({});

    // create a button
    this.button = new Button(0,0,10,10);
    // console.log(this.button);
    // console.log(this.button instanceof Button);
    // console.log(this.button.implements(Clickable));
    // console.log(this.button.;
  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.camera.update(delta);

    this.button.draw(ctx);
  }

  onMouseMove(canvasPos, worldPos, event){
    // console.log(event.region);
  }
}

let imple
