import Animatable from './Animatable.js';

export default abstract class Animals extends Animatable {
  public constructor(startX: number, startY: number) {
    super();
    this.posX = startX;
    this.posY = startY;
  }
}
