// Choices array
var choices = ["ROCK", "PAPER", "SCISSORS"];

// Computer Choice 
var computerChoice = '';

function computerSelector() {
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The Computer chose " + computerChoice);
    };

// Player Choice
var playerChoice = '';

function selectedRock() {
    var playerChoice = 'ROCK';
    console.log("The Player chose " + playerChoice);
};

function selectedPaper() {
    var playerChoice = 'PAPER';
    console.log("The Player chose " + playerChoice);
};

function selectedScissors() {
    var playerChoice = 'SCISSORS';
    console.log("The Player chose " + playerChoice);
};

// The comparison
function play() {
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice === computerChoice) {
        console.log("Tie");
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lose");
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win");
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lose");
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win");
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lose");
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win");
    } else {
        console.log("Invalid Entry");
    }
};

// Connect to the DOM
const container = document.querySelector('#container');


// Play the game on click
rock.addEventListener("click",clickRock);

paper.addEventListener("click",clickPaper);

scissors.addEventListener("click",clickScissors);

function clickRock(e) {
    const rockChoice = document.createElement('div');
    rockChoice.textContent = 'You chose rock!';
    container.appendChild(rockChoice);
    console.log('Rock Clicked');
    selectedRock();
    computerSelector();
    play();
};

function clickPaper(e) {
    const paperChoice = document.createElement('div');
    paperChoice.textContent = 'You chose paper!';
    container.appendChild(paperChoice);
    console.log('Paper Clicked');
    selectedPaper();
    computerSelector();
    play();
};

function clickScissors(e) {
    const scissorsChoice = document.createElement('div');
    scissorsChoice.textContent = 'You chose scissors!';
    container.appendChild(scissorsChoice);
    console.log('Scissors Clicked');
    selectedScissors();
    computerSelector();
    play();
};