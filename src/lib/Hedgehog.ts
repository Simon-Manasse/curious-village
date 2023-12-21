/* eslint-disable max-len */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Hedgehog/Hedgehog-idle1.png',
  second = './Assets/Animals/Hedgehog/Hedgehog-idle2.png',
  third = './Assets/Animals/Hedgehog/Hedgehog-idle3.png',
  fourth = './Assets/Animals/Hedgehog/Hedgehog-idle2.png',
  fifth = './Assets/Animals/Hedgehog/Hedgehog-idle3.png',
  sixth = './Assets/Animals/Hedgehog/Hedgehog-idle4.png',
  seventh = './Assets/Animals/Hedgehog/Hedgehog-idle1.png',
  eighth = './Assets/Animals/Hedgehog/Hedgehog-idle4.png',
}

export default class Hedgehog extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(8);
    this.loadAnimationImages();
  }

  /**
   * Loads animation images
   */
  private loadAnimationImages():void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventh) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighth) as HTMLImageElement);
    this.image = this.animationImages[this.imageNumber];
  }
}
