import Quest from './Quest.js';

export default class BringWaterToHedgehog extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 10;
    this.questLog = 'Bring water to Hedgehog';
  }
}
