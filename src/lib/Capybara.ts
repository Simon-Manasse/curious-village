import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  first = './Assets/Animals/Capybara/cap 1.png',
  second = './Assets/Animals/Capybara/cap 2.png',
  third = './Assets/Animals/Capybara/cap 3.png',
  fourth = './Assets/Animals/Capybara/cap 4.png',
  fifth = './Assets/Animals/Capybara/cap 4.png',
  sixth = './Assets/Animals/Capybara/cap 3.png',
  seventh = './Assets/Animals/Capybara/cap 2.png',
  eighth = './Assets/Animals/Capybara/cap 1.png',
  ninth = './Assets/Animals/Capybara/capLie1.png',
  ten = './Assets/Animals/Capybara/capLie2.png',
  eleven = './Assets/Animals/Capybara/capLie3.png',
  twelve = './Assets/Animals/Capybara/capLie4.png',
  thirteen = './Assets/Animals/Capybara/capLie5.png',
  sixteen = './Assets/Animals/Capybara/capLie4.png',
  seventeen = './Assets/Animals/Capybara/capLie3.png',
  eighteen = './Assets/Animals/Capybara/capLie2.png',
  nineteen = './Assets/Animals/Capybara/capLie1.png',
  twenty = './Assets/Animals/Capybara/cap 1.png',
  twentyone = './Assets/Animals/Capybara/capStomp1.png',
  twentytwo = './Assets/Animals/Capybara/capStomp2.png',
  twentythree = './Assets/Animals/Capybara/capStomp3.png',
  twentyfour = './Assets/Animals/Capybara/capStomp4.png',
  twentyfive = './Assets/Animals/Capybara/capStomp5.png',
}

export default class Capybara extends Animals {
  public constructor(startX: number, startY: number) {
    super(startX, startY);
    this.setNumberOfSprites(23);
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
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventh));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ninth));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyone));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentytwo));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentythree));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyfour));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyfive));

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

      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];

      if (this.imageNumber === 4 || this.imageNumber === 12 || this.imageNumber === 0) {
        this.timeToNextChange = 2000;
      } else if (this.imageNumber >= 18) {
        this.timeToNextChange = 50;
      } else {
        this.timeToNextChange = 100;
      }
    }
  }
}
