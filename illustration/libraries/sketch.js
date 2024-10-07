let angle = 0;
let meditationColors; 
let colorLerpAmt = 0; // To track the amount of interpolation between colors
let currentColorIndex = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  meditationColors = [
    color("#A8C170"),
    color("#808080"),
    color("#8CA28D")
  ];
}

function draw() {
  background("#79A7BE"); // Clear the background each frame
  // Calculate mouse speed
  let mouseSpeed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);

  // Interpolate between colors based on mouse speed
  colorLerpAmt += mouseSpeed / 500; // controlling the transition speed
  if (colorLerpAmt >= 1) {
    colorLerpAmt = 0;
    currentColorIndex = (currentColorIndex + 1) % meditationColors.length; // Cycle through colors
  }

  let nextColorIndex = (currentColorIndex + 1) % meditationColors.length;
  let bgColor = lerpColor(meditationColors[currentColorIndex], meditationColors[nextColorIndex], colorLerpAmt);

  //ground
  fill("#B7925E");
  rect(300, 600, 600, 100, 0);

  // Draw meditation circle with interpolated color
  fill(bgColor);
  circle(width / 2, height / 2, 500); // Background circle

  // Static outer circle
  push();
  noFill();
  stroke('#B7925E');
  strokeWeight(10);
  circle(width / 2, height / 2, 400); 
  pop();

  push();
  noFill();
  stroke('#B7925E');
  strokeWeight(10);
  circle(width/ 2, height/2 , 500); 
  pop();
 

  // Rotation and drawing shapes around the center
  push();
  translate(width / 2, height / 2);
  rotate(angle);

  


  // Draw rotating rectangles
  fill("#B7925E");
  for (let i = 0; i < 13; i++) {
    rect(0, 100, 5, 200, 20);
    rotate(360 / 12);
  }

  // Draw rotating small circles
  fill("#A8C170");
  for (let i = 0; i < 13; i++) {
    circle(50, 50, 10);
    rotate(360 / 12);
  }
  // Draw rotating small circles
  fill("#8CA28D");
  for (let i = 0; i < 13; i++) {
    circle(80, 80, 10);
    rotate(360 / 12);
  }
  fill("#808080");
  for (let i = 0; i < 13; i++) {
    circle(100, 100, 10);
    rotate(360 / 12);
  }

  
  if (mouseSpeed >15) {
    fill("#D8CFC6");
    textFont('Georgia');
    textSize(20);
    textAlign(CENTER)
    text("Slow Down",0, 100, 300, 300); // show "Slow Down" message
  
  }
  if (mouseSpeed == 0) {
     //one
    fill("#B7925E");
    for (let i = 0; i < 13; i++) {
      rect(100, 100, 2, 260, 20);
      rotate(360 / 12);
    }
    angle += 0.4; // Slow rotation when the mouse is not moving
  } else {
    //one
    fill("#A8C170");
    for (let i = 0; i < 13; i++) {
      rect(100, 100, 2, 260, 20);
      rotate(360 / 12);
    }

    angle += mouseSpeed / 10; // Faster rotation based on speed
    
  }
  pop();


 
  
//bike body straight
  fill("#B7925E");
  rect(540, 300, 500, 50, 20);
//bike body angle
  push()
  fill("#B7925E");
  rotate(-45);
  rect(300, 430, 620, 50, 20);
  
//title
  translate(40, 355);
  fill("#EBD2D6");
  textFont('Georgia');
  textSize(25);
  text("How Fast Are You Going?",width/2, height/2.8, width, 300); // Display "Slow Down" message
  pop()
  

  translate(300, 300);
  // smaller circles at the center
   fill("#A8C170");
   circle(0, 0, 40);
   fill("#808080");
   circle(0, 0, 30);
   fill("#D8CFC6");
   circle(0, 0, 20);

  
  console.log(mouseSpeed); 
}
