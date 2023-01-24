function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winObj = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    };

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (winObj[playerSelection] === computerSelection) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else if (winObj[computerSelection] === playerSelection) {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
    } else {
        return "Invalid input!";
    }

}

function game() {
    let computerSelection = getComputerChoice();
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {

        playerSelection = window.prompt('Enter the following: \nRock, Paper, or Scissors?');
        let ans = playRound(playerSelection, computerSelection);

        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(ans);

        if (ans.includes("Win")) {
            playerCount++;
        } else if (ans.includes("Lose")) {
            computerCount++;
        }
    }

    console.log("-------------------------------------");

    console.log("Player Score: " + playerCount);
    console.log("Computer Score: " + computerCount);

    if (playerCount > computerCount) {
        return "You Won! Congratulations!";
    } else if (playerCount === computerCount) {
        return "It's a tie!"
    } else {
        return "You Lose! Want to try again?"
    }
}

