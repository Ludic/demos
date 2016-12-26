import Clickable from './clickable'
import {mix} from 'mixwith'

class Button extends mix().with(Clickable) {
  constructor(x,y,width,height) {
    super();
    this.path = Path2D.rect(x,y,width,height);
  }

  draw(ctx){
    ctx.save();
    ctx.fillStyle = '#62aaeb';
    ctx.fill(this.path);
    ctx.restore();
  }
}


export default Button;
