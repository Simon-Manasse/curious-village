import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum AnimationSprites {
  fifth = './Assets/Animals/Fox/Fox-idle1.png',
  six = './Assets/Animals/Fox/fox1.png',
  seven = './Assets/Animals/Fox/fox2.png',
  eight = './Assets/Animals/Fox/fox3.png',
  nine = './Assets/Animals/Fox/fox4.png',
  ten = './Assets/Animals/Fox/fox5.png',
  eleven = './Assets/Animals/Fox/fox6.png',
  twelve = './Assets/Animals/Fox/fox7.png',
  thirteen = './Assets/Animals/Fox/fox8.png',
  fourteen = './Assets/Animals/Fox/fox9.png',
  fiveteen = './Assets/Animals/Fox/fox10.png',
  sixteen = './Assets/Animals/Fox/fox11.png',
  seventeen = './Assets/Animals/Fox/Fox-idle4.png',
  first = './Assets/Animals/Fox/Fox-idle5.png',
  idk = './Assets/Animals/Fox/Fox-idle1.png',
  fourth = './Assets/Animals/Fox/Fox-idle2.png',
  third = './Assets/Animals/Fox/Fox-idle3.png',
  second = './Assets/Animals/Fox/Fox-idle4.png',
  last = './Assets/Animals/Fox/Fox-idle5.png',

}

export default class Fox extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(19);
    this.loadAnimationImages();
  }

  /**
   * Loads animation images
   */
  private loadAnimationImages(): void {
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fifth));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.six));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.seven));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.eleven));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.thirteen));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fourteen));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fiveteen));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.sixteen));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.seventeen));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.first));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.idk));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fourth));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.third));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.second));
    this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.last));
    this.image = this.animationImages[this.imageNumber];
  }

  /**
   * updates the movement of capybara
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
