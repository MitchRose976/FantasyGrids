import Character from './character.js';

export default class Paladin extends Character {
    movementSpeed = 2;
    characterHP = 150;
    attackDamage = Math.floor(Math.random() * 30) + 1;
    constructor(player) {
        super(player, "P", (player === 1? "red" : "blue"))
    }
    //up: - 8, diagonalLeft: - 9, diagonalRight: - 7, down: +8, downDL: +7, downDR: +9 
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
              Paladin.Attack(target); 
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

     
/*movementspeed is upper limit. Need to find every value in reverse excluding zero. 
Then allow player to use those numbers for movement. No method change, code is 
repeatable
*/

/*
isMovePossible(src, dest){
  return (src - (9 * this.movementSpeed) === dest || 
    src - (8 * this.movementSpeed) === dest || 
    src - (7 * this.movementSpeed) === dest || 
    src + (1 * this.movementSpeed) === dest || 
    src + (9 * this.movementSpeed) === dest || 
    src + (8 * this.movementSpeed) === dest || 
    src + (7 * this.movementSpeed) === dest || 
    src - (1 * this.movementSpeed) === dest);
}
getSrcToDestPath(src, dest){
  return [];
}
*/