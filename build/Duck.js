import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Duck/duck1.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Duck/duck2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Duck/duck1.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Duck/duck2.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Duck/duckBack1.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Duck/duckBack2.png";
    SpritesToAnimate["seventh"] = "./Assets/Animals/Duck/duckBack1.png";
    SpritesToAnimate["eighth"] = "./Assets/Animals/Duck/duckBack2.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Duck extends Animals {
    duckIndex;
    constructor(startX, startY, index) {
        super(startX, startY);
        this.duckIndex = index;
        this.setNumberOfSprites(8);
        this.loadAnimationImages();
    }
    loadAnimationImages() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventh));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighth));
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        if (this.duckIndex === 0) {
            this.speed = 0.5;
            this.timeToNextChange -= elapsed;
        }
        else if (this.duckIndex === 1) {
            this.speed = 1;
            this.timeToNextChange -= elapsed * 2;
        }
        else {
            this.speed = 0;
            this.timeToNextChange -= elapsed;
        }
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 300;
        }
        if (this.imageNumber === 1 || this.imageNumber === 2 || this.imageNumber === 3) {
            this.posX += this.speed;
        }
        else if (this.imageNumber === 5 || this.imageNumber === 6 || this.imageNumber === 7 || this.imageNumber === 8) {
            this.posX -= this.speed;
        }
    }
}
//# sourceMappingURL=Duck.js.map