window.onload = setup;
function setup() {
  //displaying time at bottom of canvas
  let bottomCanvas = document.getElementById("bottomBlueBar");

  let currentDate = new Date();
  bottomCanvas.textContent = currentDate;
  bottomCanvas.classList.add("dsFont");
  setupDrawing();
  //grabbing the cat button
  const catBtn = document.getElementById("neko");

  var defaultCat = "media/cat-default.png";
  var hoverCat = "media/cat-hover.png";
  var clickCat = "media/cat-pressed.png";
  var source = catBtn.src;

  //functions for the event listeners

  function onMouseOver() {
    console.log("hovering...");
    catBtn.src = hoverCat;
  }

  //fetching image

  /* let catFrameDiv = document.createElement("div")
    let catFrame = document.createElement("img")

    //giving classes to elements
    catFrame.classList.add('cat-frame')
    catFrameDiv.classList.add('cat-frame-div')
    //giving image source
    catFrame.src = 'media/cat-frame.gif'
    
    //appending elements
    
    const displayContainer = document.getElementById("displayContainer")
    
    displayContainer.appendChild(catFrameDiv)
    catFrameDiv.appendChild(catFrame) */

  const catFrameDiv = document.querySelector(".cat-frame-div");
  //Mouse click

  function onMouseDown() {
    console.log("meow");

    //creating gif
    const catImage = document.createElement("img");
    catImage.classList.add("cat-image");
    //giving image source
    catImage.src = "https://cataas.com/cat/gif?" + Date.now();
    //appending
    catFrameDiv.appendChild(catImage);

    //switching buttons
    catBtn.src = clickCat;
  }
  function onMouseUp() {
    console.log("mouse has been released");
    catBtn.src = hoverCat;
  }
  function onMouseOut() {
    console.log("mouse is out");
    catBtn.src = defaultCat;
  }
  function onClick() {
    console.log("clicked");
  }

  //adding event listeners to actions
  catBtn.addEventListener("mouseover", onMouseOver);
  catBtn.addEventListener("mousedown", onMouseDown);
  catBtn.addEventListener("mouseup", onMouseUp);
  catBtn.addEventListener("mouseout", onMouseOut);
  catBtn.addEventListener("click", onClick);

  let pressMe = document.getElementById("instruction");
  let time = 0;
  let amplitude = 20;
  let speed = 0.01;

  function pressMeMove() {
    time += speed;

    let ypos = Math.sin(time) * amplitude;

    pressMe.style.transform = `translateY(${ypos}px)`;

    requestAnimationFrame(pressMeMove);
  }

  requestAnimationFrame(pressMeMove);
}

//2nd script paste

let erasing = false;
let brushSize = 0.5;
let eraserSize = 24;
let brushColor = "black";

function setupDrawing() {
  //getting some measurements
  let canvasContainer = document.getElementById("canvasScroll");
  //getting width of parent div
  let canvasWidth = canvasContainer.offsetWidth;
  let canvasHeight = canvasContainer.offsetHeight;
  //creating canvas
  let canvas = createCanvas(canvasWidth - 15, canvasHeight);
  canvas.parent("canvasContainer");
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    if (erasing) {
      stroke(255);
      strokeWeight(eraserSize);
    } else {
      stroke(brushColor);
      strokeWeight(brushSize);
    }

    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
//eraser tool event listener
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    erasing = !erasing;
    event.preventDefault();
  }
  //increasing brush size
  if (event.key === "]") {
    brushSize += 4;
  }
  //decreasing brush size
  if (event.key === "[") {
    brushSize = Math.max(0.5, brushSize - 4);
  }
});

let colors = [
  "#ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#0000ff",
  "#8b00ff",
  "#ff69b4",
  "#ffffff",
  "#000000",
];

let brushSizes = [0.5, 8, 12, 16, 24];

//fetching div for the color palette

let palette = document.getElementById("colorPalette");
//applying function to each items in array of colors

colors.forEach(function (color) {
  let box = document.createElement("div");
  box.classList.add("colorBox");

  box.style.backgroundColor = color;

  box.addEventListener("click", function () {
    brushColor = color;
  });

  palette.appendChild(box);
});

//fetching brush palette div
let brushPalette = document.getElementById("brushPalette");
//creating brushes seciton
brushSizes.forEach(function (size) {
  let option = document.createElement("div");
  option.classList.add("brushOption");

  let line = document.createElement("span");
  line.style.height = size + "px";

  option.appendChild(line);
  brushPalette.appendChild(option);

  option.addEventListener("click", function () {
    brushSize = size;

    document.querySelectorAll(".brushOption").forEach(function (item) {
      item.classList.remove("active");
    });

    option.classList.add("active");
  });

  //clearing button
  let smile = document.getElementById("smile");

  function mousePressed() {
    clear();
    background(255);
  }

  smile.addEventListener("click", mousePressed);
});
//return to menu text on canvas
let escText = document.createElement("p");

escText.textContent = "Press 'Q' to return to home screen";
escText.classList.add("dsFont");

//positiona and style
escText.style.position = "absolute";
escText.style.top = "20px";
escText.style.right = "20px";
escText.style.margin = "0";
escText.style.color = "white";
escText.style.fontSize = "28px";

document.body.appendChild(escText);

//redirect
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    window.location.href = "index.html"; // change to your home page
  }
});
