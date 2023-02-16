// const input = document.querySelector(".waterInput");
// let waterValue = "";
// const log = document.querySelector(".waterDone");

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

let plus = document.getElementById("plus");
let input = document.getElementById("input");
let minus = document.getElementById("minus");
let inputValue = input.value;

const log = document.querySelector(".waterDone");

//
let error = document.getElementById("invalidError");
// let x = document.getElementById("minus").Disabled;

// create the function for increasing button (plus)

plus.addEventListener("click", function () {
  inputValue++;
  input.value = inputValue;

  if (inputValue > 10 || inputValue < 1) {
    error.innerHTML = "Limit Over";
  } else {
    error.innerHTML = "";
  }
  updateValue();
});

// create the function for decreasing button (minus)
minus.addEventListener("click", function () {
  inputValue--;
  input.value = inputValue;

  if (inputValue > 10 || inputValue < 1) {
    error.innerHTML = "Limit Under";
  } else {
    error.innerHTML = "";
  }
  updateValue();
});

const inputH3 = document.querySelector(".waterInput");
let waterValue = inputValue;
const logH3 = document.querySelector(".waterDone");

inputH3.addEventListener("input", updateValue);

function updateValue(e) {
  logH3.innerHTML = inputValue;
}

// function myFunctionDisable() {
//   let x = document.getElementById("minus").disabled;
//   if (inputValue <= -1) {
//     document.getElementById("demo").innerHTML = x;
//   }
// }
