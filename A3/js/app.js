
// VARIABLES
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");


// TEXTS

let playerPickedText = document.getElementById("playerPickedText");
let computerPickedText = document.getElementById("computerPickedText");
let playerScoreText = document.getElementById("playerScoreText");
let computerScoreText = document.getElementById("computerScoreText");
let drawScoreText = document.getElementById("drawScoreText");
let evaluationText = document.getElementById("evaluationText");

// DATA
let playerPicked = 0;
let computerPicked = 0;
let draw = 0 ;
let playerScore = 0;
let computerScore = 0;

// PROCESSES
button0.addEventListener("click", function() {
  getRockForPlayer();
  getRockForComputer();
  getScissorForPlayer();
  getScissorForComputer();
  getPaperForPlayer();
  getPaperForComputer();

})

// CONTROLLERS
function playerPlayed () {
  playerPicked = Math.floor(Math.random() * 3) + 1;
}
function computerPlayed () {
  computerPicked = Math.floor(Math.random() * 3) +1;
}
function evaluation (){
  if (playerPicked > computerPicked) {
    evaluationText.innerHTML = "Player Wins"
    playerScore++;
  }
    if (playerPicked < computerPicked) {
      evaluationText.innerHTML = "Computer Wins"
      computerScore++;
    }
      else if ( playerPicked === computerPicked) {
        evaluationText.innerHTML = "Its a draw!";
        draw++;
      }
}

// VIEWS


// DETERMINE WINNER


// UPDATE STATS


// COOKIES

