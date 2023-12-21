/* eslint-disable class-methods-use-this */
import CanvasUtil from './CanvasUtil.js';
import GameplayScene from './GameplayScene.js';
import Scene from './Scene.js';
import Squirrel from './Squirrel.js';
import Village from './Village.js';
import BigCrocodile from './BigCrocodile.js';
import SmallCrocodile from './SmallCrocodile.js';
import QuestManager from './Quests/QuestManager.js';
import KeyListener from './KeyListener.js';
import Dialogs from './Dialog manager/Dialogs.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import Frogs from './Frog.js';

export default class Swamp extends GameplayScene {
  private npc: BigCrocodile;

  private frogs: Frogs[] = [];

  private smallnpc: SmallCrocodile;

  public constructor(maxX: number, maxY: number, playerX: number, playerY: number) {
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

  /**
   * gets the player movement
   *
   * @param keyListener keylistener
   */
  public override playerMovement(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_W)
      && this.player.getPosY() > 150) this.player.move(0);
    else if (keyListener.isKeyDown(KeyListener.KEY_D)
      && this.player.getPosX() < this.maxX) this.player.move(1);
    else if ((keyListener.isKeyDown(KeyListener.KEY_S)
      && this.player.getPosY() + this.player.getHeight() < 400)) this.player.move(2);
    else if (keyListener.isKeyDown(KeyListener.KEY_A)
      && this.player.getPosX() > 300) this.player.move(3);
    else if (!keyListener.isKeyDown(KeyListener.KEY_W)
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
  }

  /**
   *
   * @param elapsed The time elapsed between frames
   * @returns If new scene should be rendered or not
   */
  public update(elapsed: number): Scene {
    if (QuestRestrictions.canSpawnSquirel() && QuestRestrictions.canTalkToSquirel()) {
      this.canInteract = this.player.isCloseToAnimal(this.animal);
    }
    // Setting player position
    this.setPositionsOfPlayer();
    // Going to the Village through the right
    this.animal.update(elapsed);
    this.npc.update(elapsed);
    this.smallnpc.update(elapsed);
    this.frogs.forEach((frog: Frogs) => frog.update(elapsed));
    this.player.update(elapsed);
    // eslint-disable-next-line max-len
    if (this.player.getPosX() + this.player.getWidth() > this.maxX) return new Village(this.maxX, this.maxY, 0, this.maxY / 2 - 20);
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
    this.player.render(canvas);
    if (QuestRestrictions.canSpawnSquirel()) {
      this.animal.render(canvas);
    }
    this.npc.render(canvas);
    this.smallnpc.render(canvas);
    this.frogs.forEach((frog: Frogs) => frog.render(canvas));
    this.map.showMap(canvas, 3);
    // eslint-disable-next-line max-len
    if (this.canInteract) CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
  }

  /**
   * place world items
   */
  protected placeWorldItems(): void {

  }
}
