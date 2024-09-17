// Detta är en kommentar...
/*
Här är en beskrivning som går över flera rader...

console.log("Hej på Er!");
console.warn("Akta dig!");
console.info("Här kommer lite mer information");
console.error("Nu blev det fel!!!");

// Värde är inforationen datat som vi behöver för att kunna arbeta
console.log("Isabelle");

// Variabler...
// Lagra värden i namngivna variabler
// Name är variabel och Isabelle är värdet
// Isabelle är värdet som vi tilldelar variabeln name
let name ="Teo";

console.log(name);
console.log(name);

const birthYear =1992
const currentYear=2024
let ageOfTeo =currentYear - birthYear;


console.log(ageOfTeo);
*/
const readline = require("readline");

// Alternativ för spelet
const choices = ['sten', 'sax', 'påse'];

// Skapa input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion för att generera datorns val
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Funktion för att avgöra vinnaren
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Det är oavgjort!";
  }

  if ((userChoice === 'sten' && computerChoice === 'sax') ||
    (userChoice === 'sax' && computerChoice === 'påse') ||
    (userChoice === 'påse' && computerChoice === 'sten')) {
    return "Du vann!";
  } else {
    return "Datorn vann!";
  }
}

// Spelstart
function playGame() {
  rl.question("Välj sten, sax eller påse: ", function(userChoice) {
    userChoice = userChoice.toLowerCase();

    if (!choices.includes(userChoice)) {
      console.log("Ogiltigt val. Försök igen.");
      playGame();
    } else {
      const computerChoice = getComputerChoice();
      console.log(`Datorn valde: ${computerChoice}`);
      console.log(determineWinner(userChoice, computerChoice));
      rl.close();
    }
  });
}

playGame();






