/* eslint-disable class-methods-use-this */
import Interaction from './Interaction.js';
import Locale from './Locale.js';
import MainGame from './MainGame.js';

export default class DialogueBox extends Interaction {
  public constructor(animal: string) {
    super('TalkToAnimal');
    this.image.src = `./Assets/DialogueQuest/Dialogue_${animal}.png`;
    this.divElement.appendChild(this.image);
    this.createParagraph();
  }

  /**
   * creates paragraph
   */
  public createParagraph(): void {
    if (this.divElement.children.length <= 1) {
      const p = document.createElement('p');
      p.id = 'Paragraph';
      this.divElement.appendChild(p);
    }
  }

  /**
   * changes text of a dialogue box
   *
   * @param text text
   */
  public changeTextOfDialogueBox(text: string) {
    const p = document.getElementById('Paragraph');
    if (Locale.getCurrentBrowserLocale() === 'nl') p.innerHTML = MainGame.translation.trans(text);
    else p.innerHTML = text;
  }

  /**
   * Adds button
   */
  public addButtonF(): void {
    const img = document.createElement('img');
    img.src = './Assets/DialogueQuest/ButtonF.png';
    img.id = 'ButtonE';
    this.divElement.appendChild(img);
  }

  /**
   * removes element from html
   *
   * @param id id of element
   * @returns div element
   */
  public removeElement(id: string): HTMLElement {
    const elem = document.getElementById(id);
    return this.divElement.removeChild(elem);
  }

  /**
   * changes the div element to hidden
   */
  public changeToHidden() {
    this.divElement.style.visibility = 'hidden';
  }

  /**
   * changes the div element to visible
   */
  public changeToVisible() {
    this.divElement.style.visibility = 'visible';
  }
}
