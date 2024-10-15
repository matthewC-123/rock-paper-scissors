function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let userChoice = prompt("Enter rock, paper, or scissors:")
    .toLowerCase()
    .trim();
  while (!choices.includes(userChoice)) {
    userChoice = prompt("Invalid. Enter rock, paper or scissors:")
      .toLowerCase()
      .trim();
  }
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase().trim();
  computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    );
    computerScore++;
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore > computerScore) {
    console.log("Winner!");
  } else if (computerScore > humanScore) {
    console.log("Loser!");
  } else {
    console.log("Tie!");
  }
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

let humanScore = 0;

let computerScore = 0;

playGame();
