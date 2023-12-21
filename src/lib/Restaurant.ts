/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import GameplayScene from './GameplayScene.js';
import CanvasUtil from './CanvasUtil.js';
import Scene from './Scene.js';
import Lake from './Lake.js';
import KeyListener from './KeyListener.js';
import Raccoon from './Raccoon.js';
import Dialogs from './Dialog manager/Dialogs.js';
import QuestRestrictions from './Quests/QuestRestrictions.js';
import GameMusic from './GameMusic.js';

export default class Restaurant extends GameplayScene {
  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, playerX: number = maxX / 2 - 25, playerY: number = maxY - 110) {
    super(maxX, maxY, playerX, playerY);
    this.backgroundImage = CanvasUtil.loadNewImage('./Assets/Interior/bar.png');
    this.animal = new Raccoon(700, 220);
    this.animalName = 'Raccon';
    this.animalTextDebug = Dialogs.racoonDialogs;
    GameMusic.setMusicSource('./Sounds/Restaurant.mp3');
  }

  /**
   * updates the player movement
   *
   * @param keyListener keylistener
   */
  public override playerMovement(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_W)
      && this.player.getPosY() > 310) this.player.move(0);
    else if (keyListener.isKeyDown(KeyListener.KEY_D)
      && this.player.getPosX() < 950) this.player.move(1);
    else if ((keyListener.isKeyDown(KeyListener.KEY_S)
      && this.player.getPosY() + this.player.getHeight() < this.maxY - 40)
      || (keyListener.isKeyDown(KeyListener.KEY_S)
        && this.player.getPosX() > 660
        && this.player.getPosX() < 815)) this.player.move(2);
    else if (keyListener.isKeyDown(KeyListener.KEY_A)
      && this.player.getPosX() > 500) this.player.move(3);
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
   * Update the resturant
   *
   * @param elapsed time between each update
   * @returns new or the current scene
   */
  public update(elapsed: number): Scene {
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

  /**
   * Renders all of the elements to screen
   *
   * @param canvas canvas where to render
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, '#260b2d');
    CanvasUtil.drawImage(canvas, this.backgroundImage, 116.5, 0);
    if (QuestRestrictions.canSpawnRacoon()) {
      this.animal.render(canvas);
    }
    this.player.render(canvas);
    if (this.canInteract) CanvasUtil.drawImage(canvas, this.buttonE, this.player.getPosX() - 5, this.player.getPosY() - 100);
  }

  /**
   * places world items
   */
  protected placeWorldItems(): void {
  }
}
