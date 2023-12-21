import BadEnding from '../BadEnding.js';
import GoodEnding from '../GoodEnding.js';
import House from '../House.js';
import Scene from '../Scene.js';
import Village from '../Village.js';
import BringFlowerBackToCapybara from './BringFlowersBackToCapybara.js';
import BringFishBack from './BringsFishBack.js';
import BringWaterToHedgehog from './BringWaterToHedgehog.js';
import Fish from './Fish.js';
import Flower from './Flower.js';
import FlowerQuest from './FlowerQuest.js';
import GoFishingInLake from './GoFishingInLake.js';
import GoHome from './GoHome.js';
import TalkToSquirel from './GoTalkToSquirel.js';
import GoToMountains from './GoToTheMountains.js';
import Quest from './Quest.js';
import QuestItem from './QuestItem.js';
import SeeHedgehog from './SeeHedgehog.js';
import TalkToCapybara from './TalkToCapybara.js';
import TalkToTheFox from './TalkToTheFox.js';
import TalkToTheRacoon from './TalkToTheRacoon.js';

export default class QuestManager {
  private static quests: Quest[] = [
    new TalkToCapybara(),
    new FlowerQuest(),
    new BringFlowerBackToCapybara(),
    new TalkToTheFox(),
    new GoFishingInLake(),
    new BringFishBack(),
    new TalkToSquirel(),
    new GoToMountains(),
    new SeeHedgehog(),
    new TalkToTheRacoon(),
    new BringWaterToHedgehog(),
    new GoHome(),
  ];

  private static flower: Flower = null;

  private static endingScene: Scene;

  private static canGameFinish: boolean = false;

  private static fish: Fish = null;

  private static badChoices: number = 0;

  protected static onGoingQuestIndex: number = 0;

  protected static onGoingQuest: Quest = this.quests[this.onGoingQuestIndex];

  protected static onGoingQuestQuestLog = this.onGoingQuest.getQuestLog();

  /**
   * Starts new quest in order
   */
  public static startNewQuest() {
    if (this.onGoingQuestIndex === 1) {
      if (this.flower !== null) {
        this.onGoingQuestIndex += 1;
        this.onGoingQuest = this.quests[this.onGoingQuestIndex];
      } else {
        console.error('Unable to start next qeust get the flower first');
      }
    } else if (this.onGoingQuestIndex === 4) {
      if (this.fish !== null) {
        this.onGoingQuestIndex += 1;
        this.onGoingQuest = this.quests[this.onGoingQuestIndex];
      } else console.error('Unable to start next qeust get the fish first');
    } else {
      this.onGoingQuestIndex += 1;
      this.onGoingQuest = this.quests[this.onGoingQuestIndex];
    }
    this.canGameFinish = false;
  }

  public static endGame(): void {
    this.canGameFinish = true;
  }

  public static addBadChoice(): void {
    this.badChoices += 1;
  }

  /**
   * Returns new scene with bad or good enign
   *
   * @param maxX max x position
   * @param maxY max y postiion
   * @returns good ending if not a single bad choice was made
   */
  public static checkIfShouldEnd(maxX: number, maxY: number, scene: string = ''): Scene {
    if (this.canGameFinish) {
      console.log('game finished');
      console.log(this.badChoices);
      if (this.badChoices > 0) {
        return new BadEnding(maxX, maxY);
      }
      if (this.badChoices === 0 && scene === 'house') {
        return new GoodEnding(maxX, maxY);
      }
    }
    return null;
  }

  /**
   * Starts quest with index
   *
   * @param qeustIndex 0 - talk to capibara, 1 - flower qeust, 2 - bring flowers back
   * 3 - go talkt to the fox, 4 - go fishing, 5 - bring fish back, 6 - talk to the squirell
   * 7 - go to the mountains, 8 - talk to the hedgehog, 9 - talk to the racoon
   * 10 - bring water back to the hegehog, 11 - go home
   */
  public static startQuestWithIndex(qeustIndex: number) {
    this.onGoingQuestIndex = qeustIndex;
    this.onGoingQuest = this.quests[this.onGoingQuestIndex];
  }

  /**
   * Gets qeust log
   *
   * @returns ongoing quest quest log
   */
  public static getOngoingQuestLog(): string {
    return this.onGoingQuest.getQuestLog();
  }

  /**
   * Picks up flower
   *
   * @param flower flower that has been picked up
   */
  public static pickUpflower(flower: Flower): void {
    if (this.canSpawnQuestItem(flower)) {
      this.flower = flower;
      console.log('flower picked');
    }
  }

  /**
   * Picks up fish
   *
   * @param fish picked up fish
   */
  public static pickUpFish(fish: Fish): void {
    this.fish = fish;
    console.log('fish picked up');
  }

  /**
   * Checks if world can spawn new qeust item
   *
   * @param questItem quest item about to be spawned
   * @returns true if can spawn new quest item otherwise false
   */
  public static canSpawnQuestItem(questItem: QuestItem): boolean {
    if (questItem instanceof Fish && this.fish === null && this.onGoingQuestIndex === 4) {
      return true;
    }
    if (questItem instanceof Flower && this.flower === null && this.onGoingQuestIndex === 1) {
      return true;
    }
    return false;
  }

  // dEBUG

  public static getIndex(): number {
    return this.onGoingQuestIndex;
  }
}
