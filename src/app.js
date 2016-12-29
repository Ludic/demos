import {LudicApp, Camera, Ludic} from 'Ludic'
import DemoSelectorScreen from 'demos/DemoSelectorScreen'
import LobbyScreen from 'demos/multiplayer/lobbyScreen'
import MultiplayerDemoScreen from 'demos/multiplayer/multiplayer'

export default class LudicDemosApp extends LudicApp {
  constructor(config){
    super(config);

    // this.screenListener = Ludic.screenManager.newListener(true);
    this.demoSelectorScreen = new DemoSelectorScreen();
    this.lobbyScreen = new LobbyScreen();
    this.multiplayerDemoScreen = new MultiplayerDemoScreen();
    // add the DemoSelectorScreen to the ScreenManager.
    /* Ludic.screenManager.addScreen(this.demoSelectorScreen); */
    Ludic.screenManager.addScreen(this.lobbyScreen);
    /* Ludic.screenManager.addScreen(this.multiplayerDemoScreen); */
  }

  update(delta){
    // add the screen manager to the update loop. all arguments are applied to
    //  the active screen's update method, so passing the context (optional)
    //  ensures each screen will have the drawing context on update.
    Ludic.screenManager.update(delta, Ludic.context);
  }
}
