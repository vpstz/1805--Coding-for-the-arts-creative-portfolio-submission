let x = 200;
let y = 200;
goLeft = false;
goUp = false;
let bgColor = 0;
let circleColor=0;


function setup(){
  createCanvas(400,400);
  bgColor = random(255); 
  circleColor=random(255);
}

function draw(){
  background(bgColor);
  fill(circleColor);
  ellipse(x,y,80,80);
  
  
  if (goLeft==false){
    x = x+3
  }

  if (goLeft==true){
    x = x-3
  }
  
  if(x>400){
    goLeft=true 
  }
  
  if (x<0){
    goLeft=false
  }
    
if (goUp==false){
    y = y+2
  }

  if (goUp==true){
    y = y-1
  }
  
  if(y>400){
    goUp=true 
  }
  
  if (y<0){
    goUp=false
  }
  
  if (x>width) {
  bgColor = color(random (255), random(255), random(255)); 
}
   else if(x < 0){
      bgColor = color(random (255), random(255), random(255));
   }
  
   if (y>height) {
  bgColor = color(random (255), random(255), random(255)); 
}
   else if(y < 0){
      bgColor = color(random (255), random(255), random(255));
   }
  
    
  if (x>width) {
  circleColor = color(random (255), random(255), random(255)); 
}
   else if(x < 0){
      circleColor = color(random (255), random(255), random(255));
     
     if (y>width) {
  circleColor = color(random (255), random(255), random(255)); 
}
   else if(y < 0){
      circleColor = color(random (255), random(255), random(255));
   }
   }
}