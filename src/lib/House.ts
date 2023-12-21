/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import GameplayScene from './GameplayScene.js';
import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import Village from './Village.js';
import QuestManager from './Quests/QuestManager.js';

export default class House extends GameplayScene {
  public constructor(maxX: number, maxY: number, playerX: number = maxX / 2, playerY: number = maxY - 120) {
    super(maxX, maxY, playerX, playerY);
    this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Interior/house.png');
  }

  /**
   * overrides the players process input
   *
   * @param keyListener keylistener
   */
  public override processInput(keyListener: KeyListener): void {
    if ((keyListener.isKeyDown(KeyListener.KEY_W) && this.player.getPosY() > 330)) this.player.move(0);
    else if ((keyListener.isKeyDown(KeyListener.KEY_D) && this.player.getPosY() + this.player.getHeight() < this.maxY - 120 && this.player.getPosX() < 1000) || (keyListener.isKeyDown(KeyListener.KEY_D)
      && this.player.getPosX() < 835)) this.player.move(1);
    else if ((keyListener.isKeyDown(KeyListener.KEY_S) && this.player.getPosY() + this.player.getHeight() < this.maxY - 130)
      || (keyListener.isKeyDown(KeyListener.KEY_S) && this.player.getPosX() > 690
        && this.player.getPosX() < 855)) this.player.move(2);
    else if ((keyListener.isKeyDown(KeyListener.KEY_A) && this.player.getPosY() + this.player.getHeight() < this.maxY - 120 && this.player.getPosX() > 220) || (keyListener.isKeyDown(KeyListener.KEY_A)
      && this.player.getPosX() > 710)) this.player.move(3);
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
   * updates the player movement
   *
   * @param elapsed time that has passed
   * @returns nothing
   */
  public update(elapsed: number): Scene {
    this.player.update(elapsed);
    if (this.player.getPosY() + this.player.getHeight() > this.maxY - 20
      && (this.player.getPosX() > 690
        && this.player.getPosX() < 855)) return new Village(this.maxX, this.maxY, 140, 300);
    return QuestManager.checkIfShouldEnd(this.maxX, this.maxY, 'house');
    return null;
  }

  /**
   * renders everything onto the canvas
   *
   * @param canvas html canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, '#260b2d');
    CanvasUtil.drawImage(canvas, this.backgroundImage, 116.5, 0);
    this.player.render(canvas);
  }

  /**
   * place the world items
   */
  protected placeWorldItems(): void {

  }
}
