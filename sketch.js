var movingRect;
var fixedRect;
var box1;
var box2;
var box3;
var box4;

//Hi Pushpanjali!

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 20, 50); // movingRect width = 20 ; w/2 = 10 && // movingRect height = 50 ; h/2 = 25
  movingRect.shapeColor = "green";
  

  fixedRect = createSprite(200,200,80,40); //fixedRect width = 80 ; width/2 = 40 && // fixedRect height = 40 ; h/2 = 20
  fixedRect.shapeColor = "green";

  box1 = createSprite(700,300,20,40);
 
  box2 = createSprite(100,200,20,30);
  box3 = createSprite(600,300,20,20);
  box3.velocityX = -3;
  box4 = createSprite(100,300,40,40);
  box4.velocityX = 4;
}

function draw() {
  background(255,255,255); 

  console.log(movingRect.x - fixedRect.x)
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.width = 40;
  }
  else{
    movingRect.width = 20;
  }
  
  if(isTouching(movingRect,box1)){
    box1.shapeColor = "pink";
  }
  else{
    box1.shapeColor = "grey";
  }
  if(isTouching(movingRect,box2)){
    box2.height = 50;
  }
  else{
    box2.height = 30;
  }
  bounce(box3,box4);
  
  
  drawSprites();
}



//yes or no - TRUE or FALSE - Boolean values
// function has parameters that it can accept

