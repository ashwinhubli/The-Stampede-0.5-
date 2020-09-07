var sprite,backG;

function preload(){
run = loadAnimation("tenor-unscreen.gif");
backImg = loadImage("1.jpg");
rhinoImg1 = loadAnimation("depositphotos_135998394-stock-illustration-angry-rhino-cartoon.png");
rhinoImg2  = loadAnimation("depositphotos_135998394-stock-illustration-angry-rhino-cartoon.png");
healthImg = loadImage("OIP.png");
}

function setup(){
  createCanvas(1450, 650);
  backG = createSprite(750,300,10,10);
  backG.addImage(backImg);
  backG.scale = 1.8;

  sprite = createSprite(110,590,50,50);
  sprite.addAnimation("running",run);
  sprite.scale = 0.8;
  rectMode(CENTER);
  animalGroup = new Group();
}


function draw() {
  rectMode(CENTER);
  
  background(255,255,255);  
  
  if(backG.x<680){
    backG.x = width/2;
    backG.velocityX = -1;
  }
  if(background.velocityX>0){
    sprite.addAnimation("running",run)
  }  
    sprite.velocityX = 0;
    backG.velocityX = -1;
    sprite.addAnimation("running",run)
  
  if(keyWentUp(RIGHT_ARROW)){
    sprite.velocityX = 0;
    backG.velocityX = 0;
    }
  camera.position.y = sprite.y-150;
    fill("green");
   //ellipse(sprite.x,sprite.y,80,80);
  drawSprites();
  
 
      
 animals();
}
function animals(){


  if(frameCount % 120 === 0) {
    var obstacle = createSprite(1500,590,10,40);
    obstacle.velocityX = -6;
    obstacle.addAnimation("running",rhinoImg1);
          
    obstacle.scale = 0.40;
    obstacle.lifetime = 250;
    animalGroup.add(obstacle);
 }
}