var roadImg, road;
var boyAnimie, boy;
var righted, lefted;
function preload(){
  //pre-load images
  roadImg = loadImage("path.png");
  boyAnimie = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200,400,400);
  road.addImage(roadImg);
  road.velocityY = -2;

  boy = createSprite(200,300);
  boy.addAnimation("boy",boyAnimie);
  boy.scale = 0.1;

  righted = createSprite(50,200,50,400);
  righted.visible = false;

  lefted = createSprite(360,200,60,400);
  lefted.visible = false;
}

function draw() {
  background(0);
  if(road.y<0){
    road.y = road.height/2;
  }

  boy.x = mouseX;

  boy.collide(righted);
  boy.collide(lefted);

  drawSprites();
}
