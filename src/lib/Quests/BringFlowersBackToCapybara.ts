import Quest from './Quest.js';

export default class BringFlowerBackToCapybara extends Quest {
  public constructor() {
    super();
    this.onGoing = false;
    this.questId = 3;
    this.questLog = 'Bring flower to Capybara';
  }
}
