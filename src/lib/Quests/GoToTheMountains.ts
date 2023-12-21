import Quest from './Quest.js';

export default class GoToMountains extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 7;
    this.questLog = 'Visit Wolf in the MOUNTAINS';
  }
}
