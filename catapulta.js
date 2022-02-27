class Cannon {
  constructor(x, y, width, height, angle) {
  //  const options = {
     // isStatic: true
   // };

   // this.body = Matter.Bodies.rectangle(x, y, width, height, options);
   this.x = x;
   this.y = y;
   this.angle = angle;
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("marelo.png");

  //  World.add(world, this.image);

    
  }

  display() {
   

    if (keyIsDown(DOWN_ARROW) /*&& angle < -0.10*/) {
      this.angle += 0.01;
     // Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && this.angle > -1.2) {
      this.angle -= 0.01;
     // Matter.Body.setAngle(this.body, angle);
    }

    push();
   translate(this.x, this.y);

    rotate(this.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
