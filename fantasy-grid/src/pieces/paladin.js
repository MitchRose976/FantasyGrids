import Character from './character.js';

export default class Paladin extends Character {
    constructor(player) {
        super(player, "P", (player === 1? "red" : "blue"))
    }      
};   