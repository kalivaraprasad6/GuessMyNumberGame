# GuessMyNumberGame

Note : When ever we get something from user interface, it is a string

To reload the page, here we use the window.location.reload() method

document.querySelector('.again').addEventListener('click', function () {
window.location.reload();
});

if we reload the page, then it's not possible to work on the HighScore-- so we need to
