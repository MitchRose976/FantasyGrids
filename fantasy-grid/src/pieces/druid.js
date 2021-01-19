import Character from './character.js';

class Druid extends Character {
    constructor(player) {
        super(player, "D", (player === 1? "background-color: red" : "background-color: blue"))
    }      
};

/*move anywhere as long as space is empty, and within the range of the player movement.*/