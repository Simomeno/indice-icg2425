let angle=5
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
background(220);
//palla da basket
drawRotateBasketBall(200,200,100,angle);
//drawBasketBall(200, 200, 100);
//drawRotateBasketBall(angle);
angle+=0.7;
}

function drawRotateBasketBall(xCenter,yCenter,dBall, angle){
  push();
  translate(xCenter,yCenter);
  rotate(angle);
  drawBasketBall(0,0,dBall);
  pop();
}

function drawBasketBall(xCenter, yCenter, dBall){
  fill(255,165,0);
  stroke(0);
  strokeWeight(3);
  circle(xCenter,yCenter,dBall);
  line(-50+xCenter,yCenter,50+xCenter,yCenter);
  line(-35+xCenter,-35+yCenter,35+xCenter,35+yCenter);
  line(35+xCenter,-35+yCenter,-35+xCenter,35+yCenter);
}

