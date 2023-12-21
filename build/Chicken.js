import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Chicken/chicken-1.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Chicken/chicken-2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Chicken/chicken-3.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Chicken/chicken-4.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Chicken/chicken-5.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Chicken/chicken-6.png";
    SpritesToAnimate["seventh"] = "./Assets/Animals/Chicken/chicken-7.png";
    SpritesToAnimate["eighth"] = "./Assets/Animals/Chicken/chicken-8.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Chicken extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
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
        this.timeToNextChange -= elapsed;
        if (this.imageNumber === 1) {
            this.posX += 1.5;
            this.posY -= 1.5;
        }
        else if (this.imageNumber === 3) {
            this.posX += 1.5;
            this.posY += 1.5;
        }
        else if (this.imageNumber === 5) {
            this.posX -= 1.5;
            this.posY += 1.5;
        }
        else if (this.imageNumber === 7) {
            this.posX -= 1.5;
            this.posY -= 1.5;
        }
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 300;
        }
    }
}
//# sourceMappingURL=Chicken.js.map