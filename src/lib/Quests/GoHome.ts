import Quest from './Quest.js';

export default class GoHome extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 11;
    this.questLog = 'Go HOME (red house)';
  }
}
