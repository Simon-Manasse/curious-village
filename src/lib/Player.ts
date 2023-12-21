import Animals from './Animals.js';
import Animatable from './Animatable.js';
import CanvasUtil from './CanvasUtil.js';
import Static from './Static.js';

enum GingerPlayerAnimations {
  gingerDown1 = './Assets/Player/Ginger/Ginger-down-1.png',
  gingerDown2 = './Assets/Player/Ginger/Ginger-down-2.png',
  gingerDown3 = './Assets/Player/Ginger/Ginger-down-3.png',
  gingerUp1 = './Assets/Player/Ginger/Ginger-up-1.png',
  gingerUp2 = './Assets/Player/Ginger/Ginger-up-2.png',
  gingerUp3 = './Assets/Player/Ginger/Ginger-up-3.png',
  gingerRight1 = './Assets/Player/Ginger/Ginger-right-1.png',
  gingerRight2 = './Assets/Player/Ginger/Ginger-right-2.png',
  gingerRight3 = './Assets/Player/Ginger/Ginger-right-3.png',
  gingerLeft1 = './Assets/Player/Ginger/Ginger-left-1.png',
  gingerLeft2 = './Assets/Player/Ginger/Ginger-left-2.png',
  gingerLeft3 = './Assets/Player/Ginger/Ginger-left-3.png',
}

enum PurplePlayerAnimations {
  purpleDown1 = './Assets/Player/Purple/pFront1.png',
  purpleDown2 = './Assets/Player/Purple/pFront.png',
  purpleDown3 = './Assets/Player/Purple/pFront2.png',
  purpleUp1 = './Assets/Player/Purple/pBack1.png',
  purpleUp2 = './Assets/Player/Purple/pBack.png',
  purpleUp3 = './Assets/Player/Purple/pBack2.png',
  purpleRight1 = './Assets/Player/Purple/pRight1.png',
  purpleRight2 = './Assets/Player/Purple/pRight.png',
  purpleRight3 = './Assets/Player/Purple/pRight2.png',
  purpleLeft1 = './Assets/Player/Purple/pLeft1.png',
  purpleLeft2 = './Assets/Player/Purple/pLeft.png',
  purpleLeft3 = './Assets/Player/Purple/pLeft2.png',
}

enum BluePlayerAnimations {
  blueDown1 = './Assets/Player/Blue/bFront1.png',
  blueDown2 = './Assets/Player/Blue/bFront.png',
  blueDown3 = './Assets/Player/Blue/bFront2.png',
  blueUp1 = './Assets/Player/Blue/bBack1.png',
  blueUp2 = './Assets/Player/Blue/bBack.png',
  blueUp3 = './Assets/Player/Blue/bBack2.png',
  blueRight1 = './Assets/Player/Blue/bRight1.png',
  blueRight2 = './Assets/Player/Blue/bRight.png',
  blueRight3 = './Assets/Player/Blue/bRight2.png',
  blueLeft1 = './Assets/Player/Blue/bLeft1.png',
  blueLeft2 = './Assets/Player/Blue/bLeft.png',
  blueLeft3 = './Assets/Player/Blue/bLeft2.png',
}

export default class Player extends Animatable {
  private direction: number;

  private animationImagesDown: HTMLImageElement[] = [];

  private animationImagesUp: HTMLImageElement[] = [];

  private animationImagesRight: HTMLImageElement[] = [];

  private animationImagesLeft: HTMLImageElement[] = [];

  private selectedCharacter: number;

  private collidesFromBottom: boolean;

  private collidesFromTop: boolean;

  private collidesFromLeft: boolean;

  private collidesFromRight: boolean;

  private nextMoveSound: number;

  private changeSound: boolean;

