import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var SpritesToAnimate;
(function (SpritesToAnimate) {
    SpritesToAnimate["zero"] = "./Assets/Animals/Gnomes/Ihor1.png";
    SpritesToAnimate["one"] = "./Assets/Animals/Gnomes/Ihor2.png";
    SpritesToAnimate["two"] = "./Assets/Animals/Gnomes/Ihor3.png";
    SpritesToAnimate["three"] = "./Assets/Animals/Gnomes/Ihor4.png";
    SpritesToAnimate["four"] = "./Assets/Animals/Gnomes/Ihor5.png";
    SpritesToAnimate["five"] = "./Assets/Animals/Gnomes/Ihor6.png";
    SpritesToAnimate["six"] = "./Assets/Animals/Gnomes/Ihor7.png";
    SpritesToAnimate["seven"] = "./Assets/Animals/Gnomes/Ihor8.png";
    SpritesToAnimate["eight"] = "./Assets/Animals/Gnomes/Simon1.png";
    SpritesToAnimate["nine"] = "./Assets/Animals/Gnomes/Simon2.png";
    SpritesToAnimate["ten"] = "./Assets/Animals/Gnomes/Simon3.png";
    SpritesToAnimate["eleven"] = "./Assets/Animals/Gnomes/Simon4.png";
    SpritesToAnimate["twelve"] = "./Assets/Animals/Gnomes/Simonko1.png";
    SpritesToAnimate["thirteen"] = "./Assets/Animals/Gnomes/Simonko2.png";
    SpritesToAnimate["fourteen"] = "./Assets/Animals/Gnomes/Simonko3.png";
    SpritesToAnimate["fiveteen"] = "./Assets/Animals/Gnomes/Simonko4.png";
    SpritesToAnimate["sixteen"] = "./Assets/Animals/Gnomes/Simonko5.png";
    SpritesToAnimate["seventeen"] = "./Assets/Animals/Gnomes/Simonko6.png";
    SpritesToAnimate["eighteen"] = "./Assets/Animals/Gnomes/Simonko7.png";
    SpritesToAnimate["nineteen"] = "./Assets/Animals/Gnomes/Simonko8.png";
    SpritesToAnimate["twenty"] = "./Assets/Animals/Gnomes/Simonko9.png";
    SpritesToAnimate["twentyOne"] = "./Assets/Animals/Gnomes/Simonko10.png";
    SpritesToAnimate["extra"] = "./Assets/Animals/Gnomes/Simonko10.png";
})(SpritesToAnimate || (SpritesToAnimate = {}));
export default class Gnomes extends Animals {
    gnomeIndex;
    teleport;
    constructor(startX, startY, index) {
        super(startX, startY);
        this.gnomeIndex = index;
        this.teleport = 1;
        this.loadGnomes();
        this.setNumberOfSprites(23);
    }
    loadGnomes() {
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
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fourteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.fiveteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.sixteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.seventeen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.eighteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.nineteen));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twenty));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.twentyOne));
        this.animationImages.push(CanvasUtil.loadNewImage(SpritesToAnimate.extra));
        if (this.gnomeIndex === 1) {
            this.image = this.animationImages[8];
        }
        if (this.gnomeIndex === 2) {
            this.image = this.animationImages[12];
        }
        if (this.gnomeIndex === 0) {
            this.image = this.animationImages[0];
        }
    }
    update(elapsed) {
        if (this.timeToNextChange < 0) {
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 200;
            this.imageNumber += 1;
        }
        if (this.gnomeIndex === 0) {
            this.timeToNextChange -= elapsed * 2;
            if (this.imageNumber > 7) {
                this.imageNumber = 0;
            }
            if (this.imageNumber < 2) {
                this.posX += 1.5;
                this.posY -= 1.5;
            }
            else if (this.imageNumber < 4) {
                this.posX += 1.5;
                this.posY += 1.5;
            }
            else if (this.imageNumber < 6) {
                this.posX -= 1.5;
                this.posY += 1.5;
            }
            else if (this.imageNumber <= 7) {
                this.posX -= 1.5;
                this.posY -= 1.5;
            }
        }
        if (this.gnomeIndex === 1) {
            if (this.imageNumber <= 7 || this.imageNumber > 11) {
                this.imageNumber = 8;
            }
            if (this.imageNumber === 9) {
                this.timeToNextChange -= elapsed * 0.1;
            }
            else {
                this.timeToNextChange -= elapsed * 2.5;
            }
        }
        if (this.gnomeIndex === 2) {
            if (this.imageNumber <= 11 || this.imageNumber > 22) {
                this.imageNumber = 12;
            }
            if (this.imageNumber === 22 || this.imageNumber === 13) {
                this.timeToNextChange -= elapsed * 0.1;
            }
            else {
                this.timeToNextChange -= elapsed * 2.5;
            }
            if (this.imageNumber === 22) {
                this.teleport += 1;
            }
            if (this.teleport === 3) {
                this.teleport = 1;
            }
            if (this.teleport % 2) {
                this.posX = 710;
                this.posY = 120;
            }
            else {
                this.posX = 440;
                this.posY = 500;
            }
        }
    }
}
//# sourceMappingURL=Gnomes.js.map