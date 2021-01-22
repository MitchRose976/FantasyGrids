export default class Character {
    constructor(player, characterIdentifier, playerColor, characterHP) {
        this.player = player;
        this.characterIdentifier = characterIdentifier;
        this.style = {backgroundColor: playerColor};
        this.playerHP = playerHP;
    }
    get characterHP() {
        return this.characterHP;
    }
    set characterHP(value) {
        this.characterHP = value;
    }
};