"use strict";
let x = 80;
let y = 100;
let width;
let height;
let r = 255;
let g = 0;
let b = 0;

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  drawElipse1();
  drawElipse2();
  drawElipse3();
}

function drawElipse1() {
  push();
  width = 10;
  height = 10;
  fill(r, g, b);
  noStroke();
  ellipse(x + 75, y + 10, width, height);
  pop();
}
function drawElipse2() {
  push();
  width = 60;
  height = 60;
  fill(r, g, b);
  noStroke();
  ellipse(x + 140, y + 30, width, height);
  pop();
}

function drawElipse3() {
  push();
  width = 150;
  height = 150;
  fill(r, g, b);
  noStroke();
  ellipse(x + 280, y + 60, width, height);
  pop();
}
