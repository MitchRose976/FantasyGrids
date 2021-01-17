class Character {
    constructor(name, HP, movement, attack, defence) {
        this._name = name;
        this._HP = HP;
        this._movement = movement;
        this._attack = attack;
        this._defence = defence;
    }
    get name() {
        return this._name;
    }
    get HP() {
        return this._HP;
    }
    set HP(value) {
        this._HP = value;
    }
    get movement() {
        return this._movement;
    }
    get attack() {
        return this._attack;
    }
    get defence() {
        return this._defence;
    }
    Attack(target) {
        let damage = //TBD;
        target.HP -= damage;
        if (target._HP < 0) {
            target._HP = 0;
        }
        console.log(`${damage}`);
    }
};

class Paladin extends Character {
    constructor(name, HP, movement, attack, defence);
        super(name, HP, movement, attack, defence);
    }
    /*Class specific skill
    //Skill() {
        //TBD
    }*/ 

class Druid extends Character {
    constructor(name, HP, movement, attack, defence);
        super(name, HP, movement, attack, defence);
    }
    //Class specific skill
    /*Skill() {
        //TBD
    }*/

//provide feedback