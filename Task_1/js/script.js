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
}

function draw() {
  //elipse 1
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x + 75, y + 10, 10, 10);
  pop();

  //elipse 2
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x + 140, y + 30, 60, 60);
  pop();

  //elipse 3
  push();
  fill(r, g, b);
  noStroke();
  ellipse(x + 280, y + 60, 150, 150);
  pop();
}
