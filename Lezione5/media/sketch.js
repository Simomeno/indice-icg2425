
let myImage;
let newImage;
function preload(){
myImage=loadImage("../../assets/images/opn-bk-pixabay.jpg");
newImage=loadImage("../../assets/images/artist-pixabay.png");

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(myImage,0,0,width,height);
  image(newImage, mouseX, mouseY,100,200);
}
