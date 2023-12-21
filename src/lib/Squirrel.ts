import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  second = './Assets/Animals/Squirrel/Squirrel-idle2.png',
  third = './Assets/Animals/Squirrel/Squirrel-idle3.png',
  fourth = './Assets/Animals/Squirrel/Squirrel-idle4.png',
  fifth = './Assets/Animals/Squirrel/Squirrel-idle5.png',
  sixth = './Assets/Animals/Squirrel/Squirrel-idle6.png',
  first = './Assets/Animals/Squirrel/Squirrel-idle1.png',
  seven = './Assets/Animals/Squirrel/squirell1.png',
  eight = './Assets/Animals/Squirrel/squirell2.png',
  nine = './Assets/Animals/Squirrel/squirell3.png',
  ten = './Assets/Animals/Squirrel/squirell4.png',
  eleven = './Assets/Animals/Squirrel/Squirrel-idle6.png',
  twelve = './Assets/Animals/Squirrel/Squirrel-idle1.png',
  thirteen = './Assets/Animals/Squirrel/scratch1.png',
  fourteen = './Assets/Animals/Squirrel/scratch2.png',
  fiveteen = './Assets/Animals/Squirrel/scratch3.png',
  sixteen = './Assets/Animals/Squirrel/scratch4.png',
  seventeen = './Assets/Animals/Squirrel/Squirrel-idle1.png',
}

export default class Squirrel extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(17);
    this.loadAnimationImages();
  }

  /**
   * Loads animation images
   */
  private loadAnimationImages(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the movement of squirrel
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    this.timeToNextChange -= elapsed;

    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      this.timeToNextChange = 100;

      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
    }
  }
}
