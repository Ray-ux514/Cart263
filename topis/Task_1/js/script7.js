"use strict";

const SHAPE_SIZE = 50;

// Canvas
const CANVAS_W = 500;
const CANVAS_H = 500;
// Outline settings

let isCircle = true;
let gridColor;

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);

  gridColor = getRandomColor();
}

function draw() {
  background(0);

  fill(gridColor);

  const step = SHAPE_SIZE;
  const start = SHAPE_SIZE / 2;

  for (let y = start; y <= height - start; y += step) {
    for (let x = start; x <= width - start; x += step) {
      if (isCircle) {
        ellipse(x, y, SHAPE_SIZE, SHAPE_SIZE);
      } else {
        rectMode(CENTER);
        rect(x, y, SHAPE_SIZE, SHAPE_SIZE);
      }
    }
  }
}

function getRandomColor() {
  return color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key === " ") {
    gridColor = getRandomColor();
  }
}
function mousePressed() {
  isCircle = !isCircle;
}
