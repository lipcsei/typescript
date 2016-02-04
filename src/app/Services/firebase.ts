
import * as FB from 'firebase';

class DB{

    conn : Firebase;

    constructor() {

        this.conn = new FB("https://lipi.firebaseio.com/")
    }

}

var db = new DB();

console.log(db);