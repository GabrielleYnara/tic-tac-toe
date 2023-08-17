const player1 = new User("Player 1", "X");
const player2 = new User("Player 2", "O");
const game = new Game([player1, player2]);

const playBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
const boardGame = document.querySelector(".board-game");
const confirmReset = document.querySelector("#confirmReset"); //Modal
const confirmBtn = document.querySelector("#confirmBtn");
const noResetBtn = document.querySelector("#noResetBtn");

playBtn.addEventListener("click", () => {
    console.log("Play button clicked!");
    playBtn.setAttribute("hidden", "true");
    resetBtn.removeAttribute("hidden");
    startGame(game);
});

for (child of boardGame.children) {
    child.addEventListener("mouseenter", game.handleMouseEnter);
    child.addEventListener("mouseleave", game.handleMouseLeave);
    child.addEventListener("click", (event) => game.handleClick(event));
}

//When User clicks on Reset button
resetBtn.addEventListener("click", () => {
    confirmReset.showModal();
    
});
//if User give up on reseting the board
noResetBtn.addEventListener("click", (event) => {
    event.preventDefault(); //Do not submit the form
    confirmReset.close(); //closes the Modal
});
//When the user wants to reset the game
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); //doesn't reload the page
    resetBoard("yes");
    confirmReset.close();
});

function startGame() { // habilitates the grid (boardgame)
    let gameDiv = document.querySelector(".game");
    gameDiv.style.visibility = "visible";
    for (let child of boardGame.children){ // should I reference boardGame in another way?
        child.classList.add("game-on");
    }
    document.querySelector(".active-player").innerHTML = `${game.activeTurn.icon} is playing`; //indicates active player
}
function resetBoard(option) {
    //on going game
    if(typeof option === "object" || option === "Tie" || option.toLowerCase() === "yes" ){
        const positions = document.querySelectorAll(".board-game div");
        positions.forEach(element => {
            if(element.children.length){ //if it was populated
                element.innerHTML = "";
            }
        });
    }
}