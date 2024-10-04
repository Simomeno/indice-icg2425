let xoff = 0;
let yoff = 0;
let inc = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  translate(0, height/2);
  rotateX(PI/2);

  for (let y = -height/2; y < height/2; y += 10) {
    beginShape(TRIANGLE_STRIP);
    for (let x = -width/2; x < width/2; x += 10) {
      let yoff = y * inc;
      let xoff = x * inc;
      let n = noise(xoff, yoff);
      let h = map(n, 0, 1, -50, 50);
      vertex(x, y, h);
      yoff += inc;
      n = noise(xoff, yoff);
      h = map(n, 0, 1, -50, 50);
      vertex(x, y+10, h);
    }
    endShape();
  }

  xoff += inc;
  yoff += inc;
}