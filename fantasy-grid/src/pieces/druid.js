import Character from './character.js';

export default class Druid extends Character {
    constructor(player) {
        super(player, "D", (player === 1? "red" : "blue"))
    }      
};
 
/*move anywhere as long as space is empty, and within the range of the player movement.*/