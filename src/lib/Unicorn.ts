import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  zero = './Assets/Animals/Unicorn/unicorn1.png',
  one = './Assets/Animals/Unicorn/unicorn2.png',
  two = './Assets/Animals/Unicorn/unicorn3.png',
  three = './Assets/Animals/Unicorn/unicorn4.png',
  four = './Assets/Animals/Unicorn/unicorn5.png',
  five = './Assets/Animals/Unicorn/unicorn6.png',
  six = './Assets/Animals/Unicorn/unicorn7.png',
  seven = './Assets/Animals/Unicorn/unicorn8.png',
  eight = './Assets/Animals/Unicorn/unicorn9.png',
  nine = './Assets/Animals/Unicorn/unicorn10.png',
  ten = './Assets/Animals/Unicorn/unicorn11.png',
  eleven = './Assets/Animals/Unicorn/unicorn12.png',
  twelve = './Assets/Animals/Unicorn/unicorn13.png',
  thirteen = './Assets/Animals/Unicorn/unicorn14.png',
}

export default class Unicorn extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.loadUnicorn();
    this.setNumberOfSprites(14);
  }

  /**
   * Animation frames to load
   */
  private loadUnicorn(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the movement of unicorn
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    this.timeToNextChange -= elapsed;

    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];

      if (this.imageNumber === 3 || this.imageNumber === 10) {
        this.timeToNextChange = 500;
      } else if (this.imageNumber === 0 || this.imageNumber === 7) {
        this.timeToNextChange = 2000;
      } else {
        this.timeToNextChange = 50;
      }
    }
  }
}
