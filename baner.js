class Banner {
    constructor(x,y,w,h){
        var options = {
            isStatic:true ,
            bounciness: 0,
            resitution: 0
        };

        this.w = w;
        this.h = h;
        this.carta_image = loadImage("banner.png");
        this.soldado_image = loadImage("espartano.png");
        this.body = Bodies.rectangle(x,y,w,h, options);

        //World.add(world,this.image);
    }

    display(){
        var position = this.body.position;

        push();
        imageMode(CENTER);
        noStroke();
         image(this.carta_image, position.x,position.y, this.w,this.h);
        pop();
        image(this.soldado_image, 480,330,250,250);
    }
}