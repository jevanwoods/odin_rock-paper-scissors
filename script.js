// Make an array giving the choices for the computer
var choices = ["ROCK", "PAPER", "SCISSORS"];

// Make a function that lets the computer pick randomly from the array
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

// Log that decision in console to assure it's functioning
console.log(computerChoice);

// Make a prompt to get the players choice
var playerChoice = prompt("Rock, Paper, or Scissors?");

// Make playerChoice uniform for comparison
let uniformChoice = playerChoice.toUpperCase();

// Log that player choice to assure it's functioning
console.log(uniformChoice);

// Compare two choices
function play(uniformChoice, computerChoice) {
    if (uniformChoice === computerChoice) {
        console.log("Tie");
    } else if (uniformChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lose");
    } else if (uniformChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win");
    } else if (uniformChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lose");
    } else if (uniformChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win");
    } else if (uniformChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lose");
    } else if (uniformChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win");
    } else {
        console.log("Invalid Entry");
    }
}

// Play the game
play(uniformChoice, computerChoice);