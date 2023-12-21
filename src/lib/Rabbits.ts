/* eslint-disable max-len */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  zero = './Assets/Animals/Rabbits/rabbitIdle.png',
  one = './Assets/Animals/Rabbits/rabbitSleep1.png',
  two = './Assets/Animals/Rabbits/rabbitSleep2.png',
  three = './Assets/Animals/Rabbits/rabbitSleep1.png',
  four = './Assets/Animals/Rabbits/rabbitRun1.png',
  five = './Assets/Animals/Rabbits/rabbitRun2.png',
  six = './Assets/Animals/Rabbits/rabbitRun3.png',
  seven = './Assets/Animals/Rabbits/rabbitRun4.png',
  eight = './Assets/Animals/Rabbits/rabbitRun1.png',
  nine = './Assets/Animals/Rabbits/rabbitRun5.png',
  ten = './Assets/Animals/Rabbits/rabbitRun6.png',
  eleven = './Assets/Animals/Rabbits/rabbitRun7.png',
  twelve = './Assets/Animals/Rabbits/rabbitRun8.png',
  thirteen = './Assets/Animals/Rabbits/rabbitRun5.png',
  fourteen = './Assets/Animals/Rabbits/rabbitCleanIdle.png',
  fiveteen = './Assets/Animals/Rabbits/rabbitClean5.png',
  sixteen = './Assets/Animals/Rabbits/rabbitClean4.png',
  seventeen = './Assets/Animals/Rabbits/rabbitClean5.png',
  eighteen = './Assets/Animals/Rabbits/rabbitClean4.png',
  nineteen = './Assets/Animals/Rabbits/rabbitClean3.png',
  twenty = './Assets/Animals/Rabbits/rabbitClean2.png',
  twentyOne = './Assets/Animals/Rabbits/rabbitClean1.png',
}

export default class Rabbits extends Animals {
  private rabbitIndex: number;

  public constructor(startX: number, startY: number, index: number) {
    super(startX, startY);
    this.rabbitIndex = index;
    this.loadRabbit0();
    this.loadRabbit1();
    this.loadRabbit2();
    this.setNumberOfSprites(21);
  }

  /**
   * Loads animation images
   */
  private loadRabbit0(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three) as HTMLImageElement);
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * Loads animation images
   */
  private loadRabbit1(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven) as HTMLImageElement);
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * Loads animation images
   */
  private loadRabbit2(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyOne));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the rabbits
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    if (this.timeToNextChange < 0) {
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 300;
      this.imageNumber += 1;
    }

    if (this.rabbitIndex === 0) {
      this.speed = 0;

      if (this.imageNumber === 3 || this.imageNumber === 1) {
        this.timeToNextChange -= elapsed * 0.1;
      } else {
        this.timeToNextChange -= elapsed * 2;
      }

      if (this.imageNumber > 3) {
        this.imageNumber = 0;
      }
    } else if (this.rabbitIndex === 1) {
      this.speed = 3;
      if (this.imageNumber < 5 || this.imageNumber >= 14) {
        this.imageNumber = 4;
      }

      if (this.imageNumber === 5 || this.imageNumber === 10 || this.imageNumber === 9) {
        this.timeToNextChange -= elapsed * 0.3;
      } else this.timeToNextChange -= elapsed * 1.5;

      if (this.imageNumber !== 4 && this.imageNumber !== 5 && (this.imageNumber > 3 && this.imageNumber < 9)) {
        this.posX += this.speed;
      } else if (this.imageNumber !== 10 && this.imageNumber !== 9 && (this.imageNumber > 8 && this.imageNumber < 14)) {
        this.posX -= this.speed;
      }
    } else if (this.rabbitIndex === 2) {
      if (this.imageNumber === 15) {
        this.timeToNextChange -= elapsed * 0.1;
      } else {
        this.timeToNextChange -= elapsed * 1.5;
      }

      if (this.imageNumber < 14 || this.imageNumber >= 22) {
        this.imageNumber = 14;
      }
    }
  }
}
