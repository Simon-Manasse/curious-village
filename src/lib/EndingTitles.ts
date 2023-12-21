/* eslint-disable class-methods-use-this */
import CanvasUtil from './CanvasUtil.js';
import GameMusic from './GameMusic.js';
import KeyListener from './KeyListener.js';
import Locale from './Locale.js';
import MainGame from './MainGame.js';
import Scene from './Scene.js';
import Start from './Start.js';

export default class EndingTitles extends Scene {
  private posY: number;

  private titles: string[] = [' ', 'Jessica Dinova', 'Simon Potocnak', 'Ihor Novikov', 'Simon Manasse', ' ', 'And YOU!', ' ', ' ', 'Credits', ' ', 'Art', ' ', 'PixyMoon, Gif not Jif, Vaca Roxa', ' ', 'Pixel art gallery, Art of MT, Kaleb Silva', ' ', 'Custom cursor, Shubibubi, River makes', ' ', 'Elsthen, Cup noodle, Butter milk', ' ', 'Vector pixel star, Mazeon, RainlDaf', ' ', 'Strelllka, Cyporkador, Craftpix', ' ', 'and Derek Fitzpatrick', ' ', 'Sounds', ' ', 'Fesliyan studios, The podz', ' ', 'Avnish parker and Pix a bay', ' ', 'Font', ' ', 'Data goblin'];

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.posY = maxY + 120;
    GameMusic.setMusicSource('./Sounds/Ending.mp3');
    document.body.style.cursor = 'none';
  }

  /**
   * process input
   *
   * @param keyListener keylistener
   * @returns nothing
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public processInput(keyListener: KeyListener): void {
    return null;
  }

  /**
   * updates the titles
   *
   * @param elapsed time that has passed
   * @returns nothing
   */
  public update(elapsed: number): Scene {
    document.exitFullscreen();
    this.posY -= elapsed * 0.1;
    if (this.posY <= -1600) {
      return new Start(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   * renders the titles onto the canvas
   *
   * @param canvas htmlcanvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'black');
    CanvasUtil.writeTextToCanvas(canvas, 'Who made it possible', canvas.width / 2, this.posY - 50, 'center', 'monogramextended', 50, 'white');
    for (let i = 0; i < this.titles.length; i++) {
      CanvasUtil.writeTextToCanvas(canvas, `${this.titles[i]}`, canvas.width / 2, (this.posY) + i * 50, 'center', 'monogramextended', 50, 'white');
    }
    if (Locale.getCurrentBrowserLocale() === 'nl') {
      CanvasUtil.fillRectangle(canvas, 0, 0, this.maxX, 250, 'black');
      CanvasUtil.writeTextToCanvas(canvas, MainGame.translation.trans('There are around 500.000 online predators online every day.'), canvas.width / 2, 90, 'center', 'monogramextended', 42, 'red');
      CanvasUtil.writeTextToCanvas(canvas, MainGame.translation.trans('Children around your age are being manipulated by them online.'), canvas.width / 2, 140, 'center', 'monogramextended', 42, 'red');
      CanvasUtil.writeTextToCanvas(canvas, MainGame.translation.trans('They are pretending to be your friend in Roblox or Minecraft.'), canvas.width / 2, 190, 'center', 'monogramextended', 42, 'red');
    } else {
      CanvasUtil.fillRectangle(canvas, 0, 0, this.maxX, 250, 'black');
      CanvasUtil.writeTextToCanvas(canvas, 'There are around 500.000 online predators online every day. Children around your age are', canvas.width / 2, 90, 'center', 'monogramextended', 45, 'red');
      CanvasUtil.writeTextToCanvas(canvas, 'manipulated by them online. They are pretending to be your friend in Roblox or Minecraft.', canvas.width / 2, 140, 'center', 'monogramextended', 45, 'red');
      CanvasUtil.writeTextToCanvas(canvas, 'Their only intentions are to kidnap you, steal your identity and rob you or your family.', canvas.width / 2, 190, 'center', 'monogramextended', 45, 'red');
    }
  }
}
