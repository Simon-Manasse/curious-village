import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["zero"] = "./Assets/Animals/Unicorn/unicorn1.png";
    SpritesToAnimate["one"] = "./Assets/Animals/Unicorn/unicorn2.png";
    SpritesToAnimate["two"] = "./Assets/Animals/Unicorn/unicorn3.png";
    SpritesToAnimate["three"] = "./Assets/Animals/Unicorn/unicorn4.png";
    SpritesToAnimate["four"] = "./Assets/Animals/Unicorn/unicorn5.png";
    SpritesToAnimate["five"] = "./Assets/Animals/Unicorn/unicorn6.png";
    SpritesToAnimate["six"] = "./Assets/Animals/Unicorn/unicorn7.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Unicorn/unicorn8.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Unicorn/unicorn9.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Unicorn/unicorn10.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Unicorn/unicorn11.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Unicorn/unicorn12.png";
    SpritesToAnimate["twelve"] = "./Assets/Animals/Unicorn/unicorn13.png";
    SpritesToAnimate["thirteen"] = "./Assets/Animals/Unicorn/unicorn14.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Unicorn extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.loadUnicorn();
        this.setNumberOfSprites(14);
    }
    loadUnicorn() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.four));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.five));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.six));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seven));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eight));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nine));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            if (this.imageNumber === 3 || this.imageNumber === 10) {
                this.timeToNextChange = 500;
            }
            else if (this.imageNumber === 0 || this.imageNumber === 7) {
                this.timeToNextChange = 2000;
            }
            else {
                this.timeToNextChange = 50;
            }
        }
    }
}
//# sourceMappingURL=Unicorn.js.map