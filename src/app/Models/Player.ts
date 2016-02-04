
class Player {



    id:number;
    teamId:number;
    name:string;
    position:string;
    state:string;

    constructor(id:number, teamId:number, name:string, position:string, state:string) {
        this.id = id;
        this.teamId = teamId;
        this.name = name;
        this.position = position;
        this.state = state;

    }
}

console.log(new Player(1,2,"name", "position", 'asea'));

