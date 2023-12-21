import Locale from "./Locale.js";

/* eslint-disable class-methods-use-this */
export default abstract class Interaction {
  protected image: HTMLImageElement;

  protected divElement: HTMLDivElement;

  public constructor(id: string) {
    this.divElement = document.getElementById(id) as HTMLDivElement;
    this.image = document.createElement('img');
  }

  /**
   * button events
   */
  public buttonEvent(): void {
  }

  /**
   * deletes the button
   */
  public deleteButtons(): void {
    while (this.divElement.firstChild) {
      this.divElement.removeChild(this.divElement.firstChild);
    }
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }
}
