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