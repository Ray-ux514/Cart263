"use strict";

// Canvas
const CANVAS_W = 500;
const CANVAS_H = 500;

// Text settings
const TEXT_STR = "test";
const TEXT_FILL = 255;
const TEXT_SIZE = 28;

const CENTER_X = CANVAS_W / 7;
const CENTER_Y = CANVAS_H / 7;

const OFFSET_STEP = 20;

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  textAlign(CENTER, CENTER);
  textSize(TEXT_SIZE);
  fill(TEXT_FILL);
}

function draw() {
  background(0);

  text(TEXT_STR, CENTER_X, CENTER_Y);

  for (let i = 0; i <= 9; i++) {
    const xPos = OFFSET_STEP * i;
    const yPos = CENTER_Y;
    text(i, xPos, yPos);
  }

  for (let i = 15; i >= 1; i--) {
    const xPos = CENTER_X;
    const yPos = OFFSET_STEP * i;
    text(i, xPos, yPos);
  }
}
// idk i tired
