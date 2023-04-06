const playerHandDisplay = document.getElementById("playerHand");
const computerHandDisplay = document.getElementById("computerHand");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const finalWin =  document.createTextNode(`You won the game! Congratulations!`);
const finalLose = document.createTextNode(`You lost the game! Sorry!`);
const msg = document.createTextNode(`Let's play another one!`);
const roundWin = document.createTextNode(`You win this round!`);
const roundLose = document.createTextNode(`You lose this round!`);
const no = document.createTextNode(`Oh no..`);
const tie = document.createTextNode(`It's a tie!`);

const introSound = document.querySelector('audio[data-key="intro"]');
const lostSound = document.querySelector('audio[data-key="lostGame"]')
const wonSound = document.querySelector('audio[data-key="wonGame"]');
const tieSound = document.querySelector('audio[data-key="tie"]')
const loseSound = document.querySelector('audio[data-key="loseRound"]')
const winSound = document.querySelector('audio[data-key="winRound"]');

const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");

const btnList = document.querySelectorAll('button');

let playerCount = 0;
let computerCount = 0;
const round = 5;

let winObj = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

//improve buttons visual effects

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getImage(playerImage,computerImage) {
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

function clearDescription() {
    resultOne.innerHTML = "";
    resultTwo.innerHTML = "";
}

function appendDescription(descOne,descTwo) {
    resultOne.appendChild(descOne);
    resultTwo.appendChild(descTwo);
}

function getFinalResults(desc) {
    clearDescription();
    appendDescription(desc,msg);

    for (let i = 0; i < 3; i++) {
        btnList[i].disabled = true;
    }
}

function displayFinalResults() {
    switch(round) {
        case playerCount:
            getFinalResults(finalWin);
            audio(wonSound);
        break;

        case computerCount:  
            getFinalResults(finalLose);
            audio(lostSound)
        break;
    }
}

function audio(sound) {
    sound.play();
}

//breakdown
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    const win = document.createTextNode(`${player} beats ${computer}`);
    const lose = document.createTextNode(`${computer} beats ${player}`);

    clearDescription();
    getImage(playerSelection,computerSelection);

    if (winObj[playerSelection] === computerSelection) {
        appendDescription(roundWin,win);

        playerCount++;
        playerScoreDisplay.innerHTML = "";
        const playerScore = document.createTextNode(playerCount);
        playerScoreDisplay.appendChild(playerScore);

        audio(winSound);

    } else if (winObj[computerSelection] === playerSelection) {
        appendDescription(roundLose,lose);

        computerCount++;
        computerScoreDisplay.innerHTML = "";
        const computerScore = document.createTextNode(computerCount);
        computerScoreDisplay.appendChild(computerScore);

        audio(loseSound);

    } else {
        appendDescription(no,tie);        
        audio(tieSound);
    }    

    displayFinalResults();
}

audio(introSound);

btnList.forEach((btn) => {
    btn.addEventListener('click', e => {
        let computerSelection = getComputerChoice();
        playRound(e.target.value,computerSelection);
    });
});