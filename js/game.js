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
}

/** References
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
 * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * 
 */