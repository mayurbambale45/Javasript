<!-- md - markdown file -->
# projects related to dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

``` Javascript 
    console.log("Chai Aur Code")

    const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## Project 2

``` Javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight ').value)
 const results = document.querySelector('#results ')
    
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height.${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight.${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
});
```

## Project 3
``` Javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString())
  clock.innerHTML= date.toLocaleTimeString()
}, 1000)
```

## Project 4

``` javascript
// console.log(Math.round(Math.random() * 100 + 1))
// console.log(parseInt(Math.random() * 100 + 1))

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  // Check you are available for play game or not

  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess); // it call validateGuess function
  });
}

function validateGuess(guess) {
  // Validate the enter value is valid or not
  if (isNaN(guess)) {
    alert('Please enter a valid number!');
  } else if (guess < 1) {
    alert('Please enter a valid number!');
  } else if (guess > 100) {
    alert('Please enter a number less than 100!');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check value is equal to random number or not
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Tooo high`);
  }
}

function displayGuess(guess) {
  // Clean Values for the enter next value
  userInput.value = ''; // clean up method
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Here pass message and print.
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // End previous game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // Start new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; //reset prev guess
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```