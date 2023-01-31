function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winObj = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    };

    const result = document.getElementById("result");
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    const tie = document.createTextNode(`It's a tie!`);
    const win = document.createTextNode(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
    const lose = document.createTextNode(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);
    const invalid = document.createTextNode(`Invalid input!`);
    const playerScore = document.createTextNode(playerCount);
    const computerScore = document.createTextNode(computerCount);

    result.innerHTML = "";

    if (playerSelection === computerSelection) {
        result.appendChild(tie);
    } else if (winObj[playerSelection] === computerSelection) {
        result.appendChild(win);
        playerCount++;
        playerScoreDisplay.appendChild(playerScore);
    } else if (winObj[computerSelection] === playerSelection) {
        result.appendChild(lose);
        computerCount++;
        computerScoreDisplay.appendChild(computerScore);
    } else {
        result.appendChild(invalid);
    }

}

let computerSelection = getComputerChoice();
const btnList = document.querySelectorAll('button');

btnList.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        playRound(e.target.value,computerSelection);
        });
});

function game() {
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