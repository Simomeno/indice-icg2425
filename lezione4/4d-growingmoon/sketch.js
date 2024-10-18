let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let phase=50;
let diametro=100;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
}
function draw() {
  background("navy");
  //moon
  drawingMoon(moonXpos,moonYpos,100,phase,diametro);
  

  
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
  moonXpos=(moonXpos+1) % canvasXMax;
  phase= phase+0.2;
  if (phase>diametro){
    phase=-diametro
  }
}

function drawingMoon(xMoon, yMoon,dMoon, phase, diametro){
  push();
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(xMoon, yMoon, dMoon);
  translate(phase,0);
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(xMoon, yMoon,dMoon);
  pop();

}