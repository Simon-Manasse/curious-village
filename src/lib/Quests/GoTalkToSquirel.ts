import Quest from './Quest.js';

export default class TalkToSquirel extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 6;
    this.questLog = 'Visit Squirrel in SWAMP';
  }
}
