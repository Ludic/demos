import Button from './button'
export default class DemoButton extends Button {
  constructor(x,y,def) {
    super(x,y,3,2);
    this.screen = def.screen;
  }

  draw(ctx){
    ctx.save();
    ctx.fillStyle = '#62aaeb';
    ctx.fill(this.path);
    ctx.save();
    ctx.resetTransform();
    ctx.fillStyle = 'black';
    ctx.fillText("test", 10,10)
    ctx.restore();
    ctx.restore();
  }
}
