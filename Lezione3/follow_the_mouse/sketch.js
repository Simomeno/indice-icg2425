let CanvasXMax=400;
let CanvasYMax=400;

function setup() {
  createCanvas(CanvasXMax, CanvasYMax);
  background(220);
}

function draw() {
  
  textSize(15);
  let string_toprint="Contenuto mouseX= "
  +mouseX 
  
  //
  ", y="+mouseY;
  // text(string_toprint,20,20)
  strokeWeight(1);
  line(0,mouseX,CanvasXMax, mouseY);
  //diesgnare linea gialla premendo tasto sinistro mouse
  //p5 --> true se il mmouse è schiacciato
  //altrimenti è false
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloriamo di giallo
    stroke("yellow");
  }else{
    //nero
    stroke("black");
  }

  mouseIsPressed;
  
}
