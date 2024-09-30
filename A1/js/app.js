// Variables

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

loadGame();
updateStats();

//Processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  showPlayerRollResult ();
  showComputerRollResult ();
  determineWinner();
  updateStats();
  saveAsCookie();

});

//Controllers
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;

}
  function getRandomNumberOneToSixForComputer() {
    computerRoll = Math.floor(Math.random() * 6) + 1;
}

//Views
function showPlayerRollResult() {
  playerRollText.innerText = "Player: " +playerRoll;
}

function showComputerRollResult() {
  computerRollText.innerText = "Computer: " +computerRoll;

}

// Determine Winner
function determineWinner() {
  if (playerRoll > computerRoll) {
    gameResultText.innerText = "Result: You win!";
    playerWins++;
  } else if (playerRoll < computerRoll) {
    gameResultText.innerText = "Result: Computer wins!";
computerWins++;
  } else {
    gameResultText.innerText = "Result: It's a tie!";
    draws++;
  }
}

// Update statistics
function updateStats() {
  playerWinsText.innerText = "Player Wins: " + playerWins;
  computerWinsText.innerText = "Computer Wins: " + computerWins;
  drawsText.innerText = "Draws: " + draws;
}
  //COOKIES
  function saveAsCookie() {
    document.cookie = "playerWins=" + playerWins + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
    document.cookie = "computerWins=" + computerWins + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
    document.cookie = "draws=" + draws + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
  }

  function loadGame() {
    playerWins = getCookie("playerWins");
    computerWins = getCookie("computerWins");
    draws = getCookie("draws");
  }

    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
    }
    return 0;

}
