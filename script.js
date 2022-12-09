let playersWins = 0;
let computersWins = 0;
let computerChoiseArr = ["rock", "paper", "scissor"];

function computerPlay() {
    let computerSelection = [""];
    let computerChoise = Math.floor(Math.random()*3);
    return computerSelection[""] = computerChoiseArr[computerChoise];
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Oh no! Paper covers Rock! You lost the round!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log ("Great choice! Rock crushes Scissor! You won the round!");
        playersWins = playersWins + 1;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log ("Oh no! Rock crushes Scissor! You lost the round!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log ("Great choice! Scissor cuts Paper! You won the round!");
        playersWins = playersWins + 1;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log ("Oh no! Scissor cuts Paper! You lost the round!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log ("Great choice! Paper covers Rock! You won the round!");
        playersWins = playersWins + 1;
    } else if (playerSelection === computerSelection) {
        console.log("Two heads thinking alike. It's a tied round.");
    }
}

alert("Hello! Let's have some fun! This is a simple game of 'Rock', 'Paper' or 'Scissor'.");

function game() {
    for (let i = 1; i <= 5; i++) {
        computerSelection = computerPlay();
        let answerPrompt = prompt("What's your choice? 'Rock', 'Paper' or 'Scissor'?");
        let playerSelection = answerPrompt.toLowerCase().trim();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
            playRound(playerSelection, computerSelection);
        } else {
            alert ("That's invalid. Try to choose between 'Rock', 'Paper' or 'Scissor'.")
            i--;
        }
    }
    if (playersWins > computersWins){
        alert("You WON the game! Congratulations!!") || console.log("You WON the game! Congratulations!!");
    } else if (playersWins < computersWins){
        alert("Computer WON the game! That's what i call a bad luck.") || console.log("Computer WON the game! That's what i call a bad luck.");
    } else if (playersWins === computersWins){
        alert("You tied the game!") || console.log("You tied the game!");;
    }
}
game();