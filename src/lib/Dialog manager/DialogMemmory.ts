import Animals from '../Animals';
import Capybara from '../Capybara.js';
import Fox from '../Fox.js';
import Hedgehog from '../Hedgehog.js';
import Raccoon from '../Raccoon.js';
import Squirrel from '../Squirrel.js';
import Wolf from '../Wolf.js';

export default class DialogMemmory {
  private static cabibaraLastLine: number = 0;

  private static hedgehogeLastLine: number = 0;

  private static squirellLastLine: number = 0;

  private static wolfLastLine: number = 0;

  private static racoonLastLine: number = 0;

  private static foxLastLine: number = 0;

  /**
   * Sotres the last line of dialog in animal
   *
   * @param lastLine last line that has been told
   * @param animal animal which last line want to be stored
   */
  public static storeTheLastLine(animal: Animals, lastLine: number): void {
    if (animal instanceof Capybara) {
      this.cabibaraLastLine = lastLine;
    } else if (animal instanceof Fox) {
      this.foxLastLine = lastLine;
    } else if (animal instanceof Squirrel) {
      this.squirellLastLine = lastLine;
    } else if (animal instanceof Hedgehog) {
      this.hedgehogeLastLine = lastLine;
    } else if (animal instanceof Wolf) {
      this.wolfLastLine = lastLine;
    } else if (animal instanceof Raccoon) {
      this.racoonLastLine = lastLine;
    }
  }

  public static getLastLine(animal: Animals): number {
    if (animal instanceof Capybara) {
      return this.cabibaraLastLine;
    } if (animal instanceof Fox) {
      return this.foxLastLine;
    } if (animal instanceof Squirrel) {
      return this.squirellLastLine;
    } if (animal instanceof Hedgehog) {
      return this.hedgehogeLastLine;
    } if (animal instanceof Wolf) {
      return this.wolfLastLine;
    } if (animal instanceof Raccoon) {
      return this.racoonLastLine;
    }
    return null;
  }
}
