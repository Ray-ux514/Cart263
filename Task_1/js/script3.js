"use strict";

// Rect 1 (size + color)
const R1_Size = 70;
const R1_colour = "#800080";

// Rect 2 (size + color)
const R2_Size = 60;
const R2_colour = "#800080";

// Rect 3 (size + color)
const R3_Size = 80;
const R3_colour = "#800080";

// Positions
let r1x = 60,
  r1y = 70;
let r2x = 220,
  r2y = 90;
let r3x = 360,
  r3y = 0;

// Rect 3 movement
const R3_SPEED = 3;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 0, 0);

  // Draw rect 1
  fill(R1_colour);
  noStroke();
  square(r1x, r1y, R1_Size);

  // Draw rect 2
  fill(R2_colour);
  noStroke();
  square(r2x, r2y, R2_Size);

  // Update rect 3 each frame
  r3y = r3y + R3_SPEED;

  // If rect 3 hits bottom, move it back to top
  if (r3y > height) {
    r3y = 0;
  }

  // Draw rect 3
  fill(R3_colour);
  noStroke();
  rect(r3x, r3y, R3_Size);
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    r1x = mouseX;
    r1y = mouseY;
  }
}

// Update rect 2 position when spacebar pressed
function keyPressed() {
  if (key === " ") {
    r2x = mouseX;
    r2y = mouseY;
  }
}
