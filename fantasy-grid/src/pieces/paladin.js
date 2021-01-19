import Character from './character.js';

class Paladin extends Character {
    constructor(player) {
        super(player, "P", (player === 1? "background-color: red" : "background-color: blue"))
    }      
};