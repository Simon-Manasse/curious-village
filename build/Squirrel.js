import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["second"] = "./Assets/Animals/Squirrel/Squirrel-idle2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Squirrel/Squirrel-idle3.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Squirrel/Squirrel-idle4.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Squirrel/Squirrel-idle5.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Squirrel/Squirrel-idle6.png";
    SpritesToAnimate["first"] = "./Assets/Animals/Squirrel/Squirrel-idle1.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Squirrel/squirell1.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Squirrel/squirell2.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Squirrel/squirell3.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Squirrel/squirell4.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Squirrel/Squirrel-idle6.png";
    SpritesToAnimate["twelve"] = "./Assets/Animals/Squirrel/Squirrel-idle1.png";
    SpritesToAnimate["thirteen"] = "./Assets/Animals/Squirrel/scratch1.png";
    SpritesToAnimate["fourteen"] = "./Assets/Animals/Squirrel/scratch2.png";
    SpritesToAnimate["fiveteen"] = "./Assets/Animals/Squirrel/scratch3.png";
    SpritesToAnimate["sixteen"] = "./Assets/Animals/Squirrel/scratch4.png";
    SpritesToAnimate["seventeen"] = "./Assets/Animals/Squirrel/Squirrel-idle1.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Squirrel extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.setNumberOfSprites(17);
        this.loadAnimationImages();
    }
    loadAnimationImages() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.second));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.third));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fifth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.first));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            this.timeToNextChange = 100;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
        }
    }
}
//# sourceMappingURL=Squirrel.js.map