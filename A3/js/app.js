
// VARIABLES
let button0 = document.getElementById("button0"); //Rock
let button1 = document.getElementById("button1"); //Paper
let button2 = document.getElementById("button2"); //Scissor


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
  playerPicked = 0; //Rock
  startGame();
});
button1.addEventListener("click", function() {
  playerPicked = 1; //Paper
  startGame();
});
  button2.addEventListener("click", function() {
    playerPicked = 2; //Scissor
    startGame();
});
//FUNCTIONS
function startGame() {
  computerPlayed();
  showPlayerPickedResult();
  showComputerPickedResult();
  evaluateGame();
  updateStats();
}
function computerPlayed() {
  computerPicked = Math.floor(Math.random() * 3);
}
function showPlayerPickedResult() {
  const choices = ["Rock","Paper","Scissor"];
  playerPickedText.innerText = "Player picked: " + choices[playerPicked];
}
function showComputerPickedResult() {
  const choices = ["Rock","Paper","Scissor"];
  computerPickedText.innerText = "computer picked: "
}
function evaluateGame() {
  if (playerPicked === computerPicked) {
    evaluationText.innerHTML = "It's a draw!";
    draw++;
  } else if (
    (playerPicked === 0 && computerPicked === 2) || // Rock beats Scissors
    (playerPicked === 1 && computerPicked === 0) || // Paper beats Rock
    (playerPicked === 2 && computerPicked === 1)    // Scissors beats Paper
  ) {
    evaluationText.innerHTML = "Player Wins!";
    playerScore++;
  } else {
    evaluationText.innerHTML = "Computer Wins!";
    computerScore++;
  }
}

// UPDATE STATS
function updateStats() {
  playerScoreText.innerText = "Player Wins: " + playerScore;
  computerScoreText.innerText = "Computer Wins: " + computerScore;
  drawScoreText.innerText = "Draws: " + draw;


// VIEWS
function showPlayerPickedResult() {
  playerPickedText.innerText = " player"+ playerPicked;

  function showComputerPickedResult() {
    const choices = ["Rock","Paper","Scissor"];
    computerPickedText.innerText = " computer picked:" + choices [computerPicked];
  }
}

// DETERMINE WINNER
function evaluation (){
  if (playerPicked > computerPicked) {
    evaluationText.innerHTML = "Player Wins"
    playerScore++;
  }
  else if (playerPicked < computerPicked) {
    evaluationText.innerHTML = "Computer Wins"
    computerScore++;
  }
  else if ( playerPicked === computerPicked) {
    evaluationText.innerHTML = "Its a draw!";
    draw++;
  }
}

// UPDATE STATS
function updateStats() {
  playerScoreText.innerText = "player Wins"+ playerPicked;
  computerScoreText.innerText = "computer Wins" + computerPicked;
  drawScoreText.innerText= "Draw" + draw;
}

// COOKIES

