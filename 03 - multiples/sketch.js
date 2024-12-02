let size1 = false
let size2 = false
let size3 = false
let brushSize1 = 20
let brushSize2 = 40
let brushSize3 = 60
//let clearCanvas = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw (){
  if (size1) {
    ellipse(mouseX, mouseY, brushSize1, brushSize1);
    }
    if (size2) {
      ellipse(mouseX, mouseY, brushSize2, brushSize2);
    }
    if (size3) {
      ellipse(mouseX, mouseY, brushSize3, brushSize3);
    }
  }

function keyTyped() {
  if (key === '1') {
    size1 = !size1;
  }else if (key === '2') {
    size2 = !size2;
  }else if (key === '3') {
    size3 = !size3;
  }
 
  if(key === 'q'){
   erase(windowWidth,windowHeight);
  }
  if(key === 'e'){
   noErase(windowWidth,windowHeight);
  }
  if(key === 's'){
    saveCanvas('MyCreation.jpg');
  }
  
    }
