import CanvasUtil from './CanvasUtil.js';
import GameplayScene from './GameplayScene.js';
import Squirrel from './Squirrel.js';
import Village from './Village.js';
import BigCrocodile from './BigCrocodile.js';
import SmallCrocodile from './SmallCrocodile.js';
import KeyListener from './KeyListener.js';
import Dialogs from './Dialog manager/Dialogs.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import Frogs from './Frog.js';
export default class Swamp extends GameplayScene {
    npc;
    frogs = [];
    smallnpc;
    constructor(maxX, maxY, playerX, playerY) {
        super(maxX, maxY, playerX, playerY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Swamp/Swamp.jpg');
        this.animal = new Squirrel(190, 280);
        this.npc = new BigCrocodile(550, maxY - 80);
        this.smallnpc = new SmallCrocodile(1020, maxY - 200);
        this.frogs.push(new Frogs(1400, 410, 0));
        this.frogs.push(new Frogs(280, 327, 1));
        this.frogs.push(new Frogs(1050, 100, 2));
        this.animalName = 'Squirrel';
        this.animalTextDebug = Dialogs.squirellDialogs;
    }
    playerMovement(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_W)
            && this.player.getPosY() > 150)
            this.player.move(0);
        else if (keyListener.isKeyDown(KeyListener.KEY_D)
            && this.player.getPosX() < this.maxX)
            this.player.move(1);
        else if ((keyListener.isKeyDown(KeyListener.KEY_S)
            && this.player.getPosY() + this.player.getHeight() < 400))
            this.player.move(2);
        else if (keyListener.isKeyDown(KeyListener.KEY_A)
            && this.player.getPosX() > 300)
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
        if (QuestRestrictions.canSpawnSquirel() && QuestRestrictions.canTalkToSquirel()) {
            this.canInteract = this.player.isCloseToAnimal(this.animal);
        }
        this.setPositionsOfPlayer();
        this.animal.update(elapsed);
        this.npc.update(elapsed);
        this.smallnpc.update(elapsed);
        this.frogs.forEach((frog) => frog.update(elapsed));
        this.player.update(elapsed);
        if (this.player.getPosX() + this.player.getWidth() > this.maxX)
            return new Village(this.maxX, this.maxY, 0, this.maxY / 2 - 20);
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
        this.player.render(canvas);
        if (QuestRestrictions.canSpawnSquirel()) {
            this.animal.render(canvas);
        }
        this.npc.render(canvas);
        this.smallnpc.render(canvas);
        this.frogs.forEach((frog) => frog.render(canvas));
        this.map.showMap(canvas, 3);
        if (this.canInteract)
            CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
    }
    placeWorldItems() {
    }
}
//# sourceMappingURL=Swamp.js.map