/* eslint-disable max-len */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  zero = './Assets/Animals/Sheep/sheepSleep1.png',
  one = './Assets/Animals/Sheep/sheepSleep2.png',
  two = './Assets/Animals/Sheep/sheepWalk1.png',
  three = './Assets/Animals/Sheep/sheepWalk2.png',
  four = './Assets/Animals/Sheep/sheepWalk3.png',
  five = './Assets/Animals/Sheep/sheepWalk4.png',
  six = './Assets/Animals/Sheep/sheepWalk5.png',
  seven = './Assets/Animals/Sheep/sheepWalk6.png',
  eight = './Assets/Animals/Sheep/sheepWalk7.png',
  nine = './Assets/Animals/Sheep/sheepWalk8.png',
}

export default class Sheep extends Animals {
  private sheepIndex: number;

  public constructor(startX: number, startY: number, index: number) {
    super(startX, startY);
    this.sheepIndex = index;
    this.loadSheep0();
    this.loadSheep1();
    this.setNumberOfSprites(10);
  }

  /**
   * Loads animation images
   */
  private loadSheep0(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * Loads animation images
   */
  private loadSheep1(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the sheep
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    if (this.timeToNextChange < 0) {
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 300;
      this.imageNumber += 1;
    }

    if (this.sheepIndex === 0) {
      this.speed = 0;
      this.timeToNextChange -= elapsed * 0.4;

      if (this.imageNumber > 1) {
        this.imageNumber = 0;
      }
    } else if (this.sheepIndex === 1) {
      this.speed = 1;
      if (this.imageNumber >= 10 || this.imageNumber <= 2) {
        this.imageNumber = 3;
      }

      if (this.imageNumber <= 3) {
        this.timeToNextChange -= elapsed * 10;
      } else {
        this.timeToNextChange -= elapsed;
      }

      if (this.imageNumber > 3 && this.imageNumber < 7) {
        this.posX -= this.speed;
      } else if (this.imageNumber > 5 && this.imageNumber < 11) {
        this.posX += this.speed;
      }
    }
  }
}
