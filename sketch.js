var car;

var car1, car3, car4, truck, track, ground;

var car_img, car1_img, car3_img, car4_img,track_img, truck_img, ground_img;

var random;

function preload(){

   car_img = loadImage("../images/car.png");
   car1_img = loadImage("../images/car1.png");
   car3_img = loadImage("../images/car3.png");
   car4_img = loadImage("../images/car4.png");
   track_img = loadImage("../images/track.png");
   truck_img = loadImage("../images/truck.png");
   ground_img = loadImage("../images/ground.png");

}

function setup(){
var Canvas = createCanvas(1200,900);

track = createSprite(300,450);
track.addImage("tracks",track_img);
track.scale = 2;

var car = createSprite(200,750);
car.addImage("cars",car_img);
car.scale = 0.1;

keyPressed();
}

function draw(){
  background (0); 
  track.velocityY = 2;

  if (track.y > 900){
    track.y = track.height/4
  }
  
  spawnObstical();
  drawSprites();  
}

function spawnObstical(){

  if(World.frameCount%60===0){
    var obstical = createSprite(250,320,30,10);
   obstical.addImage("obstical car1",car1_img);
   obstical.velocityY = 3;
   obstical.scale = 0.05;

   obstical.x = random(100,200);
   
  }
}

function keyPressed(){

if(keyIsPressed==="A"){
car.velocityX = -3;
   }
}

