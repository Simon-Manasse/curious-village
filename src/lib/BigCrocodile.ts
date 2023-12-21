import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Crocodiles/bigCrock1.png',
  second = './Assets/Animals/Crocodiles/bigCrock2.png',
  third = './Assets/Animals/Crocodiles/bigCrock3.png',
  fourth = './Assets/Animals/Crocodiles/bigCrock4.png',
}

export default class BigCrocodile extends Animals {
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
