/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Let player choose to play again
*/

//Game Values
let min = 1,
	max = 10,
	winningNum = Math.floor(Math.random()*(max) +1 ),
	guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),	
  	  minNum = document.querySelector('.min-num'),
  	  maxNum = document.querySelector('.max-num'),
  	  guessBtn = document.querySelector('#guess-btn'),
  	  guessInput = document.querySelector('#guess-input'),
  	  message = document.querySelector('.message');

//Assign UI min and max number

minNum.textContent = min;
maxNum.textContent = max;

//play again even listener
game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again') {
	 window.location.reload()

	}


})

//Listen for Guess
guessBtn.addEventListener('click',function() {
let guess = parseInt(guessInput.value);
//validate
	if (isNaN(guess) || guess < min || guess > max){
		setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');
}
		//Check if won
	if (guess === winningNum) {
		
		gameOver(true, `${winningNum} is correct! YOU WIN!`, 'green')
		
	} else {
		//wrong number - subtract from guess left

		  guessesLeft -= 1;
		  if(guessesLeft === 0){
		  	gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`, 'red');

		  	//clear input 
		  	guessInput.value = ''
			} else{
		  	//tell remaining guessess

		  	setMessage(`${guess} is not correct. You have ${guessesLeft} Guesses Left. Try again`, 'red')
		  	//clear input
		  	guessInput.value = ''
		  	}
		  }
	}

);

//Game Over
function gameOver (won, msg) {
	let color;
	won === true ? color = 'green' : color = 'red';

	guessInput.disabled = true
	//change border color
	guessInput.style.borderColor = color;

	//change text color
	message.style.color = color
	// set message to let know won or lost
	setMessage(msg);

	//Play Again
	
  	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';
}


//set message
function setMessage(msg, color) {
	message.style.color = color
	message.textContent	= msg;
}

		  			console.log(winningNum)
