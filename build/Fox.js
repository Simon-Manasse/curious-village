import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var AnimationSprites;
(function (AnimationSprites) {
    AnimationSprites["fifth"] = "./Assets/Animals/Fox/Fox-idle1.png";
    AnimationSprites["six"] = "./Assets/Animals/Fox/fox1.png";
    AnimationSprites["seven"] = "./Assets/Animals/Fox/fox2.png";
    AnimationSprites["eight"] = "./Assets/Animals/Fox/fox3.png";
    AnimationSprites["nine"] = "./Assets/Animals/Fox/fox4.png";
    AnimationSprites["ten"] = "./Assets/Animals/Fox/fox5.png";
    AnimationSprites["eleven"] = "./Assets/Animals/Fox/fox6.png";
    AnimationSprites["twelve"] = "./Assets/Animals/Fox/fox7.png";
    AnimationSprites["thirteen"] = "./Assets/Animals/Fox/fox8.png";
    AnimationSprites["fourteen"] = "./Assets/Animals/Fox/fox9.png";
    AnimationSprites["fiveteen"] = "./Assets/Animals/Fox/fox10.png";
    AnimationSprites["sixteen"] = "./Assets/Animals/Fox/fox11.png";
    AnimationSprites["seventeen"] = "./Assets/Animals/Fox/Fox-idle4.png";
    AnimationSprites["first"] = "./Assets/Animals/Fox/Fox-idle5.png";
    AnimationSprites["idk"] = "./Assets/Animals/Fox/Fox-idle1.png";
    AnimationSprites["fourth"] = "./Assets/Animals/Fox/Fox-idle2.png";
    AnimationSprites["third"] = "./Assets/Animals/Fox/Fox-idle3.png";
    AnimationSprites["second"] = "./Assets/Animals/Fox/Fox-idle4.png";
    AnimationSprites["last"] = "./Assets/Animals/Fox/Fox-idle5.png";
})(AnimationSprites || (AnimationSprites = {}));
export default class Fox extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.setNumberOfSprites(19);
        this.loadAnimationImages();
    }
    loadAnimationImages() {
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fifth));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.six));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.seven));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.eight));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.nine));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.ten));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.eleven));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.twelve));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.thirteen));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fourteen));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fiveteen));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.sixteen));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.seventeen));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.first));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.idk));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.fourth));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.third));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.second));
        this.animationImages.push(CanvasUtil.loadNewImage(AnimationSprites.last));
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
//# sourceMappingURL=Fox.js.map