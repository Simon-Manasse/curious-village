import BoyCharacterButton from './BoyCharacterButton.js';
import CanvasUtil from './CanvasUtil.js';
import ElfCharacterButton from './ElfCharacterButton.js';
import GameMusic from './GameMusic.js';
import GirlCharacterButton from './GirlCharacterButton.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import StartButton from './StartButton.js';
import Tutorial from './Tutorial.js';
export default class Start extends Scene {
    startButton;
    girlButton;
    elfButton;
    boyButton;
    selectedCharacter;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/StartingScreenTutorial/StartingScreen.png');
        this.startButton = new StartButton();
        this.girlButton = new GirlCharacterButton();
        this.elfButton = new ElfCharacterButton();
        this.boyButton = new BoyCharacterButton();
        this.selectedCharacter = 1;
        this.gameContinue = false;
        GameMusic.setMusicSource('./Sounds/TitleScreen.wav');
        GameMusic.playMusic();
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
            Scene.setCharacterNumber(this.selectedCharacter);
            this.gameContinue = true;
        }
        this.startButton.getImage().addEventListener('click', e => {
            Scene.setCharacterNumber(this.selectedCharacter);
            this.gameContinue = true;
        });
        this.girlButton.getImage().addEventListener('click', e => this.selectedCharacter = 1);
        this.elfButton.getImage().addEventListener('click', e => this.selectedCharacter = 2);
        this.boyButton.getImage().addEventListener('click', e => this.selectedCharacter = 3);
    }
    update(elapsed) {
        if (this.gameContinue) {
            this.startButton.deleteButtons();
            this.girlButton.deleteButtons();
            this.boyButton.deleteButtons();
            this.elfButton.deleteButtons();
            return new Tutorial(this.maxX, this.maxY);
        }
        return null;
    }
    getCharacterNumber() {
        return this.selectedCharacter;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, -14, 0);
        if (this.selectedCharacter === 1) {
            CanvasUtil.writeTextToCanvas(canvas, 'SELECTED', 213, 190, 'center', 'monogramextended', 100, 'black');
        }
        if (this.selectedCharacter === 2) {
            CanvasUtil.writeTextToCanvas(canvas, 'SELECTED', 770, 190, 'center', 'monogramextended', 100, 'black');
        }
        if (this.selectedCharacter === 3) {
            CanvasUtil.writeTextToCanvas(canvas, 'SELECTED', 1327, 190, 'center', 'monogramextended', 100, 'black');
        }
    }
}
//# sourceMappingURL=Start.js.map