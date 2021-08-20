
var ship_running;
var ship;
var sea;
var seaImg;
function preload()
{
  
seaImg = loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){

 createCanvas(400,400)

 sea = createSprite(200,180,100,20);
  sea.addImage("running",seaImg);
  sea.velocityX=-3



  //create a ship sprite
  ship = createSprite(160,250,20,150);
  ship.addAnimation("ship", ship_running);
  ship.scale=0.3
  
 
  
  
  


  
 }

 function draw() {

  background("white");
   if(sea.x< 0) {
     sea.x = sea.width/4;
   }

  drawSprites();




 }