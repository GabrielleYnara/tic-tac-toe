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
        if(!element.target.hasChildNodes()){ //Just if spot is free
            let p = document.createElement("p");
            p.innerHTML = this.activeTurn.icon;
            p.className = "marker";
            element.target.append(p);
            this.activeTurn = this.players.find(player => player.name != this.activeTurn.name);
            document.querySelector(".active-player").innerHTML = `${this.activeTurn.icon} is playing`;
            let result = this.checkWinner();
            if(typeof result === "object"){
                this.showResult(`${result.icon} Won!`);
            }
            if(result === "Tie"){
                this.showResult("It's a Tie!");
            }
        }
    }

    checkWinner() {
        const positions = document.querySelectorAll(".board-game div");

        //Top Row
        if(positions[0].children.length && positions[1].children.length && positions[2].children.length){ // Make sure there's a child tag to handle
            if (positions[0].children[0].innerHTML === positions[1].children[0].innerHTML && 
                positions[0].children[0].innerHTML === positions[2].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[0].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Middle Row
        if(positions[3].children.length && positions[4].children.length && positions[5].children.length){ // Make sure there's a child tag to handle
            if (positions[3].children[0].innerHTML === positions[4].children[0].innerHTML && 
                positions[3].children[0].innerHTML === positions[5].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[3].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Bottom Row
        if(positions[6].children.length && positions[7].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
            if (positions[6].children[0].innerHTML === positions[7].children[0].innerHTML && 
                positions[6].children[0].innerHTML === positions[8].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[6].children[0].innerHTML;
                });
                return winner;
            }
        }
        //First Column
        if(positions[0].children.length && positions[3].children.length && positions[6].children.length){ // Make sure there's a child tag to handle
            if (positions[0].children[0].innerHTML === positions[3].children[0].innerHTML && 
                positions[0].children[0].innerHTML === positions[6].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[0].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Second Column
        if(positions[1].children.length && positions[4].children.length && positions[7].children.length){ // Make sure there's a child tag to handle
            if (positions[1].children[0].innerHTML === positions[4].children[0].innerHTML && 
                positions[1].children[0].innerHTML === positions[7].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[1].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Third Column
        if(positions[2].children.length && positions[5].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
            if (positions[2].children[0].innerHTML === positions[5].children[0].innerHTML && 
                positions[2].children[0].innerHTML === positions[8].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[2].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Diagonal 
        if(positions[0].children.length && positions[4].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
            if (positions[0].children[0].innerHTML === positions[4].children[0].innerHTML && 
                positions[0].children[0].innerHTML === positions[8].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[0].children[0].innerHTML;
                });
                return winner;
            }
        }
        //Counter-Diagonal 
        if(positions[2].children.length && positions[4].children.length && positions[6].children.length){ // Make sure there's a child tag to handle
            if (positions[2].children[0].innerHTML === positions[4].children[0].innerHTML && 
                positions[2].children[0].innerHTML === positions[6].children[0].innerHTML) {
                let winner = this.players.find(player => {
                    return player.icon === positions[2].children[0].innerHTML;
                });
                return winner;
            }
        }
        console.log();

        let counter = 0;
        positions.forEach((element) => {
            if(element.children.length === 1){
                counter++
            }
        });
        if (counter === 9) {
            return "Tie";
        }

        //Tie
        //Verify if all items have children - meaning all the spots have been populated
    }
    
    resetBoard() {
        const positions = document.querySelectorAll(".board-game div");
        positions.forEach(element => {
            if(element.children.length){ //if it was populated
                element.innerHTML = "";
            }
        });
    }

    showResult(message) {
        setTimeout(() => {
            alert(message);
        }, 0); //Waits untill the stack is clear to execute, meaning it will render stuff first
    }
}

/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
 * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
 * 
 */