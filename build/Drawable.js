import CanvasUtil from './CanvasUtil.js';
export default class Drawable {
    image;
    posX;
    posY;
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=Drawable.js.map