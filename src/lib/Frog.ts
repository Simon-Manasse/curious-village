/* eslint-disable max-len */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  zero = './Assets/Animals/Frogs/frogDark1.png',
  one = './Assets/Animals/Frogs/frogDark2.png',
  two = './Assets/Animals/Frogs/frogDark3.png',
  three = './Assets/Animals/Frogs/frogDark4.png',
  four = './Assets/Animals/Frogs/frogLight1.png',
  five = './Assets/Animals/Frogs/frogLight2.png',
  six = './Assets/Animals/Frogs/frogLight3.png',
  seven = './Assets/Animals/Frogs/frogLight4.png',
  eight = './Assets/Animals/Frogs/frogRed1.png',
  nine = './Assets/Animals/Frogs/frogRed2.png',
  ten = './Assets/Animals/Frogs/frogRed3.png',
  eleven = './Assets/Animals/Frogs/frogRed4.png',
}

export default class Frogs extends Animals {
  private frogIndex: number;

  public constructor(startX: number, startY: number, index: number) {
    super(startX, startY);
    this.frogIndex = index;
    this.loadFrogs();
    this.setNumberOfSprites(12);
  }

  /**
   * Loads animation images
   */
  private loadFrogs(): void {
    // dark frog
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
    // light frog
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
    // red frog
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the frogs
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    if (this.timeToNextChange < 0) {
      this.image = this.animationImages[this.imageNumber];
      this.imageNumber += 1;
      this.timeToNextChange = 100;
    }

    if (this.frogIndex === 0) {
      this.timeToNextChange -= elapsed * 0.7;

      if (this.imageNumber > 3) {
        this.imageNumber = 0;
      }
    } else if (this.frogIndex === 1) {
      if (this.imageNumber <= 3 || this.imageNumber > 7) {
        this.imageNumber = 4;
      }

      if (this.imageNumber <= 4) {
        this.timeToNextChange -= elapsed * 10;
      } else {
        this.timeToNextChange -= elapsed * 0.65;
      }
    } else if (this.frogIndex === 2) {
      if (this.imageNumber <= 7 || this.imageNumber >= 12) {
        this.imageNumber = 8;
      }

      if (this.imageNumber <= 8) {
        this.timeToNextChange -= elapsed * 10;
      } else {
        this.timeToNextChange -= elapsed * 0.65;
      }
    }
  }
}
