import Flower from './Flower.js';
import Quest from './Quest.js';

export default class FlowerQuest extends Quest {
  public constructor() {
    super();
    this.onGoing = true;
    this.questId = 2;
    this.questLog = 'Get a flower from the FOREST';
  }
}
