document.addEventListener("DOMContentLoaded", function() {
  let HP = document.getElementById("homepage");
  let GTN = document.getElementById("GTN");
  let RPS = document.getElementById("RPS");
  let PIG = document.getElementById("PIG");
  let easy = document.getElementById("GTNEasy");
  let medium = document.getElementById("GTNMedium");
  let hard = document.getElementById("GTNHard");

  let easyInput = document.getElementById("GTNEasyinput");
  let mediumInput = document.getElementById("GTNMediuminput");
  let hardInput = document.getElementById("GTNHardinput");

  let easyResult = document.getElementById("resulteasy");
  let mediumResult = document.getElementById("resultmedium");
  let hardResult = document.getElementById("resulthard");

  let RPSResult = document.getElementById("RPSResult");
  let rolled = document.getElementById("rolled");
  let totalscore = document.getElementById("totalscore");

  window.openGTN = function() {
    HP.classList.remove("active");
    GTN.classList.add("active");
  };

  window.openRPS = function() {
    HP.classList.remove("active");
    RPS.classList.add("active");
  };

  window.openPIG = function() {
    HP.classList.remove("active");
    PIG.classList.add("active");
  };

  window.GoBackHPage = function() {
    GTN.classList.remove("active");
    easy.classList.remove("active");
    medium.classList.remove("active");
    hard.classList.remove("active");
    RPS.classList.remove("active");
    PIG.classList.remove("active");

    HP.classList.add("active");
  };
  //
  // GUESS THE NUMBER
  //
  let easyNumber = Math.floor(Math.random() * 200) + 1;
  let mediumNumber = Math.floor(Math.random() * 500) + 1;
  let hardNumber = Math.floor(Math.random() * 1000) + 1;

  window.GTNEasy = function() {
    GTN.classList.remove("active");
    easy.classList.add("active");
  };

  window.GTNMedium = function() {
    GTN.classList.remove("active");
    medium.classList.add("active");
  };

  window.GTNHard = function() {
    GTN.classList.remove("active");
    hard.classList.add("active");
  };

  easyInput.addEventListener("change", function() {
    let guess = Number(easyInput.value);

    if (guess === easyNumber) {
      easyResult.textContent = "Correct! You got it!";
    } else if (guess < easyNumber) {
      easyResult.textContent = "Too low!";
    } else {
      easyResult.textContent = "Too high!";
    }
  });

  mediumInput.addEventListener("change", function() {
    let guess = Number(mediumInput.value);

    if (guess === mediumNumber) {
      mediumResult.textContent = "Correct! You got it!";
    } else if (guess < mediumNumber) {
      mediumResult.textContent = "Too low!";
    } else {
      mediumResult.textContent = "Too high!";
    }
  });

  hardInput.addEventListener("change", function() {
    let guess = Number(hardInput.value);

    if (guess === hardNumber) {
      hardResult.textContent = "Correct! You got it!";
    } else if (guess < hardNumber) {
      hardResult.textContent = "Too low!";
    } else {
      hardResult.textContent = "Too high!";
    }
  });

  // 
  // Rock Paper Scissors
  // 

  window.play = function(playerChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
      RPSResult.textContent = "You chose " + playerChoice + ". AI chose " + computerChoice + ". It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      RPSResult.textContent = "You chose " + playerChoice + ". AI chose " + computerChoice + ". You win!";
    } else {
      RPSResult.textContent = "You chose " + playerChoice + ". AI chose " + computerChoice + ". AI wins!";
    }
  };

  // 
  // PIG
  // 

  let score = 0;
  let highScore = 0;

  window.roll = function() {
    let dice = Math.floor(Math.random() * 6) + 1;

    rolled.textContent = "You rolled a " + dice + "!";

    if (dice === 1) {
      if (score > highScore) {
        highScore = score;
      }

      totalscore.textContent =
        "You died! Your score was " + score +
        ". High score: " + highScore;

      score = 0;
    } else {
      score += dice;

      totalscore.textContent =
        "Current score: " + score +
        " | High score: " + highScore;
    }
  };
});
