const playerHandDisplay = document.getElementById('playerHand');
const computerHandDisplay = document.getElementById('computerHand');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultOne = document.getElementById('resultOne');
const resultTwo = document.getElementById('resultTwo');

const introSound = document.querySelector(`audio[data-key='intro']`);
const lostSound = document.querySelector(`audio[data-key='lostGame']`)
const wonSound = document.querySelector(`audio[data-key='wonGame']`);
const tieSound = document.querySelector(`audio[data-key='tie']`)
const loseSound = document.querySelector(`audio[data-key='loseRound']`)
const winSound = document.querySelector(`audio[data-key='winRound']`);

const btnList = document.querySelectorAll('button');

const finalWin =  `You won the game! Congratulations!`;
const finalLose = `You lost the game! Sorry!`;
const msg = `Let's play another one!`
const roundWin = `You win this round!`;
const roundLose = `You lose this round!`;
const no = `Oh no..`;
const tie = `It's a tie!`;

let playerCount = 0;
let computerCount = 0;
const round = 5;

let winObj = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
};

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getImage(playerImage,computerImage) {
    switch(playerImage) {
        case 'rock':
            return playerHandDisplay.src = './resources/images/rock.png'
        case 'paper':
            return playerHandDisplay.src = './resources/images/paper.png'
        case 'scissors':
            return playerHandDisplay.src = './resources/images/scissors.png'
    }
    switch(computerImage) {
        case 'rock':
            return computerHandDisplay.src = './resources/images/rock.png'
        case 'paper':
            return computerHandDisplay.src = './resources/images/paper.png'
        case 'scissors':
            return computerHandDisplay.src = './resources/images/scissors.png'
    }
}

function getDescription(descOne,descTwo) {
    resultOne.textContent = descOne;
    resultTwo.textContent = descTwo;
}

function getFinalResults(desc) {
    getDescription(desc,msg);
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

function displayScore(count,scoreDisplay) {
    count++;
    scoreDisplay.textContent = count;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    const win = `${player} beats ${computer}`;
    const lose = `${computer} beats ${player}`;

    getImage(playerSelection,computerSelection);
    if (winObj[playerSelection] === computerSelection) {
        getDescription(roundWin,win);
        playerCount++;
        playerScoreDisplay.textContent = playerCount;
        audio(winSound);
    } else if (winObj[computerSelection] === playerSelection) {
        getDescription(roundLose,lose);
        computerCount++;
        computerScoreDisplay.textContent = computerCount;
        audio(loseSound);
    } else {
        getDescription(no,tie);        
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