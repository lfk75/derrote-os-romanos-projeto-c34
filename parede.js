class Ground2 {
    constructor(x,y,w,h){
        var options = {
            
        };

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;

        push();
        rectMode(CENTER);
        noStroke();
        fill("orange");
        rect(position.x,position.y,this.w,this.h);
        pop();
    }
}