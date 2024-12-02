function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(13,13,13);

  fill(255)
  
  rect(160, 10, 190, 280,10);
  fill(65,105,225);
  rect(170, 17, 170, 263,10);
  
  fill(255)
  rect(130, 30, 200, 290,10);
  fill(255,0,0);
  textSize(17);
  noStroke();
  text('K',310,280);
  text('K',140,50);
  quad(310,290, 315,280, 320,290, 315,300);

  stroke(0);
  fill(255);
  rect(100,50,200,300,10);
  fill (0);
  textSize (17);
  text('A',115,80);
  text('A',277,310);
  
  circle(200,200,150);
  fill(255);
  circle(200,200,80);
  fill(0);
  textSize(45);
  text('A',185,215);
 
  triangle(115, 90, 120, 80, 125, 90);
  circle(117,90,5);
  circle(123,90,5);
  triangle(117, 97, 120, 92 , 123, 97);

  triangle(277, 320, 282, 310, 287, 320);
  circle(279,320,5);
  circle(285,320,5);
  triangle(279, 327, 282, 322 , 285, 327);

  fill(255);
  rect(0,0,60,400);
  fill (255,0,0);
  rect(60,0,30,400)

  fill(0)
  triangle(10, 50, 30, 10 , 50, 50);
  circle(20,50,20);
  circle(40,50,20);
  triangle(20, 70, 30, 50 , 40, 70);

  fill(255,0,0);
  noStroke();
  circle(20,120,30);
  circle(40,120,30);
  triangle(3,120, 30,150 ,58,120);
  
  fill(0);
  stroke(0);
  circle(30,210,30);
  circle(20,230,30);
  circle(40,230,30);
  triangle(25,250,30,240,35,250);

  fill(255,0,0);
  noStroke();
  quad(3,320, 30,280, 58,320, 30,360);


}

