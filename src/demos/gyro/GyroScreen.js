import {Screen, Camera, Ludic} from 'ludic'
import * as lud from 'ludic'
import {EntityManager} from 'ein'

/* Entities */
import Ball from 'src/entities/ball'

/* Systems */
import DrawSystem from 'src/systems/DrawSystem'


export default class GyroScreen extends Screen {
  constructor() {
    super();
    this.camera = new Camera(Ludic.canvas);
    this.camera.centerWorldToCanvas();

    // initialize an EntityManager
    this.em = new EntityManager();

    /* this.addSystems();
       this.addEntities(); */
  }

  addSystems(){
    this.DrawSystem = new DrawSystem();

    this.em.addSystem(this.DrawSystem);
  }

  addEntities(){
    // initialize a Block Entity
    this.ball = new Ball(0, 0, 100, 100);
    this.em.addEntity(this.ball);
  }

  update(delta, ctx){
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());
    ctx.fillRect(0, 0, Ludic.canvas.width(), Ludic.canvas.height());

    this.em.update(delta);
    this.camera.update(delta);
  }
}
