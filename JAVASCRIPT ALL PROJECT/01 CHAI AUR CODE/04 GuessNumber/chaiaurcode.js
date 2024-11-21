const randomNumber = parsenInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOriHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parsenInt(userInput.value)
        validateGuess(guess)

    })
}

function validateGuess(guess){
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //
}

function endGame(){
    //
}

function newGame(){
    //
}



