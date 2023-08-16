class User {
    constructor(name, icon){
        this.name = name;
        this.icon = icon;
        this.matches = {// counter to store future match results
            won: 0,
            lost: 0,
            tie: 0
        }; 
    }

    //Increments match counter according to the match result
    addMatch(result){
        switch(result){
            case 'won':
                this.matches.won++;
                break;
            case 'lost':
                this.matches.lost++;
                break;
            case 'tie':
                this.matches.tie++;
                break;
        }
    }
}