function computerPlay() {
    let computerChoise = ["Rock", "Paper", "Scissor"];
    return computerChoise[Math.floor(Math.random() * computerChoise.length)]
  }

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Paper")) {
        return ("Oh no! Paper covers Rock! You lost!");
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Rock")) {
        return ("Two heads thinking alike. It's a tie.");
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Scissor")) {
        return ("Great choice! Rock crushes Scissor! You won!");
    }
    if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "Rock")) {
        return ("Oh no! Rock crushes Scissor! You lost!");
    } else if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "Scissor")) {
        return ("Two heads thinking alike. It's a tie.");
    } else if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "Paper")) {
        return ("Great choice! Scissor cuts Paper! You won!"); 
    }
    if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Scissor")) {
        return ("Oh no! Scissor cuts Paper! You lost!");
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Paper")) {
        return ("Two heads thinking alike. It's a tie.");
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "Rock")) {
        return ("Great choice! Paper covers Rock! You won!")
    } else {
        return alert("Something's wrong. Could you type again?")
    }
}

alert("Hello! Let's have some fun! This is a simple game of 5 rounds of 'Rock, Paper or Scissor'." );

function playerSelection() {
    do {
        let userInput = prompt("What's your choice? rock, paper or scissor?").toLocaleLowerCase().trim();
        
    } while (!arr.includes);
    
}
let playerSelection = prompt("What's your choice? Rock, Paper or Scissor?");
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(i)        
    }
    console.log("Let's Play again?");
}

