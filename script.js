let playersWins = 0;
let computersWins = 0;

function computerPlay() {
    let computerChoise = ["Rock", "Paper", "Scissor"];
    return computerChoise[Math.floor(Math.random() * computerChoise.length)];
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "Paper") {
        console.log("Oh no! Paper covers Rock! You lost!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "ROCK" && computerSelection === "Scissor") {
        console.log ("Great choice! Rock crushes Scissor! You won!");
        playersWins = playersWins + 1;
    } else if (playerSelection === "SCISSOR" && computerSelection === "Rock") {
        console.log ("Oh no! Rock crushes Scissor! You lost!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "SCISSOR" && computerSelection === "Paper") {
        console.log ("Great choice! Scissor cuts Paper! You won!");
        playersWins = playersWins + 1;
    } else if (playerSelection === "PAPER" && computerSelection === "Scissor") {
        console.log ("Oh no! Scissor cuts Paper! You lost!");
        computersWins = computersWins + 1;
    } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        console.log ("Great choice! Paper covers Rock! You won!");
        playersWins = playersWins + 1;
    } else if (playerSelection === computerSelection) {
        console.log("Two heads thinking alike. It's a tie.");
    }
}

alert("Hello! Let's have some fun! This is a simple game of 'Rock', 'Paper' or 'Scissor'.");

function game() {
    for (let i = 1; i <= 5; i++) {
        computerSelection = computerPlay();
        let answer = prompt("What's your choice? 'Rock', 'Paper' or 'Scissor'?");
        let playerAnswer = answer.toLowerCase().trim();
        if (playerAnswer === "rock" || playerAnswer === "paper" || playerAnswer === "scissor") {
            playRound(playerSelection, computerSelection);
            if (playersWins === 3) {
                console.log("You won 3 matches first!! Congratulations!! Game Over.");
                break;
            }
            if (computersWins === 3) {
                console.log("You lost 3 matches!! That's what i call a bad luck! Game Over.");
                break;
            } else {
                alert ("That's invalid. Try to choose between 'Rock', 'Paper' or 'Scissor'.")
            } 
        }
    }
}

