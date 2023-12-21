import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
var Frames;
(function (Frames) {
    Frames["first"] = "Assets/Animals/Raccoon/Raccoon-idle1.png";
    Frames["second"] = "Assets/Animals/Raccoon/Raccoon-idle2.png";
    Frames["third"] = "Assets/Animals/Raccoon/Raccoon-idle3.png";
    Frames["fourth"] = "Assets/Animals/Raccoon/Raccoon-idle4.png";
    Frames["fifth"] = "Assets/Animals/Raccoon/Raccoon-idle5.png";
    Frames["sixth"] = "Assets/Animals/Raccoon/Raccoon-idle6.png";
    Frames["seventh"] = "Assets/Animals/Raccoon/Raccoon-idle7.png";
    Frames["eighth"] = "Assets/Animals/Raccoon/Raccoon-idle8.png";
})(Frames || (Frames = {}));
export default class Raccoon extends Animals {
    constructor(startX, startY) {
        super(startX, startY);
        this.setNumberOfSprites(7);
        this.loadAnimationSprites();
    }
    loadAnimationSprites() {
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.first));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.second));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.third));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.fourth));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.fifth));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.sixth));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.seventh));
        this.animationImages.push(CanvasUtil.loadNewImage(Frames.eighth));
        this.image = this.animationImages[this.imageNumber];
    }
}
//# sourceMappingURL=Raccoon.js.map