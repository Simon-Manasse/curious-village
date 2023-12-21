import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["zero"] = "./Assets/Animals/Sheep/sheepSleep1.png";
    SpritesToAnimate["one"] = "./Assets/Animals/Sheep/sheepSleep2.png";
    SpritesToAnimate["two"] = "./Assets/Animals/Sheep/sheepWalk1.png";
    SpritesToAnimate["three"] = "./Assets/Animals/Sheep/sheepWalk2.png";
    SpritesToAnimate["four"] = "./Assets/Animals/Sheep/sheepWalk3.png";
    SpritesToAnimate["five"] = "./Assets/Animals/Sheep/sheepWalk4.png";
    SpritesToAnimate["six"] = "./Assets/Animals/Sheep/sheepWalk5.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Sheep/sheepWalk6.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Sheep/sheepWalk7.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Sheep/sheepWalk8.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Sheep extends Animals {
    sheepIndex;
    constructor(startX, startY, index) {
        super(startX, startY);
        this.sheepIndex = index;
        this.loadSheep0();
        this.loadSheep1();
        this.setNumberOfSprites(10);
    }
    loadSheep0() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
        this.image = this.animationImages[this.imageNumber];
    }
    loadSheep1() {
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
    update(elapsed) {
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
        }
        else if (this.sheepIndex === 1) {
            this.speed = 1;
            if (this.imageNumber >= 10 || this.imageNumber <= 2) {
                this.imageNumber = 3;
            }
            if (this.imageNumber <= 3) {
                this.timeToNextChange -= elapsed * 10;
            }
            else {
                this.timeToNextChange -= elapsed;
            }
            if (this.imageNumber > 3 && this.imageNumber < 7) {
                this.posX -= this.speed;
            }
            else if (this.imageNumber > 5 && this.imageNumber < 11) {
                this.posX += this.speed;
            }
        }
    }
}
//# sourceMappingURL=Sheep.js.map