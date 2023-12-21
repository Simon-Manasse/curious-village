import WorldItem from '../WorldItem.js';

export default abstract class QuestItem extends WorldItem {
  protected pickedUp: boolean;

  public getPickUpStatus(): boolean {
    return this.pickedUp;
  }
}
