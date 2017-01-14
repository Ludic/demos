import {BaseSystem} from 'ein'
export default class GyroSystem extends BaseSystem {
  constructor(){
    super();
    window.addEventListener("deviceorientation", this.handleOrientation.bind(this), true);
  }

  handleOrientation(e){
    console.log(e);
    this.absolute = e.absolute;
    this.alpha    = e.alpha;
    this.beta     = e.beta;
    this.gamma    = e.gamma;
  }
  
  //Overide
  onEntityAdded(manager){
    this.entities = manager.getEntitiesByClassName("Ball");
  }

  onEntityRemoved(manager){}

  onSystemAddedTo(manager){
    this.em = manager;
  }

  onSystemRemovedFrom(manager){}

  //Overide
  update(...args){
    this.entities.forEach(entity => {
      entity.x = this.gamma * 4 + 200;
      entity.y = this.beta * 4 + 200;
    });
  }
};
