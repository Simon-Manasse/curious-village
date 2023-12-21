import QuestManager from './QuestManager.js';

export default class QuestRestrictions extends QuestManager {
  /**
   * Determines wether the game can spawn the fox
   *
   * @returns true if can otherwise false
   */
  public static canSpawnFox(): boolean {
    if (this.onGoingQuestIndex > 2) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the game can spawn the squirel
   *
   * @returns true if can otherwise false
   */
  public static canSpawnSquirel(): boolean {
    if (this.onGoingQuestIndex > 5) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the game can spawn the worlf
   *
   * @returns true if can otherwise false
   */
  public static canSpawnWolf(): boolean {
    if (this.onGoingQuestIndex > 6) {
      return true;
    }
    return false;
  }

  /**
   * Determines if hedgehoge can be spawned
   *
   * @returns true if can otherwise false
   */
  public static canSpawnHedgehog(): boolean {
    if (this.onGoingQuestIndex > 7) {
      return true;
    }
    return false;
  }

  /**
   * Determines if racoon can be spawned
   *
   * @returns true if can otherwise false
   */
  public static canSpawnRacoon(): boolean {
    if (this.onGoingQuestIndex > 8) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the capibara
   *
   * @returns true if can otherwise false
   */
  public static canTalkToCapibara() {
    if (this.onGoingQuestIndex === 0) {
      return true;
    }
    if (this.onGoingQuestIndex === 2) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the fox
   *
   * @returns true if can otherwise false
   */
  public static canTalkToFox() {
    if (this.onGoingQuestIndex === 3) {
      return true;
    }
    if (this.onGoingQuestIndex === 5) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the squirel
   *
   * @returns true if can otherwise false
   */
  public static canTalkToSquirel() {
    if (this.onGoingQuestIndex === 6) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the wolf
   *
   * @returns true if can otherwise false
   */
  public static canTalkToWolf() {
    if (this.onGoingQuestIndex === 7) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the hedgehog
   *
   * @returns true if can otherwise false
   */
  public static canTalkToHedgehog() {
    if (this.onGoingQuestIndex === 8) {
      return true;
    }
    if (this.onGoingQuestIndex === 10) {
      return true;
    }
    return false;
  }

  /**
   * Determines wether the player can talk to the racoon
   *
   * @returns true if can otherwise false
   */
  public static canTalkToRacoon() {
    if (this.onGoingQuestIndex === 9) {
      return true;
    }
    return false;
  }
}
