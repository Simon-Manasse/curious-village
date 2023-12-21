import CanvasUtil from './CanvasUtil.js';
import Forest from './Forest.js';
import GameplayScene from './GameplayScene.js';
import Lake from './Lake.js';
import Mountain from './Mountain.js';
import Swamp from './Swamp.js';
import WorldItem from './WorldItem.js';
import Capybara from './Capybara.js';
import Chicken from './Chicken.js';
import Dialogs from './Dialog manager/Dialogs.js';
import House from './House.js';
import QuestManager from './Quests/QuestManager.js';
import Sheep from './Sheep.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
var WorldItems;
(function (WorldItems) {
    WorldItems["hillLeft"] = "./Assets/Village/Hill-left.png";
    WorldItems["bushesLeft"] = "./Assets/Village/Bushes-left.png";
    WorldItems["hillRight"] = "./Assets/Village/Hill-right.png";
    WorldItems["houseBlue"] = "./Assets/Village/House-blue.png";
    WorldItems["houseGreen"] = "./Assets/Village/House-green.png";
    WorldItems["houseOrange"] = "./Assets/Village/House-orange.png";
    WorldItems["houseRed"] = "./Assets/Village/House-red.png";
    WorldItems["houseYellow"] = "./Assets/Village/House-yellow.png";
    WorldItems["sign"] = "./Assets/Village/Sign.png";
    WorldItems["table"] = "./Assets/Village/Table.png";
    WorldItems["crops"] = "./Assets/Village/crops.png";
    WorldItems["crops2"] = "./Assets/Village/crops2.png";
    WorldItems["fence"] = "./Assets/Village/Fence.png";
    WorldItems["bushesHill"] = "./Assets/Village/BushesNextHill.png";
})(WorldItems || (WorldItems = {}));
export default class Village extends GameplayScene {
    sheep = [];
    chicken;
    createHouse;
    constructor(maxX, maxY, playerX = 120, playerY = maxY / 2 - 20) {
        super(maxX, maxY, playerX, playerY);
        this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Village/Background.png');
        this.placeWorldItems();
        this.animal = new Capybara(750, 330);
        this.animalName = 'Capybara';
        this.chicken = new Chicken(this.maxX - 160, this.maxY - 130);
        this.sheep.push(new Sheep(120, 550, 0));
        this.sheep.push(new Sheep(100, 610, 1));
        this.createHouse = false;
        this.animalTextDebug = Dialogs.capibaraDialogs;
    }
    placeWorldItems() {
        this.worldItems.push(new WorldItem(10, 0, WorldItems.bushesLeft));
        this.worldItems.push(new WorldItem(600, 0, WorldItems.hillLeft));
        this.worldItems.push(new WorldItem(1263, 0, WorldItems.hillRight));
        this.worldItems.push(new WorldItem(1090, 150, WorldItems.houseBlue));
        this.itemsBehindPlayer.push(new WorldItem(810, 450, WorldItems.houseGreen));
        this.itemsBehindPlayer.push(new WorldItem(200, 450, WorldItems.houseOrange));
        this.worldItems.push(new WorldItem(50, 35, WorldItems.houseRed));
        this.worldItems.push(new WorldItem(490, 80, WorldItems.houseYellow));
        this.worldItems.push(new WorldItem(710, 345, WorldItems.sign));
        this.worldItems.push(new WorldItem(384, 560, WorldItems.table));
        this.itemsBehindPlayer.push(new WorldItem(1143, 640, WorldItems.crops));
        this.itemsBehindPlayer.push(new WorldItem(948, 322, WorldItems.crops2));
        this.worldItems.push(new WorldItem(10, 530, WorldItems.fence));
        this.worldItems.push(new WorldItem(466, 0, WorldItems.bushesHill));
    }
    update(elapsed) {
        if (QuestRestrictions.canTalkToCapibara()) {
            this.canInteract = this.player.isCloseToAnimal(this.animal);
        }
        this.setPositionsOfPlayer();
        this.player.update(elapsed);
        if (this.player.getPosY() + this.player.getHeight() > this.maxY)
            return new Forest(this.maxX, this.maxY, this.maxX / 2 + 20);
        if (this.player.getPosX() + this.player.getWidth() > this.maxX)
            return new Lake(this.maxX, this.maxY, 0, this.maxY / 2 + 95);
        if (this.player.getPosY() < 0)
            return new Mountain(this.maxX, this.maxY, 130, this.maxY - this.player.getHeight());
        if (this.player.getPosX() < 0)
            return new Swamp(this.maxX, this.maxY, this.maxX - this.player.getWidth(), this.maxY / 2 - 170);
        this.animal.update(elapsed);
        this.chicken.update(elapsed);
        this.sheep.forEach((sheep) => sheep.update(elapsed));
        this.checkForCollision();
        this.itemsBehindPlayer.forEach((item) => {
            if (this.player.collidesWithWorldItem(item)
                && (item.getWorldItemSource().includes('/Assets/Village/crops2.png')
                    || item.getWorldItemSource().includes('Assets/Village/crops.png'))) {
                if (item.getPosY() + 20 < this.player.getPosY() + this.player.getHeight()
                    && this.player.getPosY() + this.player.getHeight()
                        < item.getPosY() + 30)
                    this.player.setTopSideOfCollision(true);
                if (item.getPosX() < this.player.getPosX() + this.player.getWidth()
                    && this.player.getPosX() + this.player.getWidth()
                        < item.getPosX() + 10)
                    this.player.setLeftSideOfCollision(true);
                if (item.getPosX() + item.getWidth() > this.player.getPosX()
                    && this.player.getPosX() > item.getPosX()
                        + item.getWidth() - 20)
                    this.player.setRightSideOfCollision(true);
            }
        });
        this.worldItems.forEach((item) => {
            if (this.player.collidesWithWorldItem(item)
                && item.getWorldItemSource().includes('House-red.png')
                && this.player.getPosX() > item.getPosX() + 50
                && this.player.getPosX() < item.getPosX() + item.getWidth() - 155
                && this.player.getPosY() < item.getPosY() + item.getHeight() - 40)
                this.createHouse = true;
        });
        if (this.createHouse)
            return new House(this.maxX, this.maxY);
        return QuestManager.checkIfShouldEnd(this.maxX, this.maxY);
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
        this.worldItems.forEach((item) => (item.render(canvas)));
        this.animal.render(canvas);
        this.chicken.render(canvas);
        this.player.render(canvas);
        this.chicken.render(canvas);
        this.sheep.forEach((sheep) => sheep.render(canvas));
        this.itemsBehindPlayer.forEach((item) => (item.render(canvas)));
        if (this.canInteract)
            CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
        this.map.showMap(canvas, 0);
    }
}
//# sourceMappingURL=Village.js.map