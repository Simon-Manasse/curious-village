import CanvasUtil from './CanvasUtil.js';
import Dialogs from './Dialog manager/Dialogs.js';
import GameplayScene from './GameplayScene.js';
import KeyListener from './KeyListener.js';
import Village from './Village.js';
import Wolf from './Wolf.js';
import WorldItem from './WorldItem.js';
import Rabbits from './Rabbits.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
var WorldItems;
(function (WorldItems) {
    WorldItems["topSprites"] = "./Assets/Mountain/Top-sprites.png";
    WorldItems["slopeCliff"] = "./Assets/Mountain/Slope-cliff.png";
    WorldItems["rightCliffBottom"] = "./Assets/Mountain/Right-cliff-bottom.png";
    WorldItems["rightCliffMiddle"] = "./Assets/Mountain/Right-cliff-middle.png";
    WorldItems["rock1"] = "./Assets/Mountain/Rock1.png";
    WorldItems["rock2"] = "./Assets/Mountain/Rock2.png";
    WorldItems["rock3"] = "./Assets/Mountain/Rock3.png";
    WorldItems["rock4"] = "./Assets/Mountain/Rock4.png";
    WorldItems["rock5"] = "./Assets/Mountain/Rock5.png";
    WorldItems["rock6"] = "./Assets/Mountain/Rock6.png";
    WorldItems["tree1"] = "./Assets/Mountain/Tree1.png";
    WorldItems["tree2"] = "./Assets/Mountain/Tree2.png";
    WorldItems["skull1"] = "./Assets/Mountain/Skull1.png";
    WorldItems["meat"] = "./Assets/Mountain/meat.png";
})(WorldItems || (WorldItems = {}));
export default class Mountain extends GameplayScene {
    rabbits = [];
    constructor(maxX, maxY, playerX, playerY) {
        super(maxX, maxY, playerX, playerY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Mountain/Background.png');
        this.placeWorldItems();
        this.animal = new Wolf(1000, 400);
        this.animalName = 'Wolf';
        this.rabbits.push(new Rabbits(350, -10, 0));
        this.rabbits.push(new Rabbits(707, 605, 1));
        this.rabbits.push(new Rabbits(520, 100, 2));
        this.animalTextDebug = Dialogs.wolfDialogs;
    }
    placeWorldItems() {
        this.worldItems.push(new WorldItem(0, 0, WorldItems.topSprites));
        this.worldItems.push(new WorldItem(330, this.maxY - 421, WorldItems.slopeCliff));
        this.worldItems.push(new WorldItem(this.maxX - 599, this.maxY - 203, WorldItems.rightCliffBottom));
        this.worldItems.push(new WorldItem(this.maxX - 376, this.maxY - 364, WorldItems.rightCliffMiddle));
        this.worldItems.push(new WorldItem(this.maxX - 72, this.maxY - 525, WorldItems.rightCliffMiddle));
        this.worldItems.push(new WorldItem(this.maxX - 175, this.maxY - 500, WorldItems.rock1));
        this.worldItems.push(new WorldItem(this.maxX - 380, this.maxY - 340, WorldItems.rock2));
        this.worldItems.push(new WorldItem(650, this.maxY - 70, WorldItems.rock3));
        this.worldItems.push(new WorldItem(450, this.maxY - 250, WorldItems.rock4));
        this.worldItems.push(new WorldItem(150, 160, WorldItems.rock5));
        this.worldItems.push(new WorldItem(30, 400, WorldItems.tree1));
        this.worldItems.push(new WorldItem(450, this.maxY - 170, WorldItems.tree2));
        this.worldItems.push(new WorldItem(255, 470, WorldItems.skull1));
        this.worldItems.push(new WorldItem(65, 320, WorldItems.rock6));
        this.worldItems.push(new WorldItem(770, this.maxY - 100, WorldItems.rock6));
        this.worldItems.push(new WorldItem(950, 450, WorldItems.meat));
    }
    update(elapsed) {
        if (QuestRestrictions.canSpawnWolf() && QuestRestrictions.canTalkToWolf()) {
            this.canInteract = this.player.isCloseToAnimal(this.animal);
        }
        this.setPositionsOfPlayer();
        this.player.update(elapsed);
        this.rabbits.forEach((rabbit) => rabbit.update(elapsed));
        this.animal.update(elapsed);
        this.checkForCollision();
        if (this.player.getPosY() + this.player.getHeight() > this.maxY)
            return new Village(this.maxX, this.maxY, 350, 0);
        return null;
    }
    playerMovement(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_W))
            this.player.move(0);
        else if (keyListener.isKeyDown(KeyListener.KEY_D))
            this.player.move(1);
        else if (keyListener.isKeyDown(KeyListener.KEY_S))
            this.player.move(2);
        else if (keyListener.isKeyDown(KeyListener.KEY_A)
            && this.player.getPosX() > 10)
            this.player.move(3);
        if (!keyListener.isKeyDown(KeyListener.KEY_W)
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
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
        this.worldItems.forEach((item) => item.render(canvas));
        if (QuestRestrictions.canSpawnWolf()) {
            this.animal.render(canvas);
        }
        this.player.render(canvas);
        this.rabbits.forEach((rabbit) => rabbit.render(canvas));
        this.map.showMap(canvas, 4);
        if (this.canInteract)
            CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
    }
}
//# sourceMappingURL=Mountain.js.map