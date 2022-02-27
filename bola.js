class Ball{
  constructor(x,y,r){

      var options = {
          isStatic:true
      }

      this.r = r;
      this.body = Bodies.circle(x,y,r, options);
      this.image = loadImage("stone.png");

      World.add(world,this.body);

  }
  tiro(){
    var newAngle = estilingue.angle - 160;
    newAngle = newAngle*(3.14/4);

    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);

    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body, {x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});
}

  display(){
      var position = this.body.position;

      push();
      image(this.image, position.x,position.y, this.r,this.r);
      pop();
  }
}