import QuestItem from './QuestItem.js';

export default class Fish extends QuestItem {
  public constructor(startX: number, startY: number, image: string) {
    super(startX, startY, image);
  }
}
