import Quest from './Quest.js';

export default class TalkToTheRacoon extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 9;
    this.questLog = 'Talk to Raccoon';
  }
}
