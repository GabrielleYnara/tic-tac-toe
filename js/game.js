class Game {
    constructor(players) { //array of players
        this.players = players;
        this.score = {
            player1: 0,
            player2: 0,
            tie: 0
        };
        this.activeTurn = players[0];
    }

    verifyPlayers() {
        if (this.players.length() != 2)
        return alert("You need two players");
    }

    registerScore(winner) {
        console.log(winner)
        console.log(winner === this.players[0]);
        switch(winner) {
            case this.players[0]:
                this.score.player1++;
                break;
            case this.players[1]:
                this.score.player2++;
                break;
            case "Tie":
                this.score.tie++;
                break;
        }
        return this.score;
    }
}