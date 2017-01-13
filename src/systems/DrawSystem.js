import {BaseSystem} from 'ein'
export default class DrawSystem extends BaseSystem {
  constructor(){
    super();
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
      entity.draw();
    });
  }
};
