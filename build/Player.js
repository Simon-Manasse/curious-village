import Animatable from './Animatable.js';
import CanvasUtil from './CanvasUtil.js';
var GingerPlayerAnimations;
(function (GingerPlayerAnimations) {
    GingerPlayerAnimations["gingerDown1"] = "./Assets/Player/Ginger/Ginger-down-1.png";
    GingerPlayerAnimations["gingerDown2"] = "./Assets/Player/Ginger/Ginger-down-2.png";
    GingerPlayerAnimations["gingerDown3"] = "./Assets/Player/Ginger/Ginger-down-3.png";
    GingerPlayerAnimations["gingerUp1"] = "./Assets/Player/Ginger/Ginger-up-1.png";
    GingerPlayerAnimations["gingerUp2"] = "./Assets/Player/Ginger/Ginger-up-2.png";
    GingerPlayerAnimations["gingerUp3"] = "./Assets/Player/Ginger/Ginger-up-3.png";
    GingerPlayerAnimations["gingerRight1"] = "./Assets/Player/Ginger/Ginger-right-1.png";
    GingerPlayerAnimations["gingerRight2"] = "./Assets/Player/Ginger/Ginger-right-2.png";
    GingerPlayerAnimations["gingerRight3"] = "./Assets/Player/Ginger/Ginger-right-3.png";
    GingerPlayerAnimations["gingerLeft1"] = "./Assets/Player/Ginger/Ginger-left-1.png";
    GingerPlayerAnimations["gingerLeft2"] = "./Assets/Player/Ginger/Ginger-left-2.png";
    GingerPlayerAnimations["gingerLeft3"] = "./Assets/Player/Ginger/Ginger-left-3.png";
})(GingerPlayerAnimations || (GingerPlayerAnimations = {}));
var PurplePlayerAnimations;
(function (PurplePlayerAnimations) {
    PurplePlayerAnimations["purpleDown1"] = "./Assets/Player/Purple/pFront1.png";
    PurplePlayerAnimations["purpleDown2"] = "./Assets/Player/Purple/pFront.png";
    PurplePlayerAnimations["purpleDown3"] = "./Assets/Player/Purple/pFront2.png";
    PurplePlayerAnimations["purpleUp1"] = "./Assets/Player/Purple/pBack1.png";
    PurplePlayerAnimations["purpleUp2"] = "./Assets/Player/Purple/pBack.png";
    PurplePlayerAnimations["purpleUp3"] = "./Assets/Player/Purple/pBack2.png";
    PurplePlayerAnimations["purpleRight1"] = "./Assets/Player/Purple/pRight1.png";
    PurplePlayerAnimations["purpleRight2"] = "./Assets/Player/Purple/pRight.png";
    PurplePlayerAnimations["purpleRight3"] = "./Assets/Player/Purple/pRight2.png";
    PurplePlayerAnimations["purpleLeft1"] = "./Assets/Player/Purple/pLeft1.png";
    PurplePlayerAnimations["purpleLeft2"] = "./Assets/Player/Purple/pLeft.png";
    PurplePlayerAnimations["purpleLeft3"] = "./Assets/Player/Purple/pLeft2.png";
})(PurplePlayerAnimations || (PurplePlayerAnimations = {}));
var BluePlayerAnimations;
(function (BluePlayerAnimations) {
    BluePlayerAnimations["blueDown1"] = "./Assets/Player/Blue/bFront1.png";
    BluePlayerAnimations["blueDown2"] = "./Assets/Player/Blue/bFront.png";
    BluePlayerAnimations["blueDown3"] = "./Assets/Player/Blue/bFront2.png";
    BluePlayerAnimations["blueUp1"] = "./Assets/Player/Blue/bBack1.png";
    BluePlayerAnimations["blueUp2"] = "./Assets/Player/Blue/bBack.png";
    BluePlayerAnimations["blueUp3"] = "./Assets/Player/Blue/bBack2.png";
    BluePlayerAnimations["blueRight1"] = "./Assets/Player/Blue/bRight1.png";
    BluePlayerAnimations["blueRight2"] = "./Assets/Player/Blue/bRight.png";
    BluePlayerAnimations["blueRight3"] = "./Assets/Player/Blue/bRight2.png";
    BluePlayerAnimations["blueLeft1"] = "./Assets/Player/Blue/bLeft1.png";
    BluePlayerAnimations["blueLeft2"] = "./Assets/Player/Blue/bLeft.png";
    BluePlayerAnimations["blueLeft3"] = "./Assets/Player/Blue/bLeft2.png";
})(BluePlayerAnimations || (BluePlayerAnimations = {}));
export default class Player extends Animatable {
    direction;
    animationImagesDown = [];
    animationImagesUp = [];
    animationImagesRight = [];
    animationImagesLeft = [];
    selectedCharacter;
    collidesFromBottom;
    collidesFromTop;
    collidesFromLeft;
    collidesFromRight;
    nextMoveSound;
    changeSound;
    constructor(startX, startY, selectedPlayer) {
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
    loadAnimationSpritesForPlayerDown(characterNumber) {
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
    loadAnimationSpritesForPlayerUp(characterNumber) {
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
    loadAnimationSpritesForPlayerRight(characterNumber) {
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
    loadAnimationSpritesForPlayerLeft(characterNumber) {
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
    getPlayerDirection() {
        return this.direction;
    }
    getImage() {
        return this.image;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    setBottomSideOfCollision(value) {
        this.collidesFromBottom = value;
    }
    setTopSideOfCollision(value) {
        this.collidesFromTop = value;
    }
    setRightSideOfCollision(value) {
        this.collidesFromRight = value;
    }
    setLeftSideOfCollision(value) {
        this.collidesFromLeft = value;
    }
    nullTheDirection() {
        this.direction = null;
    }
    move(direction) {
        this.nextMoveSound -= 1;
        if (this.nextMoveSound < 0) {
            const move = new Audio('');
            move.volume = 0.05;
            if (this.changeSound) {
                move.src = './Sounds/Walk1.mp3';
                this.changeSound = false;
            }
            else {
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
    update(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            if (this.direction === 0) {
                this.imageNumber += 1;
                if (this.imageNumber > this.numberOfSprites)
                    this.imageNumber = 0;
                this.image = this.animationImagesUp[this.imageNumber];
            }
            if (this.direction === 1) {
                this.imageNumber += 1;
                if (this.imageNumber > this.numberOfSprites)
                    this.imageNumber = 0;
                this.image = this.animationImagesRight[this.imageNumber];
            }
            if (this.direction === 2) {
                this.imageNumber += 1;
                if (this.imageNumber > this.numberOfSprites)
                    this.imageNumber = 0;
                this.image = this.animationImagesDown[this.imageNumber];
            }
            if (this.direction === 3) {
                this.imageNumber += 1;
                if (this.imageNumber > this.numberOfSprites)
                    this.imageNumber = 0;
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
    isCloseToAnimal(animal) {
        return (animal.getPosX() + animal.getWidth() + 100 > this.posX
            && animal.getPosX() - 100 < this.posX + this.getWidth()
            && animal.getPosY() + animal.getHeight() + 100 > this.posY
            && animal.getPosY() - 100 < this.posY + this.getHeight());
    }
    collidesWithWorldItem(item) {
        return (item.getPosX() + item.getWidth() > this.posX
            && item.getPosX() < this.posX + this.getWidth()
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() < this.posY + this.getHeight());
    }
    collidesWithItemBehindPlayer(item) {
        return (item.getPosX() + item.getWidth() > this.posX
            && item.getPosX() < this.posX + this.getWidth()
            && item.getPosY() + item.getHeight() > this.posY
            && item.getPosY() + 100 < this.posY + this.getHeight());
    }
}
//# sourceMappingURL=Player.js.map