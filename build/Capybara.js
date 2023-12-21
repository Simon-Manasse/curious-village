import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["first"] = "./Assets/Animals/Capybara/cap 1.png";
    SpritesToAnimate["second"] = "./Assets/Animals/Capybara/cap 2.png";
    SpritesToAnimate["third"] = "./Assets/Animals/Capybara/cap 3.png";
    SpritesToAnimate["fourth"] = "./Assets/Animals/Capybara/cap 4.png";
    SpritesToAnimate["fifth"] = "./Assets/Animals/Capybara/cap 4.png";
    SpritesToAnimate["sixth"] = "./Assets/Animals/Capybara/cap 3.png";
    SpritesToAnimate["seventh"] = "./Assets/Animals/Capybara/cap 2.png";
    SpritesToAnimate["eighth"] = "./Assets/Animals/Capybara/cap 1.png";
    SpritesToAnimate["ninth"] = "./Assets/Animals/Capybara/capLie1.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Capybara/capLie2.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Capybara/capLie3.png";
    SpritesToAnimate["twelve"] = "./Assets/Animals/Capybara/capLie4.png";
    SpritesToAnimate["thirteen"] = "./Assets/Animals/Capybara/capLie5.png";
    SpritesToAnimate["sixteen"] = "./Assets/Animals/Capybara/capLie4.png";
    SpritesToAnimate["seventeen"] = "./Assets/Animals/Capybara/capLie3.png";
    SpritesToAnimate["eighteen"] = "./Assets/Animals/Capybara/capLie2.png";
    SpritesToAnimate["nineteen"] = "./Assets/Animals/Capybara/capLie1.png";
    SpritesToAnimate["twenty"] = "./Assets/Animals/Capybara/cap 1.png";
    SpritesToAnimate["twentyone"] = "./Assets/Animals/Capybara/capStomp1.png";
    SpritesToAnimate["twentytwo"] = "./Assets/Animals/Capybara/capStomp2.png";
    SpritesToAnimate["twentythree"] = "./Assets/Animals/Capybara/capStomp3.png";
    SpritesToAnimate["twentyfour"] = "./Assets/Animals/Capybara/capStomp4.png";
    SpritesToAnimate["twentyfive"] = "./Assets/Animals/Capybara/capStomp5.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Capybara extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.setNumberOfSprites(23);
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
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ninth));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.ten));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eleven));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twelve));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.thirteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyone));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentytwo));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentythree));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyfour));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyfive));
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            if (this.imageNumber === 4 || this.imageNumber === 12 || this.imageNumber === 0) {
                this.timeToNextChange = 2000;
            }
            else if (this.imageNumber >= 18) {
                this.timeToNextChange = 50;
            }
            else {
                this.timeToNextChange = 100;
            }
        }
    }
}
//# sourceMappingURL=Capybara.js.map