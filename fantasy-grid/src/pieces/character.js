export default class Character {
    constructor(player, characterIdentifier, playerColor) {
        this.player = player;
        this.characterIdentifier = characterIdentifier;
        this.style = {backgroundColor: playerColor};
    }
};