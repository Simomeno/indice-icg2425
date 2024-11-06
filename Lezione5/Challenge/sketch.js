function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
}

let larghezza= 50;
let altezza= 50;

function draw() {
  background(0);
  fill("red");
  stroke("white");
  lights();
  box(100, 100,100, windowWidth/2, windowHeight/2);
  orbitControl();

}
