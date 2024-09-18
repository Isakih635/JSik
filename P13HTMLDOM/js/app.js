// Deklarera variabeln 'score'
let score = 0;

// Funktion för att öka poängen med ett visst värde
function increaseBy(inputNumber) {
  score += inputNumber; // Ökar 'score' med värdet som skickas in
}

// Funktion för att uppdatera poängen på skärmen
function updateScore() {
  const textElement = document.getElementById("text"); // Hämta elementet med id="text"
  textElement.innerHTML = `Score: ${score}`; // Uppdatera dess textinnehåll med aktuell poäng
}

// Lyssna på klickhändelsen på knappen med id="button0"
const button = document.getElementById("button0");
button.addEventListener("click", function() {
  increaseBy(1);   // Öka poängen med 1 när knappen trycks
  updateScore();   // Uppdatera textfältet med den nya poängen
});
