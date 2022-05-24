var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "TIE!";
}
