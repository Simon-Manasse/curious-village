import Drawable from './Drawable.js';

export default abstract class Static extends Drawable {
  public constructor(startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
  }
}
