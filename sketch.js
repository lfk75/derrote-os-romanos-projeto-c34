
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var parede1, parede2, parede3, parede4,parede5, parede6, parede7, parede8, parede9;
var parede10, parede11, parede12;
var ground;
var bola;
var ini, ini2;
var collison
var estilingue;
var banner;
var paredao;
var guerreiro;
var base;

var pontuacao1;
var pontuacao2;
var bolas = [];


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  pontuacao1= 0;
  pontuacao2 = 0;
  
  
  parede1 = new Ground2(500,535,20,70);
  parede2 = new Ground2(580,535,20,70);
  parede6 = new Ground2(600,535,20,70);
  parede3 =  new Ground2(680,535,20,70);
  parede4 = new Ground2(540,500,100,20);
  parede5 = new Ground2(775,535,20,70);
  parede7 =  new Ground2(640,500,100,20);
  parede8 = new Ground2(700,530,20,70);
  parede9 = new Ground2(730,500,100,20);
  parede10 = new Ground2(590,450,20,70);
  parede11 = new Ground2(690,450,20,70);
  parede12 = new Ground2(640,400,110,20)

  ini = new Ini(540,490,50,50);
  ini2 = new Ini(640,380,50,50);
  bola = new Ball(180,520,35);
  ground = new Ground(600,600,3000,50);
  estilingue = new Cannon(210,540,50,10,0)
  banner = new Banner(600,300,800,600);
  
  base = createImg("estilingue.png");
  base.position(190,520);
  base.size(60,58);
}


function draw() 
{
  background("lightblue");
  Engine.update(engine);
 
  textSize(20);
  text("derube os romanos", 50,100);
  
  parede1.display();
  parede2.display();
  parede3.display();
  parede4.display()
  parede5.display();
  parede6.display();
  parede7.display();
  parede8.display();
  parede9.display();
  parede10.display();
  parede11.display();
  parede12.display();
  ini.display();
  ini2.display();
  bola.display();
  estilingue.display();
  ground.display();
  
 

 
if(pontuacao1 === 1 && pontuacao2 === 1){
 gameOver();
}


 keyReleased();
 colisor();





 
}

  function keyReleased() {
    
    if (keyCode === RIGHT_ARROW) {
      bola.tiro();
    }
  }


 function colisor(){
  var verColision = Matter.SAT.collides(
    ini.body,
    ground.body
  )

  var verColision2 = Matter.SAT.collides(
    ini2.body,
    ground.body
  )

  if(verColision.collided){
   // console.log("colidiu")
    pontuacao1 = 1;
    console.log(pontuacao1)
  }

  if(verColision2.collided){
    // console.log("colidiu")
     pontuacao2 = 1;
     console.log(pontuacao2)
   }
 }

 function gameOver(){
   console.log(" fim de jogo");
   banner.display();
   textSize(50)
   text("PARABÉNS GUERREIRO",300,180);
   textSize(40)
   text("você derrotou todos os romanos", 300,300)
 }