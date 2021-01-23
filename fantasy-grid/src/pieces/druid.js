import Character from './character.js';
import Paladin from './paladin.js';

export default class Druid extends Character {
    movementSpeed = 3;
    characterHP = 100;
    attackDamage = Math.floor(Math.random() * 30) + 1;
    constructor(player) {
        super(player, "D", (player === 1? "red" : "blue"))
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
    isAttackPossible(src, dest, squares) {
        let possibleAttackArray = [];
        possibleAttackArray.push(src + 8 === dest
                                ,src - 8 === dest
                                ,src + 1 === dest
                                ,src - 1 === dest);
        for (let i = 0; i < possibleAttackArray.length; i++) {
            //need to check if any of the squares in possibleAttackArray contain an enemy
            if (possibleAttackArray[i] = squares) {
                //if attack square is occupied by enemy, need to return the enemy character as target for attack method ex.(target = enemy.character)
               // Paladin.Attack(target); 
            } else {
                //end turn
            }
        }
        
    }
    Attack(target) {
        target.HP -= Paladin.attackDamage;
        if (target.HP < 0) {
            target.HP = 0
        }
    }      
};
 


/*
Character attack Method - 
1. determine if there is an attack to be made (for paladin, this would be any square to the front, behind, left or right)
2. if attack can be made, initialize attack and set enemy HP - attackDamage
3.
*/