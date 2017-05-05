import {Entity} from 'ein'
import DrawableComponent from '../components/drawable'
export default class Ship extends Entity {
  constructor(x=0,y=0,width=1,height=1) {
    super()
    this.path = Path2D.rect(x,y,width,height)

    this.addComponent(new DrawableComponent(this.draw))
  }

  draw(ctx){
    ctx.save()
    ctx.strokeStyle = 'white'
    ctx.stroke(this.path)
    ctx.restore()
  }
}
