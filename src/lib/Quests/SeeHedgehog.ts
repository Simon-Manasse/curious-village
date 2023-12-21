import Quest from './Quest.js';

export default class SeeHedgehog extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 8;
    this.questLog = 'Visit Hedgehog near LAKE';
  }
}
