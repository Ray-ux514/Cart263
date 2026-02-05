window.onload = function () {
  console.log("timers running");

  let shades = [
    "#7fb3d5",
    "#76d7c4",
    "#f7dc6f",
    "#eb984e",
    "#cb4335",
    "#8e44ad",
    "#2e4053",
    "#e5e7e9",
  ];

  /*   for (let i = 0; i < 24; i++) {
    //for each x - make a column of changing y's
    for (let j = 0; j < 24; j++) {
      //create a grid cell with a div
      let parent = document.getElementById("parent");
      let d = document.createElement("div");
      d.classList.add("grid-cell");
      parent.appendChild(d);

      d.style.left = (i + 1) * 25 + "px";
      d.style.top = (j + 1) * 25 + "px";
    }
  } */

  let gridCells = document.querySelectorAll(".grid-cell");

  //let divisor = 2;
  //let currentShadeindex = 0;

  //for (let i = 0; i < gridCells.length; i++) {
  //if (i % divisor === 0) {
  //  gridCells[i].style.background = shades[0];
  // } else {
  //   gridCells[i].style.background = shades[1];
  // }
  //}
  // if (i % 24 === 0) {
  //   if (currentShadeindex === 0) {
  //
  //      currentShadeindex = 1;
  //   } else {
  //currentShadeindex = 0;
  //    }
  //    gridCells[i].style.background = shades[currentShadeindex];
  // }

  //let changingDivisor = 0;
  // let ref = window.setInterval(animate_rows, 500);
  //window.setInterval(animate_rows, 100);
  //function animate_rows() {
  // changingDivisor += 1;
  // console.log(changingDivisor);
  // drawGrid();
  // if (changingDivisor === 12) {
  //   clearInterval(ref);
  //  }
  // }

  //function drawGrid() {
  //  for (let index = 0; index < gridCells.length; index++) {
  //    //check what the remainder is ...
  //    if (index % changingDivisor === 0) {
  //      gridCells[index].style.background = shades[0];
  //    } else if (index % changingDivisor === 1) {
  //     gridCells[index].style.background = shades[1];
  //    } else if (index % changingDivisor === 2) {
  //     gridCells[index].style.background = shades[2];
  //    } else if (index % changingDivisor === 3) {
  //       gridCells[index].style.background = shades[3];
  //    } else if (index % changingDivisor === 4) {
  //      gridCells[index].style.background = shades[4];
  //    } else if (index % changingDivisor === 5) {
  //   gridCells[index].style.background = shades[5];
  //  } else if (index % changingDivisor === 6) {
  //     gridCells[index].style.background = shades[6];
  //    } else if (index % changingDivisor === 7) {
  //     gridCells[index].style.background = shades[7];
  //     }
  //   }
  // }
  /*
  window.setTimeout(changingTimeout, dynamicdelay);

  function changingTimeout() {
    let sp = document.createElement("span");
    sp.textContent = "adding Text";
    document.querySelector("#parent").appendChild(sp);
    dynamicdelay -= 10;
    console.log(dynamicdelay);
    window.setTimeout(changingTimeout, dynamicdelay);
  } */

  let particleDiv = document.createElement("div");
  particleDiv.id = "particle";
  document.querySelector("#parent").appendChild(particleDiv);
  particleDiv.style.left = "25px";
  particleDiv.style.top = "25px";

  window.requestAnimationFrame(animate);

  let speedX = 2;
  let speedY = 3;

  function animate() {
    let p = document.getElementById("particle");
    p.style.left = parseInt(p.style.left) + speedX + "px";
    p.style.top = parseInt(p.style.top) + speedY + "px";
    window.requestAnimationFrame(animate);
  }
};
