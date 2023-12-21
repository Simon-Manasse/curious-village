import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum Frames {
  first = 'Assets/Animals/Raccoon/Raccoon-idle1.png',
  second = 'Assets/Animals/Raccoon/Raccoon-idle2.png',
  third = 'Assets/Animals/Raccoon/Raccoon-idle3.png',
  fourth = 'Assets/Animals/Raccoon/Raccoon-idle4.png',
  fifth = 'Assets/Animals/Raccoon/Raccoon-idle5.png',
  sixth = 'Assets/Animals/Raccoon/Raccoon-idle6.png',
  seventh = 'Assets/Animals/Raccoon/Raccoon-idle7.png',
  eighth = 'Assets/Animals/Raccoon/Raccoon-idle8.png',
}

export default class Raccoon extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(7);
    this.loadAnimationSprites();
  }

  /**
   * Load animation sprites
   */
  private loadAnimationSprites(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.first));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.second));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.third));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.fourth));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.fifth));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.sixth));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.seventh));
    this.animationImages.push(CanvasUtil.loadNewImage(Frames.eighth));
    this.image = this.animationImages[this.imageNumber];
  }
}
