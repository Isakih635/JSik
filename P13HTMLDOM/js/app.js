// Reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
// TAKE textField0 and change it to "Ben"
textField0.innerHTML = getRandomInt(20);

// Reference "header5" and assign it to the variable called "headerText5"
const headerText5 = document.getElementById("header5");
// TAKE headerText5 and change it to "THIS IS MA WEBSITE"
headerText5.innerHTML = "THIS IS MA WEBSITE";
// TAKE headerText5, access its style, access its color & change it.
headerText5.style.color = "pink";


function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

function average(firstNumber, secondNumber) {
  let sumOfNumbers = firstNumber + secondNumber;
  return sumOfNumbers / 2;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
