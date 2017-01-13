import {BaseSystem} from 'ein'
export default class GyroSystem extends BaseSystem {
  constructor(){
    super();
  }

  //Overide
  onEntityAdded(manager){
    this.entities = manager.getEntitiesByClassName("Board");
  }

  onEntityRemoved(manager){}

  onSystemAddedTo(manager){
    this.em = manager;
  }

  onSystemRemovedFrom(manager){}

  //Overide
  update(...args){
    /* Get Gyro, then update each entity */
    
    this.entities.forEach(entity => {
      
    });
  }
};
