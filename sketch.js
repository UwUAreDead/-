
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  pathcreatesprite(200,200);

  //create sprites here
}

function draw() {
  drawSprites();
  background(0);

  pathcreatesprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scaleY = 4;
  path.scale = 1.2;



}
