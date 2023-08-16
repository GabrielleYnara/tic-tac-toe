const player1 = new User("Player 1", "X");
const player2 = new User("Player 2", "O");
const game = new Game([player1,player2]);
// player1.addMatch("won");
// player2.addMatch("lost");

// console.log(player1);
// console.log(player2);

const playBtn = document.querySelector("#play");
const boardGame = document.querySelector(".board-game");

playBtn.addEventListener("click", () => {
    console.log("Play button clicked!");
    game.startGame();
})

for (child of boardGame.children){
    child.addEventListener("mouseenter", game.handleMouseEnter);
    child.addEventListener("mouseleave", game.handleMouseLeave);
}

