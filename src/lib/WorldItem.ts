import CanvasUtil from './CanvasUtil.js';
import Static from './Static.js';

export default class WorldItem extends Static {
  private worldItemSource: string;

  public constructor(startX: number, startY: number, image: string) {
    super(startX, startY);
    this.image = CanvasUtil.loadNewImage(image);
    this.worldItemSource = this.image.src;
  }

  /**
   * Gets the world item source
   *
   * @returns world item's image source
   */
  public getWorldItemSource(): string {
    // with this method we can determine if the player hits restaurant or his house
    return this.worldItemSource;
  }
}
