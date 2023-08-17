const player1 = new User("Player 1", "X");
const player2 = new User("Player 2", "O");
const game = new Game([player1,player2]);

const playBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
const boardGame = document.querySelector(".board-game");

playBtn.addEventListener("click", () => {
    console.log("Play button clicked!");
    playBtn.setAttribute("hidden", "true");
    resetBtn.removeAttribute("hidden");
    game.startGame();

});

for (child of boardGame.children){
    child.addEventListener("mouseenter", game.handleMouseEnter);
    child.addEventListener("mouseleave", game.handleMouseLeave);
    child.addEventListener("click", (event) => game.handleClick(event));
}

resetBtn.addEventListener("click", game.resetBoard);