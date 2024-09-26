// Varibles

let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let gameResultText = document.getElementById("gameResultText");
let playerWinsText= document.getElementById("playerWinsText");
let computerWinsText=document.getElementById("computerWinsText");
let drawsText=document.getElementById("drawsText");

//Data
let playerRoll = 0;
let computerRoll = 0;
let playerWins=0;
let computerWins=0;
let draws = 0;


//Processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult ();
  showComputerRollResult ();
  determineWinner();
  updateStats();
});

//Controllers
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  computerRoll = Math.floor(Math.random() * 6) + 1;
}
  function getRandomNumberOneToSixForComputer() {
    playerRoll = Math.floor(Math.random() *6) +1;
    computerRoll = Math.floor(Math.random() * 6) + 1;
}

//Views
function showPlayerRollResult() {
  playerRollText.innerText = "Player Roll: " +playerRoll;
}

function showComputerRollResult() {
  computerRollText.innerText = "Computer Roll: " +computerRoll;
}

// Determine Winner
function determineWinner() {
  if (playerRoll > computerRoll) {
    gameResultText.innerText = "Result: You win!";
    playerWins++;
  } else if (playerRoll < computerRoll) {
    gameResultText.innerText = "Result: Computer wins!";

  } else {
    gameResultText.innerText = "Result: It's a tie!";
  }
}

// Uppdatera statistik
function updateStats() {
  playerWinsText.innerText= "Player Wins:" +playerWins;
  computerWinsText.innerText = "Computer Wins: " + computerWins;
  drawsText.innerText = "Draws: " + draws;

  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC"

}
