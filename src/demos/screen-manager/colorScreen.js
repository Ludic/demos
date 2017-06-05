import {Screen, app} from 'ludic'

export default class ColorScreen extends Screen {
  constructor(color) {
    super();
    this.color = color || this.getRandomColor();
    console.log(this.color);
  }

  update(delta, ctx){
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(0,0,app.canvas.width(),app.canvas.height());
    ctx.restore();
  }

  getRandomColor(){
    let r = this.getRandomInt(0,256)
    let g = this.getRandomInt(0,256)
    let b = this.getRandomInt(0,256)
    return `rgb(${r},${g},${b})`
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
