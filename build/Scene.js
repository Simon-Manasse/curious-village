export default class Scene {
    backgroundImage;
    maxX;
    maxY;
    gameContinue;
    static characterNumber;
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
    }
    static setCharacterNumber(number) {
        this.characterNumber = number;
    }
}
//# sourceMappingURL=Scene.js.map