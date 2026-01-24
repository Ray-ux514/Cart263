"use strict";
const CANVAS_W = 500;
const CANVAS_H = 500;
// Column sizes
const COL_W = CANVAS_W / 3;

const R1_COLOR = { normal: "#0B3D91", hover: "#FFFFFF" }; // deep blue
const R2_COLOR = { normal: "#1E90FF", hover: "#FFFFFF" }; // dodger blue
const R3_COLOR = { normal: "#00BFFF", hover: "#FFFFFF" }; // deep sky blue

// Positions
const R1_X = 0;
const R2_X = COL_W;
const R3_X = COL_W * 2;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Rectangle 1
  const overR1 =
    mouseX >= R1_X && mouseX < R1_X + COL_W && mouseY >= 0 && mouseY <= height;
  fill(overR1 ? R1_COLOR.hover : R1_COLOR.normal);
  rect(R1_X, 0, COL_W, height);

  // Rectangle 2
  const overR2 =
    mouseX >= R2_X && mouseX < R2_X + COL_W && mouseY >= 0 && mouseY <= height;
  fill(overR2 ? R2_COLOR.hover : R2_COLOR.normal);
  rect(R2_X, 0, COL_W, height);

  // Rectangle 3
  const overR3 =
    mouseX >= R3_X && mouseX <= width && mouseY >= 0 && mouseY <= height;
  fill(overR3 ? R3_COLOR.hover : R3_COLOR.normal);
  rect(R3_X, 0, COL_W, height);
}
