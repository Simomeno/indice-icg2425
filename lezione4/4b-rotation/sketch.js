let angle=5
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  //voglio esprimere tutti gli angoli in gradi centigradi
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push()
  strokeWeight(1);
  fill("orange");
  rotate(angle*0.1);
  rect(50,50,100,50);
  pop();
  //degree, radians
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(50,50);
  //cambiare anchor point
  //traslare prima
  push();
  translate(200,200);
  rotate(angle);
  fill("orange");
  circle(0,0,100);
  line(0,-50,0,50);
  pop();
  angle=angle+2;
}
