import Quest from './Quest.js';

export default class BringFishBack extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 5;
    this.questLog = 'Bring fish to Fox';
  }
}
