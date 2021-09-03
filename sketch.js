var bgIm, bg = "snow3.jpg";
var man;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var snowarray = []
var maxSnow = 15

function preload(){
  bgIm = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.World;

  man = createSprite(50,320,50,50);
  for(var i =0; i<maxSnow; i++){
    snowarray.push(new snowfall(random(0,600),random(0,100)))
  }
}

function draw() {
  background(bgIm);  
   Engine.update(engine);
  for(var i = 0; i<maxSnow; i++){
    snowarray[i].display();
  }
  drawSprites();
}

