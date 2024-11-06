let num=23;
let num2= 24;
let arrayNum=[23,100,20,77,25,11,27];
//indici di accesso 0,1,2,3,4,5,6
//collezione ordinata omogenea di elementi
let collectionParole=["oop", "politecnico","premio", "sandalo", "vinciamoLotto"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  textSize(30);
  //vedere un elemento dopo l'altro dell'array
  //0---> max-1
  let ycoord=50;
  for(let i=0; i< collectionParole.length; i++){
    //(arrayNum[i]---> i-th element of array
    text(collectionParole[i], 20,ycoord);
    ycoord=ycoord+50;
  }
  noFill();
  //ellissi con dimensioni diverse
  for(let i=0; i<arrayNum.length;i++){
    //dato il valore dell'arrayNum[i] creiamo un ellisse con dimensione basata su lui
    ellipse(50*i+50,300, arrayNum[i], arrayNum[i]);
  }
}
