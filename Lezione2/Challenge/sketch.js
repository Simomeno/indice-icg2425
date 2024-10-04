function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  
}

function draw() {
  background(0);
  orbitControl();
  lights()
  fill(140, 130, 50)
  rotateX(QUARTER_PI)
  rotateY(QUARTER_PI/-2)
  
  scale(2.3)
  fill(150, 120, 10)
  torus(30, 20, 100, 100);
  
  //
  fill(101,67,33)
  translate(0, 0, 7)
  scale(1.03)
  push();
  torus(30, 20, 200, 20);
  pop();

  //
  fill("white")
  noStroke()
  translate(16,20,20)
  scale(0.08)
  cylinder(10, 40);
  //
  noStroke()
  translate(90,100,-7)
  rotateZ(90)
  cylinder(10, 25);
  //
  noStroke()
  translate(90,100,0)
  rotateZ(90)
  cylinder(10, 30);


   //aggiunti con control c
   fill("white")
   
   translate(700,20,20)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateZ(90)
   cylinder(10, 30);
   
   //aggiunti con control c
   fill("white")
   
   translate(400,20,0)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateZ(90)
   cylinder(10, 30);
   

   //aggiunti con control c
   fill("white")
   
   translate(700,20,0)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateZ(90)
   cylinder(10, 30);
   //aggiunti con control c
   fill("white")
   
   translate(400,100,2)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateZ(90)
   cylinder(10, 30);
   //aggiunti con control c
   fill("white")
   
   translate(700,200,15)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateZ(90)
   cylinder(10, 30);
   //aggiunti con control c
   fill("white")
   
   translate(500,200,0)
   
   cylinder(10, 40);
   //
   noStroke()
   translate(90,100,-7)
   rotateZ(90)
   cylinder(10, 25);
   //
   noStroke()
   translate(90,100,0)
   rotateX(90)
   cylinder(10, 30);
 
}





