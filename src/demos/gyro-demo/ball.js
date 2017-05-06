import Box2D from 'ludic-box2d';

export default class Ball {
  constructor(x, y, radius = 1, color, world, active = true, priority = -1, isDynamic = true){
    this.x = x;
    this.y = y;
    this.px = x;
    this.py = y;
    this.dx = x;
    this.dy = y;
    this.radius = radius;
    this.isDynamic = isDynamic;
    this.color = color;
    this.current = true;
    this.score = 0;
    this.createB2D(world);
    this.ballImage = document.getElementById("ball-image")
  }

  createB2D(world){
    var bd = new Box2D.b2BodyDef();
    if(this.isDynamic){
      bd.set_type(Box2D.b2_dynamicBody);
    }
    bd.set_position(new Box2D.b2Vec2(this.x, this.y));
    this.body = world.CreateBody(bd);

    var shape = new Box2D.b2CircleShape();
    shape.m_radius = this.radius;
    this.fixture = this.body.CreateFixture(shape, 0.0);
    this.fixture.SetDensity(1.0);
    this.fixture.SetRestitution(0.5);
    this.body.ResetMassData();
  }

  getPosition(easyRead){
    var pos;

    this.pos = this.body.GetPosition();

    if(easyRead){
      pos = {
        x:this.pos.get_x(),
        y:this.pos.get_y()
      };
    } else {
      pos = this.pos;
    }
    return pos;
  }

  draw(ctx){

    let pos = this.getPosition(true);


    this.px = this.x;
    this.py = this.y;

    this.dx += (this.px - pos.x) * 50
    this.dy += (this.py - pos.y) * 50
    
    ctx.translate(pos.x, pos.y);
    ctx.rotate(this.body.GetAngle());
    ctx.translate(-(pos.x), -(pos.y));

    ctx.beginPath()
    ctx.arc(pos.x, pos.y + this.radius, this.radius, 0, 2 * Math.PI, false)
    ctx.strokeStyle = 'rgba(0, 0, 0, .6)'
    ctx.lineWidth = .1
    ctx.stroke()

    ctx.clip()
    

    let sxMod = this.ballImage.width - 100
    let syMod = this.ballImage.height - 100
    
    let sx = ((this.dx % sxMod) + sxMod) % sxMod
    let sy = ((this.dy % syMod) + syMod) % syMod
    
    let sWidth = 100
    let sHeight = 100
    let dx = pos.x - this.radius
    let dy = pos.y
    let dWidth = this.radius * 2
    let dHeight = this.radius * 2
      
    ctx.drawImage(this.ballImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dWidth);

    this.x = pos.x;
    this.y = pos.y;

  }
};
