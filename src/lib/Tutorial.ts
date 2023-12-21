import CanvasUtil from './CanvasUtil.js';
import GameMusic from './GameMusic.js';
import KeyListener from './KeyListener.js';
import OkButton from './OkButton.js';
import Scene from './Scene.js';
import Village from './Village.js';

export default class Tutorial extends Scene {
  private okButton: OkButton;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.backgroundImage = CanvasUtil.loadNewImage('./Assets/StartingScreenTutorial/tutorial.png');
    this.okButton = new OkButton();
    this.gameContinue = false;
  }

  /**
   * process input
   *
   * @param keyListener keylistener
   */
  public processInput(keyListener: KeyListener): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.okButton.getImage().addEventListener('click', (e) => {
      this.gameContinue = true;
      GameMusic.stopMusic();
      GameMusic.setMusicSource('./Sounds/MainMusic.wav');
    });
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) this.gameContinue = true;
  }

  /**
   * updates the tutorial screen
   *
   * @param elapsed time that has passed
   * @returns nothing
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(elapsed: number): Scene {
    if (this.gameContinue) {
      this.okButton.deleteButtons();
      return new Village(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   * renders everything onto the canvas
   *
   * @param canvas canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, '#693f56');
    CanvasUtil.drawImage(canvas, this.backgroundImage, 0, 0);
  }
}
