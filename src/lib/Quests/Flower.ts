import CanvasUtil from '../CanvasUtil.js';
import QuestItem from './QuestItem.js';

export default class Flower extends QuestItem {
  public constructor(startX: number, startY: number, image:string) {
    super(startX, startY, image);
    this.pickedUp = false;
    this.image = CanvasUtil.loadNewImage(image);
  }
}
