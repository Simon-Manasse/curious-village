import AnswerHandler from './AnswerHandler.js';
import CanvasUtil from './CanvasUtil.js';
import EndingTitles from './EndingTitles.js';
import GameMusic from './GameMusic.js';
import Scene from './Scene.js';
export default class BadEnding extends Scene {
    glitchPhases = ['./Assets/Glitch/glitchOne.png', './Assets/Glitch/normalColor.png', './Assets/Glitch/normal.png', './Assets/Glitch/glitchTwo.png', './Assets/Glitch/blueScreen.png', './Assets/Glitch/blackScreen.png'];
    glitchNumber = 0;
    glitchPicture;
    timeToChange;
    nextLetter;
    indexes = [1, -23, -47, -62, -80, -103, -108, -116];
    lines = ['user.hackInit(Getdata);', 'Hack loading: [///////];', 'user.getName();', 'user.getAddress();', 'user.getBirthdayDate();', 'Name:', 'Address:', 'Birthday:'];
    typers = [];
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.glitchNumber = 0;
        this.timeToChange = 300;
        this.glitchPicture = CanvasUtil.loadNewImage(this.glitchPhases[this.glitchNumber]);
        this.nextLetter = 2900;
        GameMusic.setMusicSource('./Sounds/Glitch.mp3');
        document.body.style.cursor = 'none';
    }
    processInput(keyListener) {
        return null;
    }
    update(elapsed) {
        this.timeToChange -= elapsed;
        this.nextLetter -= elapsed;
        if (this.nextLetter < 0 && this.indexes[7] <= 150) {
            this.nextLetter = 20;
            for (let i = 0; i < this.indexes.length; i++) {
                this.indexes[i] += 1;
            }
            for (let j = 0; j < 8; j++) {
                if (this.indexes[j] > this.lines[j].length || this.indexes[j] <= 0) {
                    this.typers[j] = `${this.lines[j].substring(0, this.indexes[j])}`;
                }
                else {
                    this.typers[j] = `${this.lines[j].substring(0, this.indexes[j])}|`;
                }
            }
        }
        if (this.indexes[7] >= 149)
            return new EndingTitles(this.maxX, this.maxY);
        return null;
    }
    nextImage() {
        const bccolor = document.getElementById('colorpls');
        if (this.timeToChange <= 0) {
            if (this.glitchNumber >= 5) {
                this.glitchNumber = 5;
            }
            else {
                this.glitchNumber += 1;
            }
            this.glitchPicture = CanvasUtil.loadNewImage(this.glitchPhases[this.glitchNumber]);
            if (this.glitchNumber === 2 || this.glitchNumber === 4) {
                this.timeToChange = 1000;
            }
            else {
                this.timeToChange = 300;
            }
        }
        if (this.glitchNumber >= 4) {
            bccolor.style.backgroundColor = '#1173aa';
            document.documentElement.requestFullscreen();
            GameMusic.setMusicSource('');
        }
        if (this.glitchNumber >= 5) {
            bccolor.style.backgroundColor = 'black';
        }
        return this.glitchPicture;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, 'black');
        for (let i = 0; i < this.glitchPhases.length; i++) {
            CanvasUtil.drawImage(canvas, this.nextImage(), 0, 0);
        }
        if (this.glitchNumber >= 5) {
            for (let i = 0; i < 8; i++) {
                CanvasUtil.writeTextToCanvas(canvas, `${this.typers[i]}`, 20, 40 + (i * 60), 'left', 'monogramextended', 50, 'lime');
            }
            if (this.indexes[5] > 5) {
                CanvasUtil.writeText(canvas, AnswerHandler.getName(), 160, 340, 'left', 'monogramextended', 50, 'Red');
            }
            if (this.indexes[6] > 8) {
                CanvasUtil.writeText(canvas, AnswerHandler.getAddress(), 220, 400, 'left', 'monogramextended', 50, 'Red');
            }
            if (this.indexes[7] >= 9) {
                CanvasUtil.writeText(canvas, AnswerHandler.getBirthday(), 245, 460, 'left', 'monogramextended', 50, 'Red');
                CanvasUtil.writeTextToCanvas(canvas, 'You have been HACKED', canvas.width / 2, 550, 'center', 'monogramextended', 90, 'red');
                CanvasUtil.writeTextToCanvas(canvas, 'We gathered all of your data and we will use it against you', canvas.width / 2, 650, 'center', 'monogramextended', 50, 'lime');
                CanvasUtil.writeTextToCanvas(canvas, 'There is nothing you can do now', canvas.width / 2, 720, 'center', 'monogramextended', 50, 'lime');
            }
        }
    }
}
//# sourceMappingURL=BadEnding.js.map