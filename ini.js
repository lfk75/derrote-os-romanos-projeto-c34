class Ini {
    constructor(x,y,w,h){
        var options = {
          bounciness: 0
        };

        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.image = loadImage("./romano.png");
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world,this.body);
    }

    fall(){
     if(this.body.x < 500){
      gameOver();
     }
    }
    

    display(){
        var position = this.body.position;

        push();
        imageMode(CENTER);
        noStroke();
        fill("red");
        image(this.image, position.x,position.y, this.w,this.h);
        pop();
    }
}