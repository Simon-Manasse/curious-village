import Drawable from './Drawable.js';
export default class Animatable extends Drawable {
    speed;
    animationImages = [];
    timeToNextChange;
    imageNumber;
    numberOfSprites;
    constructor() {
        super();
        this.numberOfSprites = 0;
        this.timeToNextChange = 300;
        this.imageNumber = 0;
    }
    setNumberOfSprites(numberOfSprites) {
        this.numberOfSprites = numberOfSprites - 1;
    }
    update(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = 300;
        }
    }
}
//# sourceMappingURL=Animatable.js.map