var movingRect,fixedRect,object3,object4

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 fixedRect.velocityY = 5;
 movingRect =  createSprite(400, 800, 80, 30);
 movingRect.velocityY = -5;
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";

 object3 = createSprite(800, 100, 50, 80);
 object3.velocityY = 5

 object4 = createSprite(800, 800, 50, 80);
 object4.velocityY = -5
}

function draw() {
  background(0); 
  
bounceOff(movingRect,fixedRect);
bounceOff(object3,object4);

 
 
  drawSprites();
}


