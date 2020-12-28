var player1 = Math.ceil(Math.random() * 6);

var player2 = Math.ceil(Math.random() * 6);

document.querySelector(".player1").setAttribute("src", "./images/dice" + player1 + ".png");

document.querySelector(".player2").setAttribute("src", "./images/dice" + player2 + ".png");

if(player1 > player2) {
    document.querySelector("h1").textContent ="Player 1 Wins!!";
}

else if(player2 > player1) {
    document.querySelector("h1").textContent ="Player 2 Wins!!";
}
else
    document.querySelector("h1").textContent = "Draw!!";
