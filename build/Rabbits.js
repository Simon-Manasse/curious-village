import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["zero"] = "./Assets/Animals/Rabbits/rabbitIdle.png";
    SpritesToAnimate["one"] = "./Assets/Animals/Rabbits/rabbitSleep1.png";
    SpritesToAnimate["two"] = "./Assets/Animals/Rabbits/rabbitSleep2.png";
    SpritesToAnimate["three"] = "./Assets/Animals/Rabbits/rabbitSleep1.png";
    SpritesToAnimate["four"] = "./Assets/Animals/Rabbits/rabbitRun1.png";
    SpritesToAnimate["five"] = "./Assets/Animals/Rabbits/rabbitRun2.png";
    SpritesToAnimate["six"] = "./Assets/Animals/Rabbits/rabbitRun3.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Rabbits/rabbitRun4.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Rabbits/rabbitRun1.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Rabbits/rabbitRun5.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Rabbits/rabbitRun6.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Rabbits/rabbitRun7.png";
    SpritesToAnimate["twelve"] = "./Assets/Animals/Rabbits/rabbitRun8.png";
    SpritesToAnimate["thirteen"] = "./Assets/Animals/Rabbits/rabbitRun5.png";
    SpritesToAnimate["fourteen"] = "./Assets/Animals/Rabbits/rabbitCleanIdle.png";
    SpritesToAnimate["fiveteen"] = "./Assets/Animals/Rabbits/rabbitClean5.png";
    SpritesToAnimate["sixteen"] = "./Assets/Animals/Rabbits/rabbitClean4.png";
    SpritesToAnimate["seventeen"] = "./Assets/Animals/Rabbits/rabbitClean5.png";
    SpritesToAnimate["eighteen"] = "./Assets/Animals/Rabbits/rabbitClean4.png";
    SpritesToAnimate["nineteen"] = "./Assets/Animals/Rabbits/rabbitClean3.png";
    SpritesToAnimate["twenty"] = "./Assets/Animals/Rabbits/rabbitClean2.png";
    SpritesToAnimate["twentyOne"] = "./Assets/Animals/Rabbits/rabbitClean1.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Rabbits extends Animals {
    rabbitIndex;
    constructor(startX, startY, index) {
        super(startX, startY);
        this.rabbitIndex = index;
        this.loadRabbit0();
        this.loadRabbit1();
        this.loadRabbit2();
        this.setNumberOfSprites(21);
    }
    loadRabbit0() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.zero));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.one));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.two));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.three));
        this.image = this.animationImages[this.imageNumber];
    }
    loadRabbit1() {
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
    loadRabbit2() {
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyOne));
        this.image = this.animationImages[this.imageNumber];
    }
    update(elapsed) {
        if (this.timeToNextChange < 0) {
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 300;
            this.imageNumber += 1;
        }
        if (this.rabbitIndex === 0) {
            this.speed = 0;
            if (this.imageNumber === 3 || this.imageNumber === 1) {
                this.timeToNextChange -= elapsed * 0.1;
            }
            else {
                this.timeToNextChange -= elapsed * 2;
            }
            if (this.imageNumber > 3) {
                this.imageNumber = 0;
            }
        }
        else if (this.rabbitIndex === 1) {
            this.speed = 3;
            if (this.imageNumber < 5 || this.imageNumber >= 14) {
                this.imageNumber = 4;
            }
            if (this.imageNumber === 5 || this.imageNumber === 10 || this.imageNumber === 9) {
                this.timeToNextChange -= elapsed * 0.3;
            }
            else
                this.timeToNextChange -= elapsed * 1.5;
            if (this.imageNumber !== 4 && this.imageNumber !== 5 && (this.imageNumber > 3 && this.imageNumber < 9)) {
                this.posX += this.speed;
            }
            else if (this.imageNumber !== 10 && this.imageNumber !== 9 && (this.imageNumber > 8 && this.imageNumber < 14)) {
                this.posX -= this.speed;
            }
        }
        else if (this.rabbitIndex === 2) {
            if (this.imageNumber === 15) {
                this.timeToNextChange -= elapsed * 0.1;
            }
            else {
                this.timeToNextChange -= elapsed * 1.5;
            }
            if (this.imageNumber < 14 || this.imageNumber >= 22) {
                this.imageNumber = 14;
            }
        }
    }
}
//# sourceMappingURL=Rabbits.js.map