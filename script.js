let randomNumber;
let guesses = [];

function startGame() {
  randomNumber = Math.floor(Math.random() * 101);
  guesses = [];
  document.getElementById("guessInput").value = "";
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("guesses").textContent = "Your guesses: ";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  if (isNaN(guess) || guess < 0 || guess > 100) {
    alert("Please enter a valid number between 0 and 100.");
    return;
  }

  guesses.push(guess);
  if (guess === randomNumber) {
    document.getElementById("resultMessage").textContent =
      "Congratulations! You guessed it right!";
  } else if (guess > randomNumber) {
    document.getElementById("resultMessage").textContent = "Too high!";
  } else {
    document.getElementById("resultMessage").textContent = "Too low!";
  }

  document.getElementById("guesses").textContent =
    "Your guesses: " + guesses.join(", ");
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("submitBtn").addEventListener("click", checkGuess);
