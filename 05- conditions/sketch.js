let timer = 2
let x ;
let y ;
let size = 30; 
let speed = 2;
let score = 0;
let goLeft = false;


function setup() {
  createCanvas(400, 400);
  x = random(width);
  y = random(height);
}

function draw() {
  background(220);
  textSize(40);
  text(timer, 30, 50);
  
   if (timer == 0) {
    textAlign(CENTER,CENTER)
    text("GAMEOVER",200,200);
  }
 
  text( score,350,50);
  fill(0,0,255)
  circle(x,y,size);
  frameRate(120);
  y = y % width;
  y+=speed;

  fill(255,0,0);
  circle(mouseX, mouseY, size);
  
  if(y>400){
    x = random(width)
  }
  
  if(y>400){
    y = random(height)
  }
  
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
}

function mouseClicked(){
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){
    score++;
  }  
 
}