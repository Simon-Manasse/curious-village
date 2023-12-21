import Quest from './Quest.js';

export default class TalkToCapybara extends Quest {
  public constructor() {
    super();
    this.onGoing = true;
    this.questId = 1;
    this.questLog = 'Talk to Capybara';
  }
}
