const consoleEl = document.getElementById("console");
let floatOffset = 0;

//start animation
function animate() {
  floatOffset += 0.03;

  const floatY = Math.sin(floatOffset) * 15;

  const mouseX = window.mouseX || window.innerWidth / 2;
  const mouseY = window.mouseY || window.innerHeight / 2;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = mouseX - centerX;
  const offsetY = mouseY - centerY;

  const moveX = offsetX * 0.03;
  const moveY = offsetY * 0.03;

  consoleEl.style.transform = `
    translate(${moveX}px, ${moveY + floatY}px)
    `;

  requestAnimationFrame(animate);
}
//mouse tacker
document.addEventListener("mousemove", (e) => {
  window.mouseX = e.clientX;
  window.mouseY = e.clientY;
});

animate();
//redirect
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    console.log("The space key was pressed!");
    window.location.href = "drawme.html";
  }
});
