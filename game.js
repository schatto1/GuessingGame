//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");
alert(guess);

//check if guess is right
if (Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}