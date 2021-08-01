var bunny;
var carrot;
var edges;
var brick1;
var brick2;
var brick3;
var brick4;
var brick5;
var brick6;
var brick7;
var brick8;
var brick9;
var brick10;
var brick11;
var snake;
var snakeGroup;

function preload(){
  bg= loadImage("images\bgImage.jfif");
  bunnyImage = loadImage("images\bunnyImage.png");
  carrotImage = loadImage("images\carrotImage.png");
  snakeImage = loadImage("images\snakeImage.png");
}

function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites();
  bunny = createSprite(40,550,20,20);
  carrot = createSprite(550,40,30,30);
  snakeGroup = new Group();
  bg = createSprite(300,300);
  bg.scale = 3.6;
  bg.addImage(bgImage);
  bunny.addImage(bunnyImage);
  bunny.scale = 1.2;
  carrot.addImage(carrotImage);
  carrot.scale = 0.9;

  brick1 = createSprite(50,250,90,20);
  brick2 = createSprite(130,200,130,20);
  brick3 = createSprite(170,250,50,20);
  brick4 = createSprite(280,200,100,20);
  brick5 = createSprite(210,250,50,20);
  brick6 = createSprite(290,200,80,20);
  brick7 = createSprite(350,250,100,20);
  brick8 = createSprite(410,200,80,20);
  brick9 = createSprite(470,250,50,20);
  brick10 = createSprite(530,200,90,20);
  brick11 = createSprite(570,250,50,20);

  carrot.shapeColor = "white";
  bunny.shapeColor = "yellow";
  brick1.shapeColor = "red";
  brick2.shapeColor = "red";
  brick3.shapeColor = "red";
  brick4.shapeColor = "red";
  brick5.shapeColor = "red";
  brick6.shapeColor = "red";
  brick7.shapeColor = "red";
  brick8.shapeColor = "red";
  brick9.shapeColor = "red";
  brick10.shapeColor = "red";
  brick11.shapeColor = "red";
 
}

function draw() {
  background(bg);  
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  if(keyDown("right")){
    bunny.x = bunny.x+3;
  }
  if(keyDown("left")){
    bunny.x = bunny.x-3;
  }
  if(keyDown("up")){
    bunny.y = bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y = bunny.y+3;
  }
  if(bunny.isTouching(carrot)){
    text("YOU WON",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick1)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick2)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick3)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick4)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick5)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick6)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick7)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick8)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick9)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick10)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick11)){
    text("YOU LOST",200,200);
    bunny.x = 40;
    bunny.y = 540;
  }
    drawSprites();
    drawSnakes();
    for (var i = 0; i < (snakeGroup).length; i++) {
      var temp = (snakeGroup).get(i);
      if(bunny.isTouching(temp)){
        bunny.x = 39;
        bunny.y = 549;
      }
    }
}
function drawSnakes(){
  if(frameCount % 60 === 0){
    snake = createSprite(600,random(60,510),random(30,80),5);
    snakeGroup.add(snake);
    snake.velocityX = random(-4.5,0);
    snake.addImage(snakeImage);
    snake.scale = random(0.2,0.5);
  }
}