/* eslint-disable max-len */
import CanvasUtil from './CanvasUtil.js';
import Dialogs from './Dialog manager/Dialogs.js';
import Duck from './Duck.js';
import GameplayScene from './GameplayScene.js';
import Hedgehog from './Hedgehog.js';
import KeyListener from './KeyListener.js';
import Fish from './Quests/Fish.js';
import QuestManager from './Quests/QuestManager.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import Restaurant from './Restaurant.js';
import Scene from './Scene.js';
import Village from './Village.js';
import WorldItem from './WorldItem.js';

enum WorldItems {
  boat = './Assets/Lake/Boat.png',
  fence = './Assets/Lake/Fence.png',
  hillLeft = './Assets/Lake/Hill-left.png',
  hillRight = './Assets/Lake/Hill-right.png',
  lakeBottom = './Assets/Lake/Lake-bottom.png',
  lakeTop = './Assets/Lake/Lake-top.png',
  restaurant = './Assets/Lake/Restaurant.png',
  lake1 = './Assets/Lake/lake 1.png',
  lake2 = './Assets/Lake/lake 2.png',
  lake3 = './Assets/Lake/lake 3.png',
  lake4 = './Assets/Lake/lake 4.png',
  lake5 = './Assets/Lake/lake 5.png',
  fishingRod = './Assets/Lake/fishing_rod.png',
  fish = './Assets/Lake/Fish.png',
}

export default class Lake extends GameplayScene {
  // eslint-disable-next-line @typescript-eslint/default-param-last
  private ducks: Duck[] = [];

  private createRestaurant: boolean;

  public constructor(maxX: number, maxY: number, playerX: number = 0, playerY: number = 0) {
    super(maxX, maxY, playerX, playerY);
    this.placeWorldItems();
    this.animal = new Hedgehog(1000, 220);
    this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Lake/Background.png');
    this.animalName = 'Hedgehog';
    this.fish = new Fish(910, 530, WorldItems.fish);
    this.createRestaurant = false;
    this.animalTextDebug = Dialogs.hedgehogDialogs;
    this.ducks.push(new Duck(maxX - 200, maxY - 100, 0));
    this.ducks.push(new Duck(maxX - 400, maxY - 250, 1));
    this.ducks.push(new Duck(maxX - 150, maxY - 450, 2));
  }

  /**
   * Place all the world items on its position
   */
  protected placeWorldItems(): void {
    this.worldItems.push(new WorldItem(1157, 188, WorldItems.lakeTop));
    this.worldItems.push(new WorldItem(740, 700, WorldItems.lake1));
    this.worldItems.push(new WorldItem(870, 620, WorldItems.lake2));
    this.worldItems.push(new WorldItem(940, 560, WorldItems.lake3));
    this.worldItems.push(new WorldItem(995, 500, WorldItems.lake4));
    this.worldItems.push(new WorldItem(1069, 470, WorldItems.lake5));
    this.worldItems.push(new WorldItem(0, 0, WorldItems.hillLeft));
    this.worldItems.push(new WorldItem(290, 0, WorldItems.hillRight));
    this.worldItems.push(new WorldItem(1170, 316, WorldItems.boat));
    this.worldItems.push(new WorldItem(0, this.maxY - 40, WorldItems.fence));
    this.worldItems.push(new WorldItem(344, 58, WorldItems.restaurant));
    this.worldItems.push(new WorldItem(895, 500, WorldItems.fishingRod));
  }

  /**
   * overrides the player movement
   *
   * @param keyListener keylistener
   */
  public override playerMovement(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_W)) this.player.move(0);
    else if (keyListener.isKeyDown(KeyListener.KEY_D)) this.player.move(1);
    else if (keyListener.isKeyDown(KeyListener.KEY_S)
      && this.player.getPosY() + this.player.getHeight() < this.maxY - 40) this.player.move(2);
    else if (keyListener.isKeyDown(KeyListener.KEY_A)) this.player.move(3);
    if (!keyListener.isKeyDown(KeyListener.KEY_W)
      && !keyListener.isKeyDown(KeyListener.KEY_A)
      && !keyListener.isKeyDown(KeyListener.KEY_S)
      && !keyListener.isKeyDown(KeyListener.KEY_D)) {
      this.player.nullTheDirection();
    }
    if (keyListener.isKeyDown(KeyListener.KEY_SHIFT_LEFT)) {
      this.player.setSpeed(6);
    } else {
      this.player.setSpeed(4);
    }
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      if (this.canPickUpFlower && !this.canPickUpFish) {
        QuestManager.pickUpflower(this.flower);
        this.canPickUpFlower = false;
      }
      if (this.canPickUpFish && !this.canPickUpFlower) {
        QuestManager.pickUpFish(this.fish);
        this.canPickUpFish = false;
        const pickup = new Audio('./Sounds/PickUp.mp3');
        pickup.play();
        QuestManager.startNewQuest();
      }
    }
  }

  /**
   *
   * @param elapsed The time elapsed between frames
   * @returns If new scene should be rendered or not
   */
  public update(elapsed: number): Scene {
    // This can be changed to the Attribute animal later
    if (QuestRestrictions.canSpawnHedgehog() && QuestRestrictions.canTalkToHedgehog()) {
      this.canInteract = this.player.isCloseToAnimal(this.animal);
    }
    if (QuestManager.canSpawnQuestItem(this.fish)) {
      this.canPickUpFish = this.player.collidesWithWorldItem(this.worldItems[11]);
    }
    // Seting player postion
    this.setPositionsOfPlayer();
    this.player.update(elapsed);
    this.ducks.forEach((duck: Duck) => duck.update(elapsed));
    this.checkForCollision();
    this.worldItems.forEach((item: WorldItem) => {
      if (item.getWorldItemSource().includes('/Assets/Lake/Restaurant.png')
        && this.player.getPosX() > item.getPosX() + 45
        && this.player.getPosX() < item.getPosX() + item.getWidth() - 330
        && this.player.getPosY() < item.getPosY() + item.getHeight() - 40) this.createRestaurant = true;
    });
    if (this.createRestaurant) return new Restaurant(this.maxX, this.maxY);
    // Going to the Village through the Left
    if (this.player.getPosX() < 0) return new Village(this.maxX, this.maxY, this.maxX - this.player.getWidth(), this.maxY / 2 + 120);
    this.animal.update(elapsed);
    return null;
  }

  /**
   * Renders everything that needs to be rendered in the forest scene
   *
   * @param canvas The canvas the render should be done on
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
    this.worldItems.forEach((worldItem: WorldItem) => worldItem.render(canvas));
    if (QuestRestrictions.canSpawnHedgehog()) {
      this.animal.render(canvas);
    }
    this.player.render(canvas);
    if (QuestRestrictions.canSpawnQuestItem(this.fish)) {
      this.fish.render(canvas);
    }
    this.ducks.forEach((duck: Duck) => duck.render(canvas));
    // Parameters should be changed according to perfect position
    this.map.showMap(canvas, 2);
    if (this.canInteract) CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
    if (this.canPickUpFish) CanvasUtil.drawImage(canvas, this.buttonSpace, this.player.getPosX() - 27, this.player.getPosY() - 70);
  }
}
