function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let userChoice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();

  if (!validChoices.includes(userChoice)) {
    alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
  } else {
    alert("You chose: " + userChoice);
  }
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  // Determine the winner and increment the score
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

// Global scope variables
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
