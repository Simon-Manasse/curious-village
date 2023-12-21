import Quest from './Quest.js';

export default class TalkToTheFox extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 4;
    this.questLog = 'Visit Fox in the FOREST';
  }
}
