function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';       
      }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() || playerSelection.toUpperCase() === 'ROCK' 
    && computerSelection.toLowerCase() || computerSelection.toUpperCase() === 'PAPER') {
        return 'you won!';
    } 
}

// const playerSelection = "rock";
// const computerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));

