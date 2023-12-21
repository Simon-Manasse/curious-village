import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Crocodiles/smallCrock3.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Crocodiles/smallCrock4.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Crocodiles/smallCrock1.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Crocodiles/smallCrock2.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class SmallCrocodile extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.setNumberOfSprites(4);
        this.loadAnimationImages();
    }
    loadAnimationImages() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
        this.image = this.animationImages[this.imageNumber];
    }
}
//# sourceMappingURL=SmallCrocodile.js.map