let colors = ["red", "blue", "yellow", "purple"]

let angle = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  translate(width/2, height/2);
  
  rotate(angle);
  // fill(random(colors));
  fill("green");
  rect(0, 0, 200);
  
  fill("red");
  stroke("blue");
  ellipse(0, 0, 200);
  
  angle = angle + 1;
  

}

// Basics
//// setup() vs. draw()
//// Drawing 2D primitives
//// fill() and stroke()
//// Randomness
//// System variables
//// Overriding default properties
//// translate()