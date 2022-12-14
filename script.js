'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// const saveInput = function () {
//   console.log(document.querySelector('.guess').value);
// };

// document.querySelector('.check').addEventListener('click', saveInput);

let secretNum = Math.trunc(Math.random() * 20) + 1;
let Attempts = 20;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMsg('❌ No Number provided');
  }
  // When the player wins
  else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    displayMsg('✅ You guessed the Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (Attempts > highScore) {
      highScore = Attempts;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the player loses
  else if (guess !== secretNum) {
    if (Attempts > 1) {
      displayMsg(guess > secretNum ? '📈 Too High ' : '📉 Too Low ');
      Attempts = Attempts - 1;
      document.querySelector('.Attempts').textContent = Attempts;
    } else {
      displayMsg('Your Game is Over ❌ 🚫');
      document.querySelector('.Attempts').textContent = 0;
    }
  }
});

// To reset the game/ initial values

document.querySelector('.again').addEventListener('click', function () {
  Attempts = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMsg('Start guessing...');
  document.querySelector('.Attempts').textContent = Attempts;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Refactoring the code for eleminating the duplications
