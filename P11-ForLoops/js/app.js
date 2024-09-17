// Solution 1
function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4));

// function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }
// console.log(add(5, 20));

function average(firstNumber, secondNumber) {
  let sumOfNumbers = firstNumber + secondNumber;
  return sumOfNumbers / 2;
}
console.log(average(2, 6));

function welcome(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  return greeting;
}
console.log(welcome("John", "Doe"));
console.log(welcome("Jane", "Yo"));

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
console.log(getRandomInt());

function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  }
  else if (number === 1) {
    return "B";
  }
  else if (number === 2) {
    return "C";
  }
  else {
    return "Invalid Number";
  }
}
console.log(convertNumbersToLetters(0));
console.log(convertNumbersToLetters(1));
console.log(convertNumbersToLetters(2));
console.log(convertNumbersToLetters(4432423));

let score = 0;

function evaluateResult(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return "Numbers are equal!";
  }
  else if (firstNumber > secondNumber) {
    score++;
    return "First number is greater than second number!";
  }
  else if (secondNumber > firstNumber) {
    score--;
    return "Second number is greater than first number!";
  }
}

console.log(evaluateResult(3124233331, 4123412));
console.log(score);
