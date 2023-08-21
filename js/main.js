const player1 = new User("Player 1", "X");
const player2 = new User("Player 2", "O");
const game = new Game([player1, player2]);
let hasWinner = undefined;

const xIcon = document.querySelector("#xIcon");
const oIcon = document.querySelector("#oIcon");
const boardGame = document.querySelector(".board-game");
const resetBtn = document.querySelector("#reset");
const confirmReset = document.querySelector("#confirm-reset"); //Modal
const confirmBtn = document.querySelector("#confirmBtn");
const noResetBtn = document.querySelector("#noResetBtn");
const gameResult = document.querySelector("#gameResult"); //Modal
const closeResult = document.querySelector("#closeResult");
const scorePlayerX = document.querySelector("#Xplayer");
const scorePlayerO = document.querySelector("#Oplayer");
const scoreTie = document.querySelector("#Tie");

//Starts the game with X icon, toggles visibility off and shows reset button
xIcon.addEventListener("click", () => {
    xIcon.setAttribute("hidden", "true");
    oIcon.setAttribute("hidden", "true");
    document.querySelector("#choice-label").style.display = "none";
    resetBtn.removeAttribute("hidden");
    startGame(game);// game already starts with X playing
});

//Starts the game with O icon, toggles visibility off and shows reset button
oIcon.addEventListener("click", () => {
    xIcon.setAttribute("hidden", "true");
    oIcon.setAttribute("hidden", "true");
    document.querySelector("#choice-label").style.display = "none";
    resetBtn.removeAttribute("hidden");
    game.activeTurn = player2;
    startGame(game);
});

//Loops through board game elements and assigns click events to each one
for (child of boardGame.children) {
    child.addEventListener("click", handleClick);
}
// The selected location is marked and switches to the other player's turn.
function handleClick(element) {
    if (!element.target.hasChildNodes() && hasWinner === undefined) { //Just if spot is free
        let p = document.createElement("p");
        p.innerHTML = game.activeTurn.icon;
        p.className = "marker";
        element.target.append(p);
        element.target.classList.add("marked");
        game.activeTurn = game.players.find(player => player.name != game.activeTurn.name);
        displayActivePlayer(); //indicates who's turn is it
        hasWinner = checkWinner();
        if (hasWinner) {
            let winner = game.registerScore(hasWinner);
            scorePlayerX.innerHTML = winner.player1;
            scorePlayerO.innerHTML = winner.player2;
            scoreTie.innerHTML = winner.tie;
        }
        if (hasWinner && hasWinner != "Tie") {
            showResult(`${hasWinner.icon} Won!`);
        }
        if (hasWinner === "Tie") {
            showResult("It's a Tie!");
        }
    } else {
        
    }
}

//When User clicks on Restart button
resetBtn.addEventListener("click", () => {
    //on going game, confirms if the User wants to restart
    confirmReset.showModal();
});
//if User give up on restarting the board
noResetBtn.addEventListener("click", () => {
    confirmReset.close(); //closes the Modal
});
//When the user wants to reset the game
confirmBtn.addEventListener("click", () => {
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
    drawingSound();
    let gameDiv = document.querySelector(".game");
    gameDiv.style.visibility = "visible";
    for (let child of boardGame.children) { // should I reference boardGame in another way?
        child.classList.add("game-on");
    }
    displayActivePlayer(); //indicates who's turn is it
}
// cleans the spots
function resetBoard(option) {
    if (!option) { //to avoid undefined error when option is empty
        option = "";
    }
    if (hasWinner || option.toLowerCase() === "yes") {
        const positions = document.querySelectorAll(".board-game div");
        positions.forEach(element => {
            if (element.children.length) { //if it was populated
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
    if (positions[0].children.length && positions[1].children.length && positions[2].children.length) { // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[1].children[0].innerHTML &&
            positions[0].children[0].innerHTML === positions[2].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Middle Row
    if (positions[3].children.length && positions[4].children.length && positions[5].children.length) { // Make sure there's a child tag to handle
        if (positions[3].children[0].innerHTML === positions[4].children[0].innerHTML &&
            positions[3].children[0].innerHTML === positions[5].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[3].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Bottom Row
    if (positions[6].children.length && positions[7].children.length && positions[8].children.length) { // Make sure there's a child tag to handle
        if (positions[6].children[0].innerHTML === positions[7].children[0].innerHTML &&
            positions[6].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[6].children[0].innerHTML;
            });
            return winner;
        }
    }
    //First Column
    if (positions[0].children.length && positions[3].children.length && positions[6].children.length) { // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[3].children[0].innerHTML &&
            positions[0].children[0].innerHTML === positions[6].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Second Column
    if (positions[1].children.length && positions[4].children.length && positions[7].children.length) { // Make sure there's a child tag to handle
        if (positions[1].children[0].innerHTML === positions[4].children[0].innerHTML &&
            positions[1].children[0].innerHTML === positions[7].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[1].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Third Column
    if (positions[2].children.length && positions[5].children.length && positions[8].children.length) { // Make sure there's a child tag to handle
        if (positions[2].children[0].innerHTML === positions[5].children[0].innerHTML &&
            positions[2].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[2].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Diagonal 
    if (positions[0].children.length && positions[4].children.length && positions[8].children.length) { // Make sure there's a child tag to handle
        if (positions[0].children[0].innerHTML === positions[4].children[0].innerHTML &&
            positions[0].children[0].innerHTML === positions[8].children[0].innerHTML) {
            let winner = game.players.find(player => {
                return player.icon === positions[0].children[0].innerHTML;
            });
            return winner;
        }
    }
    //Counter-Diagonal 
    if (positions[2].children.length && positions[4].children.length && positions[6].children.length) { // Make sure there's a child tag to handle
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
        if (element.children.length === 1) {
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
    playSuccess();
    gameResult.showModal();
}

function displayActivePlayer() {
    document.querySelector(".active-player > span").innerHTML = game.activeTurn.icon;

}

/** Audio Copy rights
 * from https://css-tricks.com/form-validation-web-audio/
 */
function playSuccess() {
    const context = new window.AudioContext();
    const successNoise = context.createOscillator();
    successNoise.frequency = "600";
    successNoise.type = "sine";
    successNoise.frequency.exponentialRampToValueAtTime(
        800,
        context.currentTime + 0.05
    );
    successNoise.frequency.exponentialRampToValueAtTime(
        1000,
        context.currentTime + 0.15
    );

    successGain = context.createGain();
    successGain.gain.exponentialRampToValueAtTime(
        0.01,
        context.currentTime + 0.3
    );

    successFilter = context.createBiquadFilter("bandpass");
    successFilter.Q = 0.01;

    successNoise
        .connect(successFilter)
        .connect(successGain)
        .connect(context.destination);
    successNoise.start();
    successNoise.stop(context.currentTime + 0.2);
}

/** Audio from
 *  https://pixabay.com/sound-effects/drawing-sound-36896/
 */
function drawingSound() {
    //create the audio element
    const audio = new Audio();
    audio.src = "./assets/drawing-sound.mp3";
    audio.type = "audio/mpeg";
    audio.preload = "auto";
    audio.addEventListener('loadedmetadata', () => { // Ensures the browser has the metadata before trying to change the currentTime
        audio.currentTime = 2.2;
        audio.play();
        setTimeout(() => {
            audio.currentTime = 2.2;
            audio.play();
        }, 1000);
    });
    
    document.querySelector("body").appendChild(audio);
}



/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
 * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event
 * 
 */