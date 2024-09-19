const textField0 = document.getElementById("textField0");
textField0.innerHTML = getRandomInt(20);
let score = 
const headerText5 = document.getElementById("headerText5");
headerText5.style.color ="pink";


function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
function average (firstNumber, secondNumber) {
  let sumOfNumbers = firstNumber + secondNumber;
  return sumOfNumbers / 2;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

