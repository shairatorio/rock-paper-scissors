function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getImage(playerImage,computerImage) {
    const playerHandDisplay = document.getElementById("playerHand");
    const computerHandDisplay = document.getElementById("computerHand");

    switch(playerImage) {
        case 'rock':
            playerHandDisplay.src = './resources/images/rock.png'
            break;

        case 'paper':
            playerHandDisplay.src = './resources/images/paper.png'
            break;

        case 'scissors':
            playerHandDisplay.src = './resources/images/scissors.png'
            break;
    }

    switch(computerImage) {
        case 'rock':
            computerHandDisplay.src = './resources/images/rock.png'
            break;

        case 'paper':
            computerHandDisplay.src = './resources/images/paper.png'
            break;

        case 'scissors':
            computerHandDisplay.src = './resources/images/scissors.png'
            break;
    }
}

function getFinalResults() {
    const lostSound = document.querySelector('audio[data-key="lostGame"]')
    const wonSound = document.querySelector('audio[data-key="wonGame"]');

    const finalWin =  document.createTextNode(`You won the game! Congratulations!`);
    const finalLose = document.createTextNode(`You lost the game! Sorry!`);
    const msg = document.createTextNode(`Let's play another one!`);

    switch(round) {
        case playerCount:
            resultOne.innerHTML = "";
            resultTwo.innerHTML = "";

            resultOne.appendChild(finalWin);
            resultTwo.appendChild(msg);

            var buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            }

            wonSound.play();

            document.getElementById('btnPlay').disabled = false;
            break;

        case computerCount:
            resultOne.innerHTML = "";
            resultTwo.innerHTML = "";
            
            resultOne.appendChild(finalLose);
            resultTwo.appendChild(msg);

            var buttons = document.getElementsByTagName('button');
            for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            }

            lostSound.play();

            document.getElementById('btnPlay').disabled = false;
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

    const tieSound = document.querySelector('audio[data-key="tie"]')
    const loseSound = document.querySelector('audio[data-key="loseRound"]')
    const winSound = document.querySelector('audio[data-key="winRound"]');

    const resultOne = document.getElementById("resultOne");
    const resultTwo = document.getElementById("resultTwo");
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    const roundWin = document.createTextNode(`You win this round!`);
    const roundLose = document.createTextNode(`You lose this round!`);
    const no = document.createTextNode(`Oh no..`);
    const tie = document.createTextNode(`It's a tie!`);
    const win = document.createTextNode(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
    const lose = document.createTextNode(`${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);

    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";

    getImage(playerSelection,computerSelection);

    if (winObj[playerSelection] === computerSelection) {
        resultOne.appendChild(roundWin);
        resultTwo.appendChild(win);

        playerCount++;
        playerScoreDisplay.innerHTML = "";
 
        const playerScore = document.createTextNode(playerCount);
        playerScoreDisplay.appendChild(playerScore);

        winSound.play();

    } else if (winObj[computerSelection] === playerSelection) {
        resultOne.appendChild(roundLose);
        resultTwo.appendChild(lose);

        computerCount++;
        computerScoreDisplay.innerHTML = "";

        const computerScore = document.createTextNode(computerCount);
        computerScoreDisplay.appendChild(computerScore);

        loseSound.play();

    } else {
        resultOne.appendChild(no);
        resultTwo.appendChild(tie);
        
        tieSound.play();
    }    

    getFinalResults();
}

const introSound = document.querySelector('audio[data-key="intro"]');
introSound.play();

let playerCount = 0;
let computerCount = 0;
const round = 5;

// document.getElementById('btnPlay').disabled = true;

const btnList = document.querySelectorAll('button');

btnList.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let computerSelection = getComputerChoice();

        playRound(e.target.value,computerSelection);
        });
});