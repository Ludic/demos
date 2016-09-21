import {Ludic, App, Camera} from 'Ludic'

//Config Ludic?
Ludic.devmode = true;

var config = {
  canvas: {
    fullscreen: true
  },
  camera: {
    fps: false,
    extras: {
      axes: true,
      grid: false
    },
    ptm: 25
  },
  world: {
    gravity: {
      x: 0,
      y: -10
    },
    drawDebug: true
  },
  input: {
    logAllKeys:false,
    logUnmappedKeys:true,
  }
};

export default class Senso extends App {
  constructor(config){
    super(config);

    this.camera = new Camera(Ludic.canvas);
    this.camera.centerWorldToCanvas();
  }

  update(delta){

    Ludic.context.fillStyle = 'white';
    Ludic.context.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    Ludic.context.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.camera.update(delta);

    Ludic.context.save();
    Ludic.context.fillStyle = 'black';
    Ludic.context.fillRect(0,0,10,10);
    Ludic.context.restore();
  }
}


var app = new Senso(config);
app.run();
