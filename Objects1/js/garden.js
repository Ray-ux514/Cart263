"use strict";

let garden; // global

window.onload = function () {
  garden = {
    flowers: [],
    numFlowers: 20,
    grass: {
      grassColor: { r: 120, g: 180, b: 120 },
      grassDiv: document.createElement("div"),
    },
    sky: {
      skyColor: { r: 83, g: 154, b: 240 },
      skyDiv: document.createElement("div"),
    },
    sun: {
      sunColor: { r: 240, g: 206, b: 83 },
      sunDiv: document.createElement("div"),
    },

    numDogs: 10,
    dogs: [],
  };

  createAndRenderTheGarden(); // call AFTER garden exists
};

function createAndRenderTheGarden() {
  /* note how we use dot notation....*/
  //sky
  garden.sky.skyDiv.classList.add("sky");
  garden.sky.skyDiv.style.background = `rgb(
      ${garden.sky.skyColor.r},
      ${garden.sky.skyColor.g},
      ${garden.sky.skyColor.b}
      )`;
  document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

  //sun - IN the sky
  garden.sun.sunDiv.classList.add("sun");
  garden.sun.sunDiv.style.background = `rgb(
      ${garden.sun.sunColor.r},
      ${garden.sun.sunColor.g},
      ${garden.sun.sunColor.b}
      )`;
  //append to the SKY div
  document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);

  //grass
  garden.grass.grassDiv.classList.add("grass");
  garden.grass.grassDiv.style.background = `rgb(
      ${garden.grass.grassColor.r},
      ${garden.grass.grassColor.g},
      ${garden.grass.grassColor.b}
      )`;
  document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
  // add numFlowers at one time
  for (let i = 0; i < garden.numFlowers; i++) {
    garden.flowers.push(createFlower());
  }

  for (let i = 0; i < garden.flowers.length; i++) {
    renderFlower(garden.flowers[i]);
  }
}
// Create the correct number of dogs and put them in our array
for (let i = 0; i < garden.numDogs; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * 100;
  let dog = new Dog(x, y, 15, 15);
  garden.dogs.push(dog);
}

function renderAnimal() {
  // Go through all the animals and move, wrap, and display them
  for (let i = 0; i < garden.dogs.length; i++) {
    let dog = garden.dogs[i];
    dog.renderAnimal();
  }
}

function updateGarden() {
  // Go through all the animals and move, wrap, and display them
  for (let i = 0; i < garden.dogs.length; i++) {
    let dog = garden.dogs[i];
    dog.move();
    dog.wrap();
  }
  window.requestAnimationFrame(updateGarden);
}

/* render the sun, sky and grass*/
createAndRenderTheGarden();
renderAnimal();
window.requestAnimationFrame(updateGarden);
