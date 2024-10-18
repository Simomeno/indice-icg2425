let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
}
function draw() {
  background("navy");
  //
  frameRate(10);
 
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100);
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100);
  //metodo aggiornamento 1
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  moonXpos= moonXpos+1;
  //condizinalmente se la luna esce dai bordi
  if(moonXpos>canvasXMax){
    moonXpos=0;
  }
  //metodo agg 2
  //continua ad aggiungere 1 per ogni frame disegnato
  moonXpos=(frameCount+5 +700)% canvasXMax;
  //divisibilità, definire confini
  //operatore di modulo
  // 1% 400--> 1/400=0 e il suo resto è 1
  // 2 %400 --> 2/400=0 con resto 2

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

  //voglio disegnare stelle random
  let xStar=0
  let yStar=0
  for( let numero_stelle=0; numero_stelle<5; numero_stelle++){
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(0,50));
    point(xStar,yStar);
    //generare casulamente random()
    xStar= random(0, canvasXMax);
    yStar= random(0, canvasYMax/2);
  }
   
  //rollover, agiamo quando passiamo sopra
  //if passiamo spra
  //facciamo cose
  if((mouseX> x_casa) && 
  (mouseX< x_casa+ house_width) &&
  (mouseY> left_corner) &&
  (mouseY< left_corner+house_height)){
    //facciamo cose
    fill("navy");
    rect(x_casa, y-house_height ,house_width, house_height);

  }
  else{
    fill("white")
  }
  //if(frameCount == 50){
  //  noLoop();
  //}

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  //text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
}

