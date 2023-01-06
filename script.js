// Make an array giving the choices for the computer

var choices = ["ROCK", "PAPER", "SCISSORS"];

// Make a function that lets the computer pick randomly from the array

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Log that decision in console to assure it's functioning

console.log(getComputerChoice(choices));

