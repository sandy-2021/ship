var ship_1, ship_2,sea;
var seasetAnimation;
 
function Preload(){
  seaImage.loadAnimation("sea.png");
  shipImage.loadAnimation("ship_1.png","ship_2.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,20,20);
  sea.addAnimation("seaImage","sea.png");
  sea.scale =0.4;
  sea.x = sea.width/2;
  sea.velocityX = -4;
  
  
  ship = createSprite(200,200,20,20);
  ship.addAnimation(("ship-1.png","ship-2.png"));
  ship.scale = 2;
  ship.velocityX = 4;
}

function draw(){
  background(220);
  if(sea.x<0){
  sea.x = sea.width/2;
  }
  drawSprites();
}