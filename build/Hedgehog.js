import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Hedgehog/Hedgehog-idle1.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Hedgehog/Hedgehog-idle2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Hedgehog/Hedgehog-idle3.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Hedgehog/Hedgehog-idle2.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Hedgehog/Hedgehog-idle3.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Hedgehog/Hedgehog-idle4.png";
    SpritesToAnimate["seventh"] = "./Assets/Animals/Hedgehog/Hedgehog-idle1.png";
    SpritesToAnimate["eighth"] = "./Assets/Animals/Hedgehog/Hedgehog-idle4.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Hedgehog extends Animals {
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
}
//# sourceMappingURL=Hedgehog.js.map