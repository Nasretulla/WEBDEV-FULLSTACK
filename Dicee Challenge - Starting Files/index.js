var kuvat = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var randomPlayer1 = Math.floor(Math.random() * kuvat.length);

var choosenImage = kuvat[randomPlayer1];

document.querySelector(".img1").setAttribute("src", choosenImage);

var randomPlayer2 = Math.floor(Math.random() * kuvat.length);
var choosenImage2 = kuvat[randomPlayer2];

document.querySelector(".img2").setAttribute("src", choosenImage2);


if(randomPlayer1 > randomPlayer2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🥇"
}
else if (randomPlayer1 < randomPlayer2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🥇"
}

else {
    document.querySelector("h1").innerHTML = "Draw!"
}