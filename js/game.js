class Game {
    constructor(players) { //array of players
        this.players = players;
        this.moves = [];
    }

    verifyPlayers() { //for future reference
        if (this.players.length() != 2)
        return alert("You need two players");
    }

    startGame() { // habilitates the grid
        console.log("startGame");
        let gameDiv = document.querySelector(".game");
        gameDiv.style.visibility = "visible";
        for (let child of boardGame.children){
            child.classList.add("game-on")
        }
    }
    handleMouseEnter(element) {
        element.target.style.backgroundColor = "rgba(139, 139, 139, 0.2)";
    }
    handleMouseLeave(element) {
        element.target.style.backgroundColor = "";
    }
    handleClick(element) {
        element.target
    }
}

/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 */