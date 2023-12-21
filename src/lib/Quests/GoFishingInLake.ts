import Quest from './Quest.js';

export default class GoFishingInLake extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 4;
    this.questLog = 'Go fishing in the LAKE';
  }
}
