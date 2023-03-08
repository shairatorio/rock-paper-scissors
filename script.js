function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getImage(playerImage,computerImage) {
    const playerHandDisplay = document.getElementById("playerHand");
    const computerHandDisplay = document.getElementById("computerHand");

    console.log(playerImage);
    console.log(computerImage);

    switch(playerImage) {
        case 'rock':
            playerHandDisplay.src = '../resources/images/rock.png'
            break;

        case 'paper':
            playerHandDisplay.src = '../resources/images/paper.png'
            break;

        case 'scissors':
            playerHandDisplay.src = '../resources/images/scissors.png'
            break;
    }

    switch(computerImage) {
        case 'rock':
            computerHandDisplay.src = '../resources/images/rock.png'
            break;

        case 'paper':
            computerHandDisplay.src = '../resources/images/paper.png'
            break;

        case 'scissors':
            computerHandDisplay.src = '../resources/images/scissors.png'
            break;
    }
}

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
    const win = document.createTextNode(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
    const lose = document.createTextNode(`${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);

    result.innerHTML = "";

    getImage(playerSelection,computerSelection)
    // console.log(playerSelection);
    // console.log(computerSelection);

    if (winObj[playerSelection] === computerSelection) {
        result.appendChild(win);

        playerCount++;
        playerScoreDisplay.innerHTML = "";
 
        const playerScore = document.createTextNode(playerCount);
        playerScoreDisplay.appendChild(playerScore);

    } else if (winObj[computerSelection] === playerSelection) {
        result.appendChild(lose);

        computerCount++;
        computerScoreDisplay.innerHTML = "";

        const computerScore = document.createTextNode(computerCount);
        computerScoreDisplay.appendChild(computerScore);

    } else {
        result.appendChild(tie);
    }

    switch(round) {
        case playerCount:
            alert("You Won! Congratulations!");
            break;

        case computerCount:
            alert("You Lose!");
            break;
    }
}

let computerSelection = getComputerChoice();
let playerCount = 0;
let computerCount = 0;
const round = 5;

const btnList = document.querySelectorAll('button');

btnList.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        playRound(e.target.value,computerSelection); // computerSelection not working
        });
});