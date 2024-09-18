// Initialiserar score
let score = 0;

// Hämta element från DOM
const textElement = document.getElementById("text0");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");

// Funktion för att uppdatera texten med aktuell score
function updateScore() {
  textElement.innerHTML = `Score: ${score}`;
}

// Funktion för att öka poängen
function increaseBy(inputNumber) {
  score += inputNumber;
  updateScore(); // Uppdatera texten med nya poängen
}

// Funktion för att minska poängen
function decreaseBy(inputNumber) {
  score -= inputNumber;
  updateScore(); // Uppdatera texten med nya poängen
}

// Lägg till händelselyssnare för att öka och minska poängen
increaseButton.addEventListener('click', function() {
  increaseBy(1); // Ökar poängen med 1
});

decreaseButton.addEventListener('click', function() {
  decreaseBy(1); // Minskar poängen med 1
});

