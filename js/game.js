class Game {
    constructor(players) { //array of players
        this.players = players;
        this.moves = [];
        this.activeTurn = players[0];
    }

    verifyPlayers() { //for future reference
        if (this.players.length() != 2)
        return alert("You need two players");
    }

    startGame() { // habilitates the grid (boardgame)
        let gameDiv = document.querySelector(".game");
        gameDiv.style.visibility = "visible";
        for (let child of boardGame.children){ // should I reference boardGame in another way?
            child.classList.add("game-on")
        }
        document.querySelector(".active-player").innerHTML = `${this.activeTurn.icon} is playing`; //indicates active player
    }

    handleMouseEnter(element) {
        element.target.style.backgroundColor = "rgba(139, 139, 139, 0.2)";
    }
    handleMouseLeave(element) {
        element.target.style.backgroundColor = "";
    }
    
    // The selected location is marked, and it switches to the other player.
    handleClick(element) {
        let p = document.createElement("p");
        p.innerHTML = this.activeTurn.icon;
        p.className = "marker";
        element.target.append(p);
        this.activeTurn = this.players.find(player => player.name != this.activeTurn.name);
        document.querySelector(".active-player").innerHTML = `${this.activeTurn.icon} is playing`;
    }
}

/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
 * 
 */