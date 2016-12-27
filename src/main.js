import {default as Ludic, Camera} from 'ludic'
import LudicDemosApp from 'src/app'

var LudicDemos = new LudicDemosApp({
  canvas: {
    fullscreen: true,
  },
});
LudicDemos.run();
