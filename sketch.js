//Catch the Ball
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1"
var timer = 10;

function setup() {
  createCanvas (400, 400);
}

function draw() {
  background(220);
  if(gameState == "L1"){
    levelOne();
  }
if(gameState =="L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
  text("Timer: " + timer, width/2, 60);
  text (("Score: " + score), width/2, 40);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

  if(timer == 0) {
    text("END GAME", width/2, 80)
  }

  print(timer);
  
}

// let timer 10;

// var seconds = 0;
// var lastSecond = 0;

function levelOne() {
  text ("Level 1", width/2, height-20);
 var distToBall = dist(ballx,bally,mouseX,mouseY)
 if(distToBall < ballSize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
 }
if(score>= 5){
  gameState = "L2"
}
  ellipse(ballx,bally,ballSize);
  line(ballx,bally,mouseX,mouseY)
} 

//end of level 1


function levelTwo() {
  background(200,100,0)
  text ("Level 2!", width/2, height-20);
 var distToBall = dist(ballx,bally,mouseX,mouseY)
 if(distToBall < ballSize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
 }
if(score>= 10){
  gameState = "L3";
}
  ellipse(ballx,bally,ballSize);}
   //line(ballx,bally,mouseX,mouseY)

   //end of level 2


   function levelThree() {
    background(0,100,200)
    text ("Level 3", width/2, height-20);
   var distToBall = dist(ballx,bally,mouseX,mouseY)
   if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
   }
  if(score>= 15){
     background(random (255));
  }
    ellipse(ballx,bally,ballSize);
  }
     //line(ballx,bally,mouseX,mouseY)
  
     //end of level 3

     
  







