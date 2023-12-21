import Drawable from './Drawable.js';

export default abstract class Animatable extends Drawable {
  protected speed: number;

  protected animationImages: HTMLImageElement[] = [];

  protected timeToNextChange: number;

  protected imageNumber: number;

  protected numberOfSprites: number;

  public constructor() {
    super();
    this.numberOfSprites = 0;
    this.timeToNextChange = 300;
    this.imageNumber = 0;
  }

  /**
   * Sets the number of sprites to be animated for each snimal
   *
   * @param numberOfSprites count of the sprites to be animated
   */
  public setNumberOfSprites(numberOfSprites: number) {
    this.numberOfSprites = numberOfSprites - 1;
  }

  /**
   * Updates the children so they can change sprites
   *
   * @param elapsed The time elapsed between frames
   */
  public update(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 300;
    }
  }
}
