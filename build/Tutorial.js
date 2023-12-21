import CanvasUtil from './CanvasUtil.js';
import GameMusic from './GameMusic.js';
import KeyListener from './KeyListener.js';
import OkButton from './OkButton.js';
import Scene from './Scene.js';
import Village from './Village.js';
export default class Tutorial extends Scene {
    okButton;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/StartingScreenTutorial/tutorial.png');
        this.okButton = new OkButton();
        this.gameContinue = false;
    }
    processInput(keyListener) {
        this.okButton.getImage().addEventListener('click', (e) => {
            this.gameContinue = true;
            GameMusic.stopMusic();
            GameMusic.setMusicSource('./Sounds/MainMusic.wav');
        });
        if (keyListener.keyPressed(KeyListener.KEY_ENTER))
            this.gameContinue = true;
    }
    update(elapsed) {
        if (this.gameContinue) {
            this.okButton.deleteButtons();
            return new Village(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, '#693f56');
        CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
    }
}
//# sourceMappingURL=Tutorial.js.map