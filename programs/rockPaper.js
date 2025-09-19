const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = ["rock", "paper", "scissors"];

function giveComputerOutput(max) {
  return Math.floor(Math.random() * max);
}

function giveRandomComputerOutput() {
  return words[giveComputerOutput(3)];
}

readline.question('One...Two...Three...Start: ', userInput => {
  const userChoice = userInput.toLowerCase();
  const computerChoice = giveRandomComputerOutput();

  console.log(`\nUser chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}\n`);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("USER WON!");
  } else if (userChoice === computerChoice) {
    console.log("IT'S A TIE!");
  } else if (words.includes(userChoice)) {
    console.log("COMPUTER WON!");
  } else {
    console.log("Invalid user input. Please choose rock, paper, or scissors.");
  }

  readline.close();
});
