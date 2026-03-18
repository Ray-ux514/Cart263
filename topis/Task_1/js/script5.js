"use strict";

// Counter
let counter = 0;

// Square colors
const ORANGE_NORMAL = "#FFA500";
const ORANGE_HOVER = "#FFBF40";

const squareObj = {
  x: 60,
  y: 60,
  w: 120,
  h: 120,
  color: {
    normal: ORANGE_NORMAL,
    hover: ORANGE_HOVER,
  },
};

let radius = 20;
let ellipseAlpha = 20;

const RADIUS_STEP = 12;
const ALPHA_STEP = 20;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(0);

  // Draw the square
  displaySquare();

  // Only draw circles if counter is 1..10
  if (counter >= 1 && counter <= 10) {
    const cx = width / 2;
    const cy = height / 2;

    let i = 0;
    let currentRadius = radius;
    let currentAlpha = ellipseAlpha;

    // SINGLE while loop
    while (i < counter) {
      fill(255, currentAlpha);
      ellipse(cx, cy, currentRadius * 2, currentRadius * 2);

      currentRadius += RADIUS_STEP;
      currentAlpha += ALPHA_STEP;
      i++;
    }
  }
}

// Renders the orange square
function displaySquare() {
  const overSquare = checkCollisionWithSquare();

  if (overSquare) {
    fill(squareObj.color.hover);
  } else {
    fill(squareObj.color.normal);
  }

  rect(squareObj.x, squareObj.y, squareObj.w, squareObj.h);
}

function checkCollisionWithSquare() {
  const insideX = mouseX >= squareObj.x && mouseX <= squareObj.x + squareObj.w;
  const insideY = mouseY >= squareObj.y && mouseY <= squareObj.y + squareObj.h;
  return insideX && insideY;
}

function mousePressed() {
  if (checkCollisionWithSquare()) {
    counter += 1;
  }
}
