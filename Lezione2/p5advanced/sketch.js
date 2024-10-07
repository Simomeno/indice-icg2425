let xsize = 800;
let ysize = 800;

function setup() {
  createCanvas(xsize, ysize);
  background("red")
}

function draw() {
  fill("lightBlue");
  triangle(0,200,200,200,100,300);
  triangle(200,400,200,350,150,350);
  triangle(200,200,200,400,300,300);
  triangle(400,200,350,250,350,200);
  triangle(300,100,400,200,200,200);
  triangle(0,200,50,150,50,200);
  triangle(200,200,200,0,100,100);
  triangle(200,0,250,50,200,50);
  fill("blue");
  triangle(200,200,350,200,350,350);
  triangle(350,50,350,150,300,100);
  triangle(50,50,100,100,150,50);
  triangle(350,350,300,300,250,350);
  triangle(200,200,200,350,50,350);
  triangle(50,350,50,250,100,300)
  triangle(200,50,350,50, 200,200);
  triangle(50,200,50,50, 200,200);
  line(0,0,400,400);
  line(0,400,400,0);
  
  
  
  
 
  
}
