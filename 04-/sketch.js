let img1;
let img2;
let img3 ;
let img4 ;
let img5;
let img6;
let img7;
let img8 ;
let img9;
let vid;
let videoX=200;
let videoY=150;
let hum;

function preload(){
  img1 = loadImage('1.png')
   img2 = loadImage('2.png')
   img3 = loadImage('3.png')
   img4 = loadImage('4.png')
   img5 = loadImage('5.png')
   img6 = loadImage('6.png')
   img7 = loadImage('7.png')
   img8 = loadImage('8.png')
   img9 = loadImage('9.png')
   vid = createVideo('toast.mp4')
   hum = loadSound('toast.mp3')


  
}


function setup() {
  createCanvas(700,600);
  vid.size(500,320)
  vid.play();
}

function draw() {
  
  background(235)
  
  image(img1,0,100)
   image(img2,0,0)
   image(img3,0,470)
   image(img4,100,470)
   image(img5,200,0)
   image(img6,300,0)
   image(img7,300,470)
   image(img8,500,0)
   image(img9,500,470)
   image (vid,videoX,videoY)
   
  

  img1.resize(200,400)
  img2.resize(200,150)
  img3.resize(200,150)
  img4.resize(200,150)
  img5.resize(200,150)
  img6.resize(200,150)
  img7.resize(200,150)
  img8.resize(200,150)
  img9.resize(200,150)
 
  function mouseClicked(){
    hum.loop();
    hum.amp(0.2); 
  }
}