import CanvasUtil from './CanvasUtil.js';
import Dialogs from './Dialog manager/Dialogs.js';
import Fox from './Fox.js';
import GameplayScene from './GameplayScene.js';
import Flower from './Quests/Flower.js';
import QuestManager from './Quests/QuestManager.js';
import KeyListener from './KeyListener.js';
import Village from './Village.js';
import WorldItem from './WorldItem.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import Unicorn from './Unicorn.js';
import Gnomes from './Gnomes.js';
var WorldItems;
(function (WorldItems) {
    WorldItems["leftCliffTrees"] = "./Assets/Forest/Left-cliff-trees.png";
    WorldItems["cliffLeft"] = "./Assets/Forest/Cliff-left.png";
    WorldItems["treesRight"] = "./Assets/Forest/Trees-right.png";
    WorldItems["lake"] = "./Assets/Forest/Lake.png";
    WorldItems["rightCliffTrees"] = "./Assets/Forest/Right-cliff-trees.png";
    WorldItems["tent"] = "./Assets/Forest/Tent.png";
    WorldItems["littleChair"] = "./Assets/Forest/Little-chair.png";
    WorldItems["flower"] = "./Assets/QuestItems/flower.png";
})(WorldItems || (WorldItems = {}));
export default class Forest extends GameplayScene {
    unicorn;
    gnomes = [];
    constructor(maxX, maxY, playerX, playerY = 0) {
        super(maxX, maxY, playerX, playerY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Forest/Background.png');
        this.gnomes.push(new Gnomes(1280, 510, 0));
        this.gnomes.push(new Gnomes(1080, 260, 1));
        this.gnomes.push(new Gnomes(900, 300, 2));
        this.placeWorldItems();
        this.animal = new Fox(600, 500);
        this.animalName = 'Fox';
        this.flower = new Flower(560, 300, WorldItems.flower);
        this.unicorn = new Unicorn(1160, 60);
        this.animalTextDebug = Dialogs.foxDialogs;
    }
    placeWorldItems() {
        this.worldItems.push(new WorldItem(0, 0, WorldItems.leftCliffTrees));
        this.worldItems.push(new WorldItem(0, this.maxY - 416, WorldItems.cliffLeft));
        this.worldItems.push(new WorldItem(this.maxX - 130, 0, WorldItems.treesRight));
        this.worldItems.push(new WorldItem(1010, 200, WorldItems.lake));
        this.worldItems.push(new WorldItem(this.maxX - 381, this.maxY - 279, WorldItems.rightCliffTrees));
        this.worldItems.push(new WorldItem(450, 400, WorldItems.tent));
        this.worldItems.push(new WorldItem(660, 600, WorldItems.littleChair));
    }
    playerMovement(keyListener) {
        if (keyListener.isKeyDown(KeyListener.KEY_W))
            this.player.move(0);
        else if (keyListener.isKeyDown(KeyListener.KEY_D))
            this.player.move(1);
        else if (keyListener.isKeyDown(KeyListener.KEY_S)
            && this.player.getPosY() + this.player.getHeight() < this.maxY - 40)
            this.player.move(2);
        else if (keyListener.isKeyDown(KeyListener.KEY_A))
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
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            if (this.canPickUpFlower && !this.canPickUpFish) {
                QuestManager.pickUpflower(this.flower);
                this.canPickUpFlower = false;
                const pickup = new Audio('./Sounds/PickUp.mp3');
                pickup.play();
                QuestManager.startNewQuest();
            }
            if (this.canPickUpFish && !this.canPickUpFlower) {
                QuestManager.pickUpFish(this.fish);
                this.canPickUpFish = false;
            }
        }
    }
    update(elapsed) {
        this.gnomes.forEach((gnome) => gnome.update(elapsed));
        if (QuestRestrictions.canSpawnFox() && QuestRestrictions.canTalkToFox()) {
            this.canInteract = this.player.isCloseToAnimal(this.animal);
        }
        if (QuestManager.canSpawnQuestItem(this.flower)) {
            this.canPickUpFlower = this.player.collidesWithWorldItem(this.flower);
        }
        this.setPositionsOfPlayer();
        this.player.update(elapsed);
        this.animal.update(elapsed);
        this.unicorn.update(elapsed);
        this.checkForCollision();
        if (this.player.getPosY() < 0)
            return new Village(this.maxX, this.maxY, this.maxX / 2 - 100, this.maxY - this.player.getHeight());
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
        this.worldItems.forEach((item) => item.render(canvas));
        this.gnomes.forEach((gnome) => gnome.render(canvas));
        if (QuestRestrictions.canSpawnFox()) {
            this.animal.render(canvas);
        }
        this.player.render(canvas);
        if (QuestManager.canSpawnQuestItem(this.flower)) {
            this.flower.render(canvas);
        }
        this.unicorn.render(canvas);
        if (this.canPickUpFlower)
            CanvasUtil.drawImage(canvas, this.buttonSpace, this.player.getPosX() - 27, this.player.getPosY() - 70);
        if (this.canInteract)
            CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
        this.map.showMap(canvas, 1);
    }
}
//# sourceMappingURL=Forest.js.map