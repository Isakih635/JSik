// Function to multiply a number by itself
function multiplyByItself(number) {
  return number * number;
}

// Function to calculate the average of two numbers
function averageOfTwoNumbers(num1, num2) {
  return (num1 + num2) / 2;
}

// Function to create a welcome message from two strings
function welcomeMessage(firstName, lastName) {
  return `Welcome ${firstName} ${lastName}!`;
}

// Function to return a random number from 0 to 2
function randomNumber() {
  return Math.floor(Math.random() * 3); // Random number between 0 and 2
}

// Function to return a letter based on the input number (0 -> A, 1 -> B, 2 -> C)
function numberToLetter(num) {
  const letters = ['A', 'B', 'C'];
  return letters[num] || 'Invalid Input';
}

// Function to compare two numbers and return a result
function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return 'Both numbers are equal!';
  } else if (num1 > num2) {
    return 'First number is greater!';
  } else {
    return 'Second number is greater!';
  }
}

// Test cases
console.log(multiplyByItself(4));         // Output: 16
console.log(averageOfTwoNumbers(2, 6));   // Output: 4
console.log(welcomeMessage('Ben', 'Ting')); // Output: Welcome Ben Ting!

console.log(randomNumber());              // Output: Random number between 0 and 2
console.log(numberToLetter(0));           // Output: A
console.log(numberToLetter(1));           // Output: B
console.log(numberToLetter(2));           // Output: C
console.log(compareNumbers(5, 5));        // Output: Both numbers are equal!
console.log(compareNumbers(8, 3));        // Output: First number is greater!
console.log(compareNumbers(1, 4));        // Output: Second number is greater!
