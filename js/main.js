const player1 = new User("Player 1", "X");
const player2 = new User("Player 2", "O");
const game = new Game([player1, player2]);
let hasWinner = undefined;

const playBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
const boardGame = document.querySelector(".board-game");
const confirmReset = document.querySelector("#confirmReset"); //Modal
const gameResult = document.querySelector("#gameResult"); //Modal
const confirmBtn = document.querySelector("#confirmBtn");
const noResetBtn = document.querySelector("#noResetBtn");
const closeResult = document.querySelector("#closeResult");

//Starts the game, toggles visibility of reset and play button
playBtn.addEventListener("click", () => {
    playBtn.setAttribute("hidden", "true");
    resetBtn.removeAttribute("hidden");
    startGame(game);
});

//Event listeners to highlight the potential spot
for (child of boardGame.children) {//loops through all the divs
    child.addEventListener("mouseenter", handleMouseEnter);
    child.addEventListener("mouseleave", handleMouseLeave);
    child.addEventListener("click", handleClick);
}
function handleMouseEnter(element) {
    element.target.style.backgroundColor = "rgba(139, 139, 139, 0.2)";
}
function handleMouseLeave(element) {
    element.target.style.backgroundColor = "";
}
// The selected location is marked and switches to the other player's turn.
function handleClick(element) {
    if(!element.target.hasChildNodes() && hasWinner === undefined){ //Just if spot is free
        let p = document.createElement("p");
        p.innerHTML = game.activeTurn.icon;
        p.className = "marker";
        element.target.append(p);
        game.activeTurn = game.players.find(player => player.name != game.activeTurn.name);
        document.querySelector(".active-player").innerHTML = `${game.activeTurn.icon} is playing`;
        hasWinner = checkWinner();
        if(hasWinner && hasWinner != "Tie"){
            showResult(`${hasWinner.icon} Won!`);
        }
        if(hasWinner === "Tie"){
            showResult("It's a Tie!");
        }
    }
}

//When User clicks on Reset button
resetBtn.addEventListener("click", () => {
    resetBoard();
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
// Player clicks to close the Modal window
closeResult.addEventListener("click", () => {
    gameResult.close();
});
playAgain.addEventListener("click", () => {
    resetBoard("yes");
    gameResult.close();
});
// habilitates the grid (boardgame)
function startGame() {
    let gameDiv = document.querySelector(".game");
    gameDiv.style.visibility = "visible";
    for (let child of boardGame.children){ // should I reference boardGame in another way?
        child.classList.add("game-on");
    }
    document.querySelector(".active-player").innerHTML = `${game.activeTurn.icon} is playing`; //indicates active player
}
// cleans the spots
function resetBoard(option) {
    //on going game, confirms if the User wants to restart
    if(!hasWinner){
        confirmReset.showModal();
    }
    if(!option){ //to avoid undefined error when option is empty
        option = "";
    }
    if(hasWinner || option.toLowerCase() === "yes" ){
        const positions = document.querySelectorAll(".board-game div");
        positions.forEach(element => {
            if(element.children.length){ //if it was populated
                element.innerHTML = "";
            }
        });
        hasWinner = undefined;
    }
}
//checks if there's a winner
function checkWinner() {
    const positions = document.querySelectorAll(".board-game div");
    let counter = 0;
    //Top Row
    if(positions[0].children.length && positions[1].children.length && positions[2].children.length){ // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[1].children[0].innerHTML && 
            positions[0].children[0].innerHTML === positions[2].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Middle Row
    if(positions[3].children.length && positions[4].children.length && positions[5].children.length){ // Make sure there's a child tag to handle
        if (positions[3].children[0].innerHTML === positions[4].children[0].innerHTML && 
            positions[3].children[0].innerHTML === positions[5].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[3].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Bottom Row
    if(positions[6].children.length && positions[7].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
        if (positions[6].children[0].innerHTML === positions[7].children[0].innerHTML && 
            positions[6].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[6].children[0].innerHTML;
            });
            return winner;
        }
    }
    //First Column
    if(positions[0].children.length && positions[3].children.length && positions[6].children.length){ // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[3].children[0].innerHTML && 
            positions[0].children[0].innerHTML === positions[6].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Second Column
    if(positions[1].children.length && positions[4].children.length && positions[7].children.length){ // Make sure there's a child tag to handle
        if (positions[1].children[0].innerHTML === positions[4].children[0].innerHTML && 
            positions[1].children[0].innerHTML === positions[7].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[1].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Third Column
    if(positions[2].children.length && positions[5].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
        if (positions[2].children[0].innerHTML === positions[5].children[0].innerHTML && 
            positions[2].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[2].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Diagonal 
    if(positions[0].children.length && positions[4].children.length && positions[8].children.length){ // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[4].children[0].innerHTML && 
            positions[0].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Counter-Diagonal 
    if(positions[2].children.length && positions[4].children.length && positions[6].children.length){ // Make sure there's a child tag to handle
        if (positions[2].children[0].innerHTML === positions[4].children[0].innerHTML && 
            positions[2].children[0].innerHTML === positions[6].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[2].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Tie
    positions.forEach((element) => { //Verify if all the spots have been populated
        if(element.children.length === 1){
            counter++
        }
    });
    if (counter === 9) {
        return "Tie";
    } 
}
//Shows the result of the match
function showResult(message) {
    gameResult.children[0].innerHTML = message;
    gameResult.showModal();
    // setTimeout(() => {
    //     alert(message);
    // }, 0); //Waits untill the stack is clear to execute, meaning it will render stuff first
}


/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
 * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * 
 */