import CanvasUtil from '../CanvasUtil.js';
import QuestItem from './QuestItem.js';
export default class Flower extends QuestItem {
    constructor(startX, startY, image) {
        super(startX, startY, image);
        this.pickedUp = false;
        this.image = CanvasUtil.loadNewImage(image);
    }
}
//# sourceMappingURL=Flower.js.map