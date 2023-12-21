import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Crocodiles/smallCrock3.png',
  second = './Assets/Animals/Crocodiles/smallCrock4.png',
  third = './Assets/Animals/Crocodiles/smallCrock1.png',
  fourth = './Assets/Animals/Crocodiles/smallCrock2.png',
}

export default class SmallCrocodile extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(4);
    this.loadAnimationImages();
  }

  /**
   * Animation frames to load
   */
  private loadAnimationImages(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
    this.image = this.animationImages[this.imageNumber];
  }
}
