import Character from './character.js';

export default class Druid extends Character {
    movementSpeed = 3;
    characterHP = 100;
    attackDamage = Math.floor(Math.random() * 30) + 1;
    constructor(player) {
        super(player, "D", (player === 1? "red" : "blue"), this.characterHP)
    }

    isMovePossible(src, dest){
        let possibleMoveArray = [];
        for (let i = this.movementSpeed; i > 0; i--) {
          possibleMoveArray.push(src - (9 * (i - 1))  
                                ,src - (8 * i)   
                                ,src - (7 *  (i - 1))   
                                ,src + (1 * i)   
                                ,src + (9 * (i - 1))   
                                ,src + (8 * i)   
                                ,src + (7 * (i - 1))   
                                ,src - (1 * i))
      }
      return possibleMoveArray.includes(dest);
        }
          
        getSrcToDestPath(src, dest){
          return [];
        }      
};
 
/*move anywhere as long as space is empty, and within the range of the player movement.*/