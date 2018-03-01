//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");

//check if guess is right
if (Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
//check if guess is higher or lower
else if (Number(guess) > secretNumber) {
  alert("Too high. Guess again!");
} else {
  alert("Too low. Guess again!");
}