  public constructor(startX: number, startY: number, selectedPlayer: number) {
    super();
    this.selectedCharacter = selectedPlayer;
    switch (this.selectedCharacter) {
      case 3: {
        this.image = CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerDown2);
        this.setNumberOfSprites(3);
        this.loadAnimationSpritesForPlayerDown(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerUp(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerRight(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerLeft(this.selectedCharacter);
        break;
      }
      case 2: {
        this.image = CanvasUtil.loadNewImage(BluePlayerAnimations.blueDown2);
        this.setNumberOfSprites(3);
        this.loadAnimationSpritesForPlayerDown(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerUp(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerRight(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerLeft(this.selectedCharacter);
        break;
      }
      case 1: {
        this.image = CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleDown2);
        this.setNumberOfSprites(3);
        this.loadAnimationSpritesForPlayerDown(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerUp(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerRight(this.selectedCharacter);
        this.loadAnimationSpritesForPlayerLeft(this.selectedCharacter);
        break;
      }
      default: {
        console.log('error');
        break;
      }
    }
    this.posX = startX;
    this.posY = startY;
    this.timeToNextChange = 10;
    this.speed = 6;
    this.direction = null;
    this.collidesFromBottom = false;
    this.collidesFromLeft = false;
    this.collidesFromRight = false;
    this.collidesFromTop = false;
    this.nextMoveSound = 0;
    this.changeSound = true;
  }

  /**
   * loads animation sprites for player going down
   *
   * @param characterNumber character choice
   */
  private loadAnimationSpritesForPlayerDown(characterNumber: number): void {
    switch (characterNumber) {
      case 3: {
        this.animationImagesDown.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerDown1));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerDown2));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerDown3));
        break;
      }
      case 2: {
        this.animationImagesDown.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueDown1));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueDown2));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueDown3));
        break;
      }
      case 1: {
        this.animationImagesDown.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleDown1));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleDown2));
        this.animationImagesDown.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleDown3));
        break;
      }
      default: {
        console.log('error');
        break;
      }
    }
  }

  /**
   * loads animation sprites for player going up
   *
   * @param characterNumber character choice
   */
  private loadAnimationSpritesForPlayerUp(characterNumber: number): void {
    switch (characterNumber) {
      case 3: {
        this.animationImagesUp.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerUp1));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerUp2));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerUp3));
        break;
      }
      case 2: {
        this.animationImagesUp.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueUp1));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueUp2));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueUp3));
        break;
      }
      case 1: {
        this.animationImagesUp.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleUp1));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleUp2));
        this.animationImagesUp.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleUp3));
        break;
      }
      default: {
        console.log('error');
        break;
      }
    }
  }

  /**
   * loads animation sprites for player going right
   *
   * @param characterNumber character choice
   */
  private loadAnimationSpritesForPlayerRight(characterNumber: number): void {
    switch (characterNumber) {
      case 3: {
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(GingerPlayerAnimations.gingerRight1));
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(GingerPlayerAnimations.gingerRight2));
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(GingerPlayerAnimations.gingerRight3));
        break;
      }
      case 2: {
        this.animationImagesRight.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueRight1));
        this.animationImagesRight.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueRight2));
        this.animationImagesRight.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueRight3));
        break;
      }
      case 1: {
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(PurplePlayerAnimations.purpleRight1));
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(PurplePlayerAnimations.purpleRight2));
        this.animationImagesRight.push(CanvasUtil
          .loadNewImage(PurplePlayerAnimations.purpleRight3));
        break;
      }
      default: {
        console.log('error');
        break;
      }
    }
  }

  /**
   * loads animation sprites for player going left
   *
   * @param characterNumber character choice
   */
  private loadAnimationSpritesForPlayerLeft(characterNumber: number): void {
    switch (characterNumber) {
      case 3: {
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerLeft1));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerLeft2));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerLeft3));
        break;
      }
      case 2: {
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueLeft1));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueLeft2));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(BluePlayerAnimations.blueLeft3));
        break;
      }
      case 1: {
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleLeft1));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleLeft2));
        this.animationImagesLeft.push(CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleLeft3));
        break;
      }
      default: {
        console.log('error');
        break;
      }
    }
  }

  /**
   * Retrieve the plalayer direction
   *
   * @returns players direction 0-up, 1-right, 2-down, 3-left
   */
  public getPlayerDirection(): number {
    return this.direction;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Configures the players speed
   *
   * @param speed speed of player
   */
  public setSpeed(speed: number) {
    this.speed = speed;
  }

  public setBottomSideOfCollision(value: boolean): void {
    this.collidesFromBottom = value;
  }

  public setTopSideOfCollision(value: boolean): void {
    this.collidesFromTop = value;
  }

  public setRightSideOfCollision(value: boolean): void {
    this.collidesFromRight = value;
  }

  public setLeftSideOfCollision(value: boolean): void {
    this.collidesFromLeft = value;
  }

  /**
   * Nulls the direciton
   */
  public nullTheDirection(): void {
    this.direction = null;
  }

  /**
   *
   * @param direction The direction how the player should move
   * 0-up, 1-right, 2-down, 3-left
   */
  public move(direction: number): void {
    this.nextMoveSound -= 1;
    if (this.nextMoveSound < 0) {
      const move = new Audio('');
      move.volume = 0.05;
      if (this.changeSound) {
        move.src = './Sounds/Walk1.mp3';
        this.changeSound = false;
      } else {
        move.src = './Sounds/Walk2.mp3';
        this.changeSound = true;
      }
      move.play();
      this.nextMoveSound = 15;
    }
    if (direction === 0 && !this.collidesFromBottom) {
      this.direction = 0;
      this.posY -= this.speed;
    }
    if (direction === 1 && !this.collidesFromLeft) {
      this.direction = 1;
      this.posX += this.speed;
    }
    if (direction === 2 && !this.collidesFromTop) {
      this.direction = 2;
      this.posY += this.speed;
    }
    if (direction === 3 && !this.collidesFromRight) {
      this.direction = 3;
      this.posX -= this.speed;
    }
    this.collidesFromBottom = false;
    this.collidesFromTop = false;
    this.collidesFromLeft = false;
    this.collidesFromRight = false;
  }

  /**
   * updates the player
   *
   * @param elapsed time that has passed
   */
  public override update(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      if (this.direction === 0) {
        this.imageNumber += 1;
        if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
        this.image = this.animationImagesUp[this.imageNumber];
      }
      if (this.direction === 1) {
        this.imageNumber += 1;
        if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
        this.image = this.animationImagesRight[this.imageNumber];
      }
      if (this.direction === 2) {
        this.imageNumber += 1;
        if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
        this.image = this.animationImagesDown[this.imageNumber];
      }
      if (this.direction === 3) {
        this.imageNumber += 1;
        if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
        this.image = this.animationImagesLeft[this.imageNumber];
      }
      if (this.direction === null) {
        switch (this.selectedCharacter) {
          case 3: {
            this.image = CanvasUtil.loadNewImage(GingerPlayerAnimations.gingerDown2);
            break;
          }
          case 2: {
            this.image = CanvasUtil.loadNewImage(BluePlayerAnimations.blueDown2);
            break;
          }
          case 1: {
            this.image = CanvasUtil.loadNewImage(PurplePlayerAnimations.purpleDown2);
            break;
          }
          default: {
            console.log('error');
            break;
          }
        }
      }
      this.timeToNextChange = 200;
    }
  }

  /**
   * Checks if the player is in a certain range of the animal
   *
   * @param animal The animal which we check the collision with
   * @returns if the player collides with the animal
   */
  public isCloseToAnimal(animal: Animals): boolean {
    return (
      animal.getPosX() + animal.getWidth() + 100 > this.posX
      && animal.getPosX() - 100 < this.posX + this.getWidth()
      && animal.getPosY() + animal.getHeight() + 100 > this.posY
      && animal.getPosY() - 100 < this.posY + this.getHeight()
    );
  }

  /**
   * Checks if the player is colliding with the object
   *
   * @param item the static item e.g. house,hill, etc.
   * @returns if the player collides with the item
   */
  public collidesWithWorldItem(item: Static): boolean {
    return (
      item.getPosX() + item.getWidth() > this.posX
      && item.getPosX() < this.posX + this.getWidth()
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() < this.posY + this.getHeight()
    );
  }

  /**
   * Checks if the player is colliding with the object
   *
   * @param item the static item behind the player e.g. house,hill, etc.
   * @returns if the player collides with the item
   */
  public collidesWithItemBehindPlayer(item: Static): boolean {
    return (
      item.getPosX() + item.getWidth() > this.posX
      && item.getPosX() < this.posX + this.getWidth()
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() + 100 < this.posY + this.getHeight()
    );
  }
}
