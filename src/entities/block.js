import {mix} from 'mixwith'

class Block extends mix().with() {
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


export default Block;
