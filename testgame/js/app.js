console.log('Scriptet laddades!');

// Alternativ för spelet
const choices = ['sten', 'sax', 'påse'];

// Funktion för att generera datorns val
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
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

// Funktion som körs när användaren gör ett val
function play(userChoice) {
  console.log(`Valt av användare: ${userChoice}`); // Debug-utskrift
  const computerChoice = getComputerChoice();
  console.log(`Valt av dator: ${computerChoice}`); // Debug-utskrift

  document.getElementById('user-choice').textContent = `Du valde: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Datorn valde: ${computerChoice}`;
  document.getElementById('outcome').textContent = determineWinner(userChoice, computerChoice);
}
