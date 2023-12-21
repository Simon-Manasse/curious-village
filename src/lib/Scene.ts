import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected backgroundImage: HTMLImageElement;

  protected maxX: number;

  protected maxY: number;

  protected gameContinue: boolean;

  protected static characterNumber: number;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  protected static setCharacterNumber(number: number) {
    this.characterNumber = number;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
