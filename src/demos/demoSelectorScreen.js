import {Screen, ScreenManager, Camera, app} from 'ludic'
import {EntityManager, BaseSystem} from 'ein'
import DemoButton from 'src/components/demoButton'

// demos
import Demo1 from './demo1'
import Demo2 from './demo2'

export default class DemoSelectorScreen extends Screen {
  constructor() {
    super();

    this.camera = new Camera(app.canvas);
    this.camera.inverseY = false;
    // this.camera.centerWorldToCamera();

    // create an input listener. passing `true` automatically adds
    //  the listener to the controller.
    this.clickListener = app.input.newInputListener({
      binder: this,
      methods: {
        mouseDown: this.onMouseDown,
      },
    }, true);
    // key listener to catch 'esc' key for coming back from a demo
    this.keyListener = app.input.newInputListener({
      binder: this,
      keyConfig: {
        'esc.up': ()=>{
          console.log('on backspace up');
          this.$manager.popToScreen(this.activeDemo);
        }
      }
    }, true);

    // initialize an EntityManager
    this.em = new EntityManager();

    let buttonsDef = [
      {
        screen: Demo1,
      },
      {
        screen: Demo2,
      },
    ]

    // create a button
    this.buttons = buttonsDef.map((def,index)=>{
      return new DemoButton(1+(4*index),1,def)
    })

  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, app.canvas.width(), app.canvas.height());
    ctx.fillRect(0, 0, app.canvas.width(), app.canvas.height());

    this.camera.draw(ctx);
    this.camera.drawAxes(ctx);

    this.buttons.forEach((button)=>{
      button.draw(ctx);
    })
  }

  onMouseDown(pixelPoint,evt){
    let point = this.camera.getWorldPointFromPixelPoint(pixelPoint)
    this.buttons.forEach((button)=>{
      if(app.context.isPointInPath(button.path,point.x,point.y)){
        console.log('clicked button');
        this.activeDemo = new button.screen()
        this.$manager.addScreen(this.activeDemo);
        this.clickListener.$disable();
      }
    })
  }

  onScreensRemoved(){
    console.log(this);
    this.clickListener.$enable();
  }

  onAddedToManager(manager){
    // this.screenListener = manager.getNewScreenEventListener(true);
    // this.screenListener.onScreensRemoved = this.onScreensRemoved.bind(this);
    manager.addScreenEventListener(this);
  }
}
