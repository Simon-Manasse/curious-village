import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Wolf/Wolf-idle1.png',
  second = './Assets/Animals/Wolf/Wolf-idle2.png',
  third = './Assets/Animals/Wolf/Wolf-idle3.png',
  fourth = './Assets/Animals/Wolf/Wolf-idle4.png',
  fifth = './Assets/Animals/Wolf/Wolf-idle5.png',
  sixth = './Assets/Animals/Wolf/Wolf-idle6.png',
  seventh = './Assets/Animals/Wolf/Wolf-idle7.png',
  eighth = './Assets/Animals/Wolf/Wolf-idle8.png',
}

export default class Wolf extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(8);
    this.loadAnimationImages();
  }

  /**
   * Loads the sprites to animate
   */
  private loadAnimationImages(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventh));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighth));
    this.image = this.animationImages[this.imageNumber];
  }
}
