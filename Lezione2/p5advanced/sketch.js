let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //disegnare luna
  fill("yellow");
  stroke("white");
  strokeWeight(10);
  circle(300,75, 100);
  //prima della forma desiderata
  //cambiare fill e stroke
  fill("green");
  stroke("darkGreen");
  strokeWeight(5);
  rect(0,200,400,200);
  strokeWeight(30)
  stroke("yellow");
  let xStars_primordiale= 10;
  let yStars_primordiale= 20;
  point(xStars_primordiale,yStars_primordiale);
  let passo=1;
  //for(init;test;update){corpo}
  for(let i=0; i<50; i= i+passo){
    strokeWeight(i*3)
    if(i%2==0){ //se il resto della divisione del numero per due è zero allora...
      //corpo di ramo vero
      stroke("yellow");

    }else{
      //altrimenti questo
      stroke("pink");
    }
    strokeWeight(i*3);
    point(xStars_primordiale*i, yStars_primordiale+i);
  }
  fill("white");
  stroke(0);
  strokeWeight(0);
  textSize(20);
  text("C'era una volta...",200,350);

  fill("orange");
  triangle(100,150,125,125,150,150);
  let casettaX=100;
  let casettaY=150;
  rect(casettaX,casettaY, 50, 50);
  fill("red");
  triangle(casettaX,casettaY,casettaX+25,casettaY-25,casettaX+50,casettaY);
  let distanza=10;
  
  

  
  
  
}
