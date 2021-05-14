const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg, bgImage;
var pengui, pengImage
var ground;
var engine,world;
var obstacles, obstacleImage;
var arrow, arrowImage;
var pengDie, pengdieIMG
var resting, IMG
var Snows = []


var maxSnow=10;

function preload(){
  bgImage = loadImage("snow1.jpg");
  pengImage = loadImage("penguine.png");
  obstacleImage = loadImage("obstacle.png");
  arrowImage = loadImage("arrow0.png")
  pengdieIMG = loadImage("penguinedie.png")
  IMG = loadImage("rest.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
 

  invisibleGround = createSprite(100, 650,1000000,10);
  invisibleGround.visible = false;
 

  ground = createSprite(10, 600,100000,20);
   ground.visible = false;
  ground.velocityX = -3;

  ground.x = ground.width /2;

  pengui = createSprite(width/1.2, height/1.5 , 50, 50);
  pengui.addImage(pengImage);
  pengui.scale = 0.8;

  

pengDie = createSprite(width/1.2, height/1.2 , 50, 50);
pengDie.addImage(pengdieIMG);
pengDie.visible = false;




resting = createSprite(width/2, height/2, 10, 10);
resting.addImage(IMG);
resting.visible = false;

  if(frameCount % 150 === 0){

    for(var i=0; i<maxSnow; i++){
        Snows.push(new Snow(random(0,400), random(0,400)));
    }

}

}




ArrowGroup = new Group();


function draw() {
  background(bgImage);
  Engine.update(engine)
  pengui.collide(invisibleGround);

  pengui.velocityX = 0;

  
  if(keyDown("space")) {
    pengui.velocityY = -22;
   

  }
  if(keyDown("right")){
    pengui.velocityX = 4;
  }
  if(keyDown("left")){
    pengui.velocityX = -4;
  }
  function keyReleased(space) {

    pengui.velocityX = 0;

  }

  



  pengui.velocityY = pengui.velocityY + 0.9


  //displaying rain drops
  for(var i = 0; i<maxSnow; i++){
    Snows[i].showSnow();
    Snows[i].updateY()
    
}
if(keyDown("down")){
  pengui.visible = false;
  pengDie.visible = true;
  resting.visible = true;

}

if(keyDown("up")){
  pengui.visible = true;
  pengDie.visible = false;
  resting.visible = false;

}





  drawSprites();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


