import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Wolf/Wolf-idle1.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Wolf/Wolf-idle2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Wolf/Wolf-idle3.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Wolf/Wolf-idle4.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Wolf/Wolf-idle5.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Wolf/Wolf-idle6.png";
    SpritesToAnimate["seventh"] = "./Assets/Animals/Wolf/Wolf-idle7.png";
    SpritesToAnimate["eighth"] = "./Assets/Animals/Wolf/Wolf-idle8.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Wolf extends Animals {
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
//# sourceMappingURL=Wolf.js.map