window.onload = function () {
  console.log("keys");
  window.addEventListener("keydown", keyHandler);
  let speedX = 5;

  window.setTimeout(function (e) {
    let parent = document.querySelector("#parent");
    parent.innerHTML += "New text";
  }, 1000);

  window.setInterval(function (e) {
    let parent = document.querySelector("#parent");
    parent.innerHTML += "New text interval";
  }, 1000);

  function keyHandler(event) {
    if (event.key === "ArrowRight") {
      document.querySelector("#boxA").style.left =
        parseInt(document.querySelector("#boxA").style.left) + speedX + "px";
    }
    if (event.key === "ArrowLeft") {
      document.querySelector("#boxA").style.left =
        parseInt(document.querySelector("#boxA").style.left) + speedX + "px";
    }
    if (event.code === "Space") {
      document.querySelector("#boxB").style.background = "orange";
    } else {
      event.key == "9";
      document.querySelector("#boxB").style.background = "blue";
    }
    // if (event.key === "ArrowUp") {
    // document.querySelector("#boxA").style.
    // }
    //else {
    //   console.log(event);
    //   document.querySelector("#textContainer").textContent += `${event.key}`;
    // }
  }
};
