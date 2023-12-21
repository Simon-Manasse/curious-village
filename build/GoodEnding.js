import CanvasUtil from './CanvasUtil.js';
import EndingTitles from './EndingTitles.js';
import GameMusic from './GameMusic.js';
import Scene from './Scene.js';
export default class GoodEnding extends Scene {
    firstLine;
    secondLine;
    thirdLine;
    timeToNextLetter;
    colorIntensity;
    backImage;
    firstIndex;
    secondIndex;
    thirdIndex;
    typerOne;
    typerTwo;
    typerThree;
    playedSound;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.colorIntensity = 0;
        this.firstIndex = 1;
        this.secondIndex = -21;
        this.thirdIndex = -54;
        this.backImage = CanvasUtil.loadNewImage('./Assets/Interior/house.png');
        this.firstLine = 'Thank you for playing!';
        this.secondLine = 'You successfully saved your data!';
        this.thirdLine = "They didn't get ya!";
        this.timeToNextLetter = 1000;
        this.playedSound = false;
    }
    processInput(keyListener) {
        return null;
    }
    update(elapsed) {
        if (this.colorIntensity <= 5000) {
            this.colorIntensity += elapsed * 2;
        }
        this.timeToNextLetter -= elapsed;
        if (this.timeToNextLetter < 0 && this.colorIntensity >= 5000) {
            this.timeToNextLetter = 100;
            this.firstIndex += 1;
            this.secondIndex += 1;
            this.thirdIndex += 1;
            if (this.firstIndex >= 22) {
                this.typerOne = `${this.firstLine.substring(0, this.firstIndex)}`;
            }
            else {
                this.typerOne = `${this.firstLine.substring(0, this.firstIndex)}_`;
            }
            if (this.secondIndex >= 32 || this.secondIndex < 0) {
                this.typerTwo = `${this.secondLine.substring(0, this.secondIndex)}`;
            }
            else {
                this.typerTwo = `${this.secondLine.substring(0, this.secondIndex)}_`;
            }
            if (this.thirdIndex >= 19 || this.thirdIndex < 0) {
                this.typerThree = `${this.thirdLine.substring(0, this.thirdIndex)}`;
            }
            else {
                this.typerThree = `${this.thirdLine.substring(0, this.thirdIndex)}_`;
            }
        }
        if (this.thirdIndex >= 20) {
            return new EndingTitles(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, '#260b2d');
        CanvasUtil.drawImage(canvas, this.backImage, 116.5, 0);
        CanvasUtil.transparentRectangle(canvas, 0, 0, canvas.width, canvas.height, '#000000', this.colorIntensity / 5000);
        if (this.colorIntensity >= 5000) {
            if (!this.playedSound) {
                GameMusic.setMusicSource('./Sounds/Keyboard.mp3');
                this.playedSound = true;
            }
            CanvasUtil.writeTextToCanvas(canvas, `${this.typerOne}`, canvas.width / 3, canvas.height / 3, 'left', 'monogramextended', 50, 'white');
            CanvasUtil.writeTextToCanvas(canvas, `${this.typerTwo}`, (canvas.width / 3) - 95, canvas.height / 2, 'left', 'monogramextended', 50, 'white');
            CanvasUtil.writeTextToCanvas(canvas, `${this.typerThree}`, (canvas.width / 3) + 40, canvas.height - 250, 'left', 'monogramextended', 50, 'white');
        }
    }
}
//# sourceMappingURL=GoodEnding.js.map