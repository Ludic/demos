import {Ludic, Camera} from 'Ludic'
import LudicDemosApp from 'src/app'

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




var LudicDemos = new LudicDemosApp(config);
LudicDemos.run();
