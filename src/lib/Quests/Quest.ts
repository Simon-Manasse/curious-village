import Locale from '../Locale.js';
import QuestItem from './QuestItem.js';

export default abstract class Quest {
  protected onGoing: boolean;

  protected current: number;

  protected questId: number;

  protected questLog: string;

  protected requiariement: QuestItem = null;

  protected translation: Locale = new Locale('nl');

  public getonGoing(): boolean {
    return this.onGoing;
  }

  public setonGoing(onGoing: boolean): void {
    this.onGoing = onGoing;
  }

  public getQuestLog(): string {
    if (Locale.getCurrentBrowserLocale() === 'nl') return this.translation.trans(this.questLog);
    return this.questLog;
  }
}
