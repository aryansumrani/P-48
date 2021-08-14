let ground;
let lander;
var lander_img;
var bg_img;
var gameState = "play";

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,300)
  lander.velocityY = 0.2;


  ground1 = createSprite(550,550,200,20);
  ground1.visible = false;


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  if(gameState==="play"){
    lander.velocityY = lander.velocityY+0.2
    if(frameCount%50 === 0 ){
      vy = vy+2;
    }
    if(frameCount%3 === 0){
      textSize(15);
      fill("white")
      text("LANDING AREA",500,500)
    }

    if (keyDown("left")){
      lander.x = lander.x-3; 
    }
  
   if(keyDown("right")){
     lander.x = lander.x+3;
   }
   if(lander.isTouching(ground1)){
   gameState = "end"
   a = lander.x;
   b = lander.y;

 
  }
  }
  
 
 
 if(gameState ==="end"){
   textSize(30);
   fill("white");
   text("LANDING IS SUCCESFUL",250,300);
   lander.x = a;
   lander.y = b;


 }

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  lander.velocityY = -4;
}

