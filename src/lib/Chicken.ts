/* eslint-disable max-len */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Chicken/chicken-1.png',
  second = './Assets/Animals/Chicken/chicken-2.png',
  third = './Assets/Animals/Chicken/chicken-3.png',
  fourth = './Assets/Animals/Chicken/chicken-4.png',
  fifth = './Assets/Animals/Chicken/chicken-5.png',
  sixth = './Assets/Animals/Chicken/chicken-6.png',
  seventh = './Assets/Animals/Chicken/chicken-7.png',
  eighth = './Assets/Animals/Chicken/chicken-8.png',
}

export default class Chicken extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(8);
    this.loadAnimationImages();
  }

  /**
   * Loads animation images
   */
  private loadAnimationImages(): void {
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

  /**
   * updates the chicken
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.imageNumber === 1) {
      this.posX += 1.5;
      this.posY -= 1.5;
    } else if (this.imageNumber === 3) {
      this.posX += 1.5;
      this.posY += 1.5;
    } else if (this.imageNumber === 5) {
      this.posX -= 1.5;
      this.posY += 1.5;
    } else if (this.imageNumber === 7) {
      this.posX -= 1.5;
      this.posY -= 1.5;
    }
    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 300;
    }
  }
}
