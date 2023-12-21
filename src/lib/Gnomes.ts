/* eslint-disable prefer-destructuring */
import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';

enum SpritesToAnimate {
  zero = './Assets/Animals/Gnomes/Ihor1.png',
  one = './Assets/Animals/Gnomes/Ihor2.png',
  two = './Assets/Animals/Gnomes/Ihor3.png',
  three = './Assets/Animals/Gnomes/Ihor4.png',
  four = './Assets/Animals/Gnomes/Ihor5.png',
  five = './Assets/Animals/Gnomes/Ihor6.png',
  six = './Assets/Animals/Gnomes/Ihor7.png',
  seven = './Assets/Animals/Gnomes/Ihor8.png',
  eight = './Assets/Animals/Gnomes/Simon1.png',
  nine = './Assets/Animals/Gnomes/Simon2.png',
  ten = './Assets/Animals/Gnomes/Simon3.png',
  eleven = './Assets/Animals/Gnomes/Simon4.png',
  twelve = './Assets/Animals/Gnomes/Simonko1.png',
  thirteen = './Assets/Animals/Gnomes/Simonko2.png',
  fourteen = './Assets/Animals/Gnomes/Simonko3.png',
  fiveteen = './Assets/Animals/Gnomes/Simonko4.png',
  sixteen = './Assets/Animals/Gnomes/Simonko5.png',
  seventeen = './Assets/Animals/Gnomes/Simonko6.png',
  eighteen = './Assets/Animals/Gnomes/Simonko7.png',
  nineteen = './Assets/Animals/Gnomes/Simonko8.png',
  twenty = './Assets/Animals/Gnomes/Simonko9.png',
  twentyOne = './Assets/Animals/Gnomes/Simonko10.png',
  extra = './Assets/Animals/Gnomes/Simonko10.png',
}

export default class Gnomes extends Animals {
  private gnomeIndex: number;

  private teleport: number;

  public constructor(startX: number, startY: number, index: number) {
    super(startX, startY);
    this.gnomeIndex = index;
    this.teleport = 1;
    this.loadGnomes();
    this.setNumberOfSprites(23);
  }

  /**
   * Loads animation images
   */
  private loadGnomes(): void {
    // Running
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));

    // Screaming
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));

    // Portal
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyOne));
    this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.extra));

    if (this.gnomeIndex === 1) {
      this.image = this.animationImages[8];
    }
    if (this.gnomeIndex === 2) {
      this.image = this.animationImages[12];
    }
    if (this.gnomeIndex === 0) {
      this.image = this.animationImages[0];
    }
  }

  /**
   * updates the gnomes
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    if (this.timeToNextChange < 0) {
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 200;
      this.imageNumber += 1;
    }

    if (this.gnomeIndex === 0) {
      this.timeToNextChange -= elapsed * 2;
      if (this.imageNumber > 7) {
        this.imageNumber = 0;
      }

      if (this.imageNumber < 2) {
        this.posX += 1.5;
        this.posY -= 1.5;
      } else if (this.imageNumber < 4) {
        this.posX += 1.5;
        this.posY += 1.5;
      } else if (this.imageNumber < 6) {
        this.posX -= 1.5;
        this.posY += 1.5;
      } else if (this.imageNumber <= 7) {
        this.posX -= 1.5;
        this.posY -= 1.5;
      }
    }

    if (this.gnomeIndex === 1) {
      if (this.imageNumber <= 7 || this.imageNumber > 11) {
        this.imageNumber = 8;
      }

      if (this.imageNumber === 9) {
        this.timeToNextChange -= elapsed * 0.1;
      } else {
        this.timeToNextChange -= elapsed * 2.5;
      }
    }

    if (this.gnomeIndex === 2) {
      if (this.imageNumber <= 11 || this.imageNumber > 22) {
        this.imageNumber = 12;
      }

      if (this.imageNumber === 22 || this.imageNumber === 13) {
        this.timeToNextChange -= elapsed * 0.1;
      } else {
        this.timeToNextChange -= elapsed * 2.5;
      }

      if (this.imageNumber === 22) {
        this.teleport += 1;
      }

      if (this.teleport === 3) {
        this.teleport = 1;
      }

      if (this.teleport % 2) {
        this.posX = 710;
        this.posY = 120;
      } else {
        this.posX = 440;
        this.posY = 500;
      }
    }
  }
}
