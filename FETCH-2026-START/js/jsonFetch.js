//window.onload = goApp;

//async function goApp(){
//console.log("hello fetch")

//}

window.onload = goFetch;
async function goFetch() {
  try {
    let response = await fetch("./files/tests/json");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
