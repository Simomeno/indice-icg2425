let button;
let elem;
let dice= 1;
let numbers=[1,2,5,79];
let colors=["red", "green", "pink", "blue", "orange", "yellow"];

function setup() {
  elem =createElement("h2", "Keep rolling")
  elem.position(0,0);
  createCanvas(400, 400);
  button= createButton("roll the dice");
  button.position(200,200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(2);
  //corrispondere
  //1-->rosso
  //2-->verde
  //3-->rosa
  //4-->blu
  //5-->arancione
  //6-->giallo
  let color=colors[dice-1];
  fill(color);
  textSize(50);
  text("dice value "+ dice, 5,300);
}

function rollDice(){
  dice=random(1,6);
  //voglio solo numeri interi
  dice=floor(dice);
}
