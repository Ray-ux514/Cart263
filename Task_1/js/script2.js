"use strict";
let x = 80;
let y = 100;
let colour = "#FF0000";

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  drawElipse1();
  drawElipse2();
  drawElipse3();
}

function drawElipse1() {
  push();
  fill(colour);
  noStroke();
  ellipse(x + 75, y + 10, 10, 10);
  pop();
}
function drawElipse2() {
  push();
  fill(colour);
  noStroke();
  ellipse(x + 140, y + 30, 60, 60);
  pop();
}

function drawElipse3() {
  push();
  fill(colour);
  noStroke();
  ellipse(x + 280, y + 60, 150, 150);
  pop();
}
