//window.onload = setup;

/** function setup */
//function setup() {
//console.log("we are a go!");
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */

//const allParagraphs = document.querySelectorAll("p");
//console.log(allParagraphs);
// Output: NodeList(#) [p, p, p, ...]

/*************************************** */
/* 2: only the first paragraph element */
//const firstParagraph = document.querySelector("p");
//console.log(firstParagraph);
// Output: <p>...</p>  (the first <p> element)

/*************************************** */
/* 3: all elements with the class inner-container */
//const innerContainers = document.querySelectorAll(".inner-container");
//console.log(innerContainers);
// Output: NodeList(#) [element.inner-container, element.inner-container, ...]

/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
//const imgContainer = document.querySelector(".img-container");
//const imgContainerImages = document.querySelectorAll(".img-container img");
//const lastImgInContainer = imgContainerImages[imgContainerImages.length - 1];

///console.log(lastImgInContainer);
// Output: <img ...> (the last <img> inside .img-container)

//const allH2s = document.querySelectorAll("h2");
//console.log(allH2s);
// Output: NodeList(#) [h2, h2, h2, ...]

/* 5(B) Select length of list in 5(A) */
//const h2Count = allH2s.length;
//console.log(h2Count);
// Output: #  (number of <h2> elements)

/* 5(C) Select the text content of the first element in the list from 5(A) */
//const firstH2Text = allH2s[0].textContent;
//console.log(firstH2Text);
// Output: "..." (text inside the first <h2>)

/* 6) Select the element with the id parent */
//const parentEl = document.querySelector("#parent");
//console.log(parentEl);
// Output: <... id="parent">...</...>

/*************************************** */
/*** END PART ONE ACCESS */

/*************************************** */

/***TASK2part2 */

//document.addEventListener("DOMContentLoaded", function () {
/* 1) Select the first paragraph element and replace its text */
//const yourName = "ray"; // change if needed
//const todaysDate = new Date().toLocaleDateString();

//const firstParagraph = document.querySelector("p"); // this is <p id="1">
//irstParagraph.textContent = `New text in paragraph one: text changed by ${yourName} on the following date: ${todaysDate}`;
//console.log(firstParagraph.textContent);
// Output: "New text in paragraph one: text changed by Ray on the following date: M/D/YYYY"

/* 2) Select all .content-container elements and change bg of first to orange, second to purple */
//const contentContainers = document.querySelectorAll(".content-container");
//contentContainers[0].style.backgroundColor = "orange";
//contentContainers[1].style.backgroundColor = "purple";

//console.log(contentContainers.length);
// Output: 8  ( there are 8 .content-container)

/* 3) Change src of the first image element on the page to seven.png */
//const firstImage = document.querySelector("img"); // first <img> is in header
//firstImage.setAttribute("src", "task-2-images/seven.png");

//console.log(firstImage.getAttribute("src"));
// Output: "task-2-images/seven.png"

/* 4) Select the third paragraph and replace content with an h2 TEST 123 */
// Your third paragraph is <p id="3">
//const thirdParagraph = document.getElementById("3");
//thirdParagraph.innerHTML = "<h2>TEST 123</h2>";

//console.log(thirdParagraph.innerHTML);
// Output: "<h2>TEST 123</h2>"

/* 5) Select the fourth paragraph and add an h2 TEST 123 to existing content */
// Your fourth paragraph is <p id="4">
//const fourthParagraph = document.getElementById("4");

//const h2Added = document.createElement("h2");
//h2Added.textContent = "TEST 123";
//fourthParagraph.appendChild(h2Added);

//console.log(fourthParagraph.querySelector("h2").textContent);
// Output: "TEST 123"

/* 6) Select the fifth paragraph and add an img one.png, and add class newStyle */
// Your fifth paragraph is <p id="5">
//const fifthParagraph = document.getElementById("5");

//const imgToAdd = document.createElement("img");
//imgToAdd.setAttribute("src", "task-2-images/one.png");
//fifthParagraph.appendChild(imgToAdd);

//fifthParagraph.classList.add("newStyle");

//console.log(fifthParagraph.classList.contains("newStyle"));
// Output: true
//console.log(fifthParagraph.querySelector("img").getAttribute("src"));
// Output: "task-2-images/one.png"

/* 7) colors array + innerContainers variable + iterate over colors
          and assign background colors by matching index */
//let colors = ["red", "blue", "green", "orange"];
//let innerContainers = document.querySelectorAll(".inner-container");

// Use a loop (no arrays for innerContainers beyond NodeList)
// for (let i = 0; i < colors.length; i++) {
// innerContainers[i].style.backgroundColor = colors[i];
// }

// console.log(colors);
// Output: ["red","blue","green","orange"]
//console.log(innerContainers.length);
// Output: 8  (based on your HTML there are 8 .inner-container)
//});

/*************************************** */
document.addEventListener("DOMContentLoaded", function () {
  // Access all paragraph elements and store in allPTagsThree
  const allPTagsThree = document.querySelectorAll("p");
  console.log(allPTagsThree);
  // Output: NodeList(#) [p, p, p, ...]
  // Explanation: This is a list of ALL <p> tags currently on the page.

  // Create the required function
  function customCreateElement(parent) {
    // Create a new paragraph element
    const newP = document.createElement("p");

    // Set the text of this element
    newP.textContent = "using create Element";

    // Set background to green + text color to white
    newP.style.backgroundColor = "green";
    newP.style.color = "white";

    // Append the new paragraph to the parent element passed in
    parent.appendChild(newP);

    console.log("Added new paragraph to:", parent);
    // Output: "Added new paragraph to:" <p>...</p>
    // Explanation: Each time we call the function, a NEW paragraph is added inside that parent paragraph.
  }

  // Iterate through allPTagsThree and call customCreateElement() for each <p>
  let i = 0;
  while (i < allPTagsThree.length) {
    customCreateElement(allPTagsThree[i]);
    i++;
  }

  console.log("Total paragraphs targeted:", allPTagsThree.length);
  // Output: #  (number of <p> tags found)
  // Explanation: This tells you how many paragraphs were found and therefore how many got a new green child paragraph.
});

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */

/***EXPLANATION::
 *
 *
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */

//let allPTagsThree = document.querySelectorAll("p");

//function customCreatElement(parent) {
//body//
// let para = document.createElement("p");
// para.textContent = " using create Element";
// para.style.background = "green";
// para.style.color = "white";
//parent.appendChild(para);
//}

//for (let i = 0; i < allPTagsThree.length; i++) {
// customCreateElement(allPtagsThree[i]);
//}

//function customNewBoxCreate(parent) {
//body//
let newDiv = document.createElement("div");
newDiv.classList.add("testDiv");
parrent.appendChild(newDiv);

//return newDiv;
//}

/***EXPLANATION::
   *
   *

f

  /*************************************** */
/*** END PART THREE CREATE */
/*************************************** */
