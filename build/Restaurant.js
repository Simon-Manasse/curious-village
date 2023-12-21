import GameplayScene from './GameplayScene.js';
import CanvasUtil from './CanvasUtil.js';
import Lake from './Lake.js';
import KeyListener from './KeyListener.js';
import Raccoon from './Raccoon.js';
import Dialogs from './Dialog manager/Dialogs.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import GameMusic from './GameMusic.js';
export default class Restaurant extends GameplayScene {
    constructor(maxX, maxY, playerX = maxX / 2 - 25, playerY = maxY - 110) {
        super(maxX, maxY, playerX, playerY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Interior/bar.png');
        this.animal = new Raccoon(700, 220);
        this.animalName = 'Raccon';
        this.animalTextDebug = Dialogs.racoonDialogs;
        GameMusic.setMusicSource('./Sounds/Restaurant.mp3');
    }
    playerMovement(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_W)
            && this.player.getPosY() > 310)
            this.player.move(0);
        else if (keyListener.isKeyDown(KeyListener.KEY_D)
            && this.player.getPosX() < 950)
            this.player.move(1);
        else if ((keyListener.isKeyDown(KeyListener.KEY_S)
            && this.player.getPosY() + this.player.getHeight() < this.maxY - 40)
            || (keyListener.isKeyDown(KeyListener.KEY_S)
                && this.player.getPosX() > 660
                && this.player.getPosX() < 815))
            this.player.move(2);
        else if (keyListener.isKeyDown(KeyListener.KEY_A)
            && this.player.getPosX() > 500)
            this.player.move(3);
        else if (!keyListener.isKeyDown(KeyListener.KEY_W)
            && !keyListener.isKeyDown(KeyListener.KEY_A)
            && !keyListener.isKeyDown(KeyListener.KEY_S)
            && !keyListener.isKeyDown(KeyListener.KEY_D)) {
            this.player.nullTheDirection();
        }
        if (keyListener.isKeyDown(KeyListener.KEY_SHIFT_LEFT)) {
            this.player.setSpeed(6);
        }
        else {
            this.player.setSpeed(4);
        }
    }
    update(elapsed) {
        if (QuestRestrictions.canSpawnRacoon() && QuestRestrictions.canTalkToRacoon()) {
            this.canInteract = this.player.isCloseToAnimal(this.animal);
        }
        this.player.update(elapsed);
        if (this.player.getPosY() + this.player.getHeight() > this.maxY - 10
            && (this.player.getPosX() > 660
                && this.player.getPosX() < 815)) {
            GameMusic.setMusicSource('./Sounds/MainMusic.wav');
            return new Lake(this.maxX, this.maxY, 455, 410);
        }
        this.animal.update(elapsed);
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.fillCanvas(canvas, '#260b2d');
        CanvasUtil.drawImage(canvas, this.backgroundImage, 116.5, 0);
        if (QuestRestrictions.canSpawnRacoon()) {
            this.animal.render(canvas);
        }
        this.player.render(canvas);
        if (this.canInteract)
            CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
    }
    placeWorldItems() {
    }
}
//# sourceMappingURL=Restaurant.js.map