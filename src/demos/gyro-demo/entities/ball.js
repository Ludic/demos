import {BaseEntity} from 'ein'

export default class Ball extends BaseEntity {
  constructor(x, y, radius){
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(context){
    context.fillStyle = '#62aaeb';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fill();
  }
};
