import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["zero"] = "./Assets/Animals/Frogs/frogDark1.png";
    SpritesToAnimate["one"] = "./Assets/Animals/Frogs/frogDark2.png";
    SpritesToAnimate["two"] = "./Assets/Animals/Frogs/frogDark3.png";
    SpritesToAnimate["three"] = "./Assets/Animals/Frogs/frogDark4.png";
    SpritesToAnimate["four"] = "./Assets/Animals/Frogs/frogLight1.png";
    SpritesToAnimate["five"] = "./Assets/Animals/Frogs/frogLight2.png";
    SpritesToAnimate["six"] = "./Assets/Animals/Frogs/frogLight3.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Frogs/frogLight4.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Frogs/frogRed1.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Frogs/frogRed2.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Frogs/frogRed3.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Frogs/frogRed4.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Frogs extends Animals {
    frogIndex;
    constructor(startX, startY, index) {
        super(startX, startY);
        this.frogIndex = index;
        this.loadFrogs();
        this.setNumberOfSprites(12);
    }
    loadFrogs() {
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
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        if (this.timeToNextChange < 0) {
            this.image = this.animationImages[this.imageNumber];
            this.imageNumber += 1;
            this.timeToNextChange = 100;
        }
        if (this.frogIndex === 0) {
            this.timeToNextChange -= elapsed * 0.7;
            if (this.imageNumber > 3) {
                this.imageNumber = 0;
            }
        }
        else if (this.frogIndex === 1) {
            if (this.imageNumber <= 3 || this.imageNumber > 7) {
                this.imageNumber = 4;
            }
            if (this.imageNumber <= 4) {
                this.timeToNextChange -= elapsed * 10;
            }
            else {
                this.timeToNextChange -= elapsed * 0.65;
            }
        }
        else if (this.frogIndex === 2) {
            if (this.imageNumber <= 7 || this.imageNumber >= 12) {
                this.imageNumber = 8;
            }
            if (this.imageNumber <= 8) {
                this.timeToNextChange -= elapsed * 10;
            }
            else {
                this.timeToNextChange -= elapsed * 0.65;
            }
        }
    }
}
//# sourceMappingURL=Frog.js.map