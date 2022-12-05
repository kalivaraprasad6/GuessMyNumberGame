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

// or

// Note : When ever we get something from user interface, it is a string

let secretNum = Math.trunc(Math.random() * 20) + 1;
let Attempts = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number provided';
  }
  // When the player wins
  else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.message').textContent =
      '✅ You guessed the Correct Number';

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
      document.querySelector('.message').textContent =
        guess > secretNum ? '📈 Too High ' : '📈 Too Low ';
      Attempts = Attempts - 1;
      document.querySelector('.Attempts').textContent = Attempts;
    } else {
      document.querySelector('.message').textContent =
        'Your Game is Over ❌ 🚫 ';
      document.querySelector('.Attempts').textContent = 0;
    }
  }
  // When the guess is too Low Number
  // else if (guess < secretNum) {
  //   if (Attempts > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low ';
  //     Attempts = Attempts - 1;
  //     document.querySelector('.Attempts').textContent = Attempts;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Your Game is Over ❌ 🚫';
  //     document.querySelector('.Attempts').textContent = 0;
  //   }
  // }
});

//To reload the page, here we use the window.location.reload() method

// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
// });
// if we reload the page, then it's not possible to work on the HighScore-- so we need to

// To reset the game/ initial values

document.querySelector('.again').addEventListener('click', function () {
  Attempts = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.Attempts').textContent = Attempts;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Refactoring the code for eleminating the duplications
