import CanvasUtil from './CanvasUtil.js';
import Static from './Static.js';
export default class WorldItem extends Static {
    worldItemSource;
    constructor(startX, startY, image) {
        super(startX, startY);
        this.image = CanvasUtil.loadNewImage(image);
        this.worldItemSource = this.image.src;
    }
    getWorldItemSource() {
        return this.worldItemSource;
    }
}
//# sourceMappingURL=WorldItem.js.map