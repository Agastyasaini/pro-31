const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground ;
var divisions=[];
var divisionHeight=300;



function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;


   ground = new Groundclass(width/2,680,width,10);
   

}

function draw() {
  background(0); 
  
  ground.display();
  


  drawSprites();
}

for (var k = 0;k<= 800; k = k + 80){
  divisions.push(new Groundclass(k,700-divisionHeight/2,10,divisionHeight));
}
