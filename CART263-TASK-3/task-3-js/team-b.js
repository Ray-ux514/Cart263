setup_B();
/** THEME: CHAOS  */
function setup_B() {
  console.log("in b");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_B`, "ani_canvB", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamB");
  }

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamB");
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */
  function aniC(parentCanvas) {
    console.log("in aniC - TEAM H simple key event");

    parentCanvas.style.backgroundColor = "rgb(20, 20, 30)";
    parentCanvas.style.position = "relative";
    parentCanvas.innerHTML = "";

    const DOT_SIZE = 14;
    const DOT_GAP = 2;
    const DOT_COLOR = "rgb(40, 140, 255)"; // blue

    let groups = [];

    // timer state
    let pulse = 0;
    let pulseDir = 1;

    // Timer: pulse all dots
    const timerRef = setInterval(function () {
      pulse += pulseDir * 0.03;
      if (pulse > 1) pulseDir = -1;
      if (pulse < 0) pulseDir = 1;

      const allDots = parentCanvas.querySelectorAll(".TEAM_H_dot");
      for (let i = 0; i < allDots.length; i++) {
        allDots[i].style.opacity = String(0.6 + pulse * 0.4);
      }
    }, 60);

    windowKeyDownRef = function (e) {
      // adds a new dot cluster
      if (e.code === "Space") {
        e.preventDefault();

        const group = createDotGroup();
        parentCanvas.appendChild(group);
        groups.push(group);
      }

      // BACKSPACE = remove last dot cluster
      else if (e.code === "Backspace") {
        e.preventDefault();

        if (groups.length > 0) {
          const last = groups.pop();
          last.remove();
        }
      }
    };

    windowKeyUpRef = function (e) {};

    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);

    // builds a "shape made of circles"
    function createDotGroup() {
      // group wrapper
      const group = document.createElement("div");
      group.style.position = "absolute";

      // position inside canvas
      const box = parentCanvas.getBoundingClientRect();
      const x = Math.floor(Math.random() * (box.width - 80)) + 10;
      const y = Math.floor(Math.random() * (box.height - 80)) + 10;

      group.style.left = x + "px";
      group.style.top = y + "px";

      const patternType = Math.floor(Math.random() * 3);

      //grid
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          let showDot = true;

          // Pattern 0: plus sign
          if (patternType === 0) {
            showDot = r === 2 || c === 2;
          }

          // Pattern 1: X
          if (patternType === 1) {
            showDot = r === c || r + c === 4;
          }

          // Pattern 2: sqaure shape
          if (patternType === 2) {
            showDot = r === 0 || r === 4 || c === 0 || c === 4;
          }

          if (showDot) {
            const dot = document.createElement("div");
            dot.classList.add("TEAM_H_dot");

            dot.style.position = "absolute";
            dot.style.width = DOT_SIZE + "px";
            dot.style.height = DOT_SIZE + "px";
            dot.style.borderRadius = "80%";
            dot.style.backgroundColor = DOT_COLOR;

            dot.style.left = c * (DOT_SIZE + DOT_GAP) + "px";
            dot.style.top = r * (DOT_SIZE + DOT_GAP) + "px";

            group.appendChild(dot);
          }
        }
      }

      return group;
    }
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamB");
  }
}
