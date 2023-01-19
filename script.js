// Choices array
var choices = ["ROCK", "PAPER", "SCISSORS"];

// Computer Choice 
var computerChoice = '';

function computerSelector() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The Computer chose " + computerChoice);
    };

// Player Choice
var playerChoice = '';

function selectedRock() {
    playerChoice = 'ROCK';
    console.log("The Player chose " + playerChoice);
};

function selectedPaper() {
    playerChoice = 'PAPER';
    console.log("The Player chose " + playerChoice);
};

function selectedScissors() {
    playerChoice = 'SCISSORS';
    console.log("The Player chose " + playerChoice);
};

// The Result
var result = '';

// The comparison
function play() {
    if (playerChoice === computerChoice) {
        result = 'Tie';
        console.log("Tie");
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        result = 'Loss';
        console.log("You lose");
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        result = 'Win';
        console.log("You win");
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        result = 'Loss';
        console.log("You lose");
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        result = 'Win';
        console.log("You win");
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        result = 'Loss';
        console.log("You lose");
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        result = 'Win';
        console.log("You win");
    } else {
        console.log("Invalid Entry");
    }
};

// Set the Scores
var playerScore = 0;

var computerScore = 0;

// Tally the score
function scoreTally() {
    if (result === 'Win') {
        playerScore += 1;
        const playerScoreParagraph = document.createElement('p');
        playerScoreParagraph.textContent = playerScore;
        plyScoreCont.appendChild(playerScoreParagraph);
    } else if (result === 'Loss') {
        computerScore += 1;
        const computerScoreParagraph = document.createElement('p');
        computerScoreParagraph.textContent = computerScore;
        cptScoreCont.appendChild(computerScoreParagraph);
    }
    console.log("Player Score is " + playerScore);
    console.log("Player Score is " + computerScore);
};

// Connect to the DOM
const container = document.querySelector('#container');
const plyScoreCont = document.querySelector('#playerScore');
const cptScoreCont = document.querySelector('#computerScore');
const winAnnounce = document.querySelector('#winBox');
const lossAnnounce = document.querySelector('#winBox');

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
    scoreTally();
    winAnnoucement();
};

function clickPaper(e) {
    const paperChoice = document.createElement('div');
    paperChoice.textContent = 'You chose paper!';
    container.appendChild(paperChoice);
    console.log('Paper Clicked');
    selectedPaper();
    computerSelector();
    play();
    scoreTally();
    winAnnoucement();
};

function clickScissors(e) {
    const scissorsChoice = document.createElement('div');
    scissorsChoice.textContent = 'You chose scissors!';
    container.appendChild(scissorsChoice);
    console.log('Scissors Clicked');
    selectedScissors();
    computerSelector();
    play();
    scoreTally();
    winAnnoucement();
};

function winAnnoucement() {
    if (playerScore === 5) {
        const winAnnounced = document.createElement('p');
        winAnnounced.textContent = 'You win!';
        winAnnounce.appendChild(winAnnounced);
    } else if (computerScore === 5) {
        const lossAnnounced = document.createElement('p');
        lossAnnounced.textContent = 'You lose!';
        lossAnnounce.appendChild(lossAnnounced);
    }
};