function getRandomNumber() {
    return Math.floor(Math.random() * 6 ) + 1;
}

var player1Score = getRandomNumber();
var player2Score = getRandomNumber();

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", "images/dice"+player1Score+".png");
image2.setAttribute("src", "images/dice"+player2Score+".png");

if (player1Score > player2Score) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (player2Score > player1Score) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
