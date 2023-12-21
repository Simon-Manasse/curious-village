import Interaction from './Interaction.js';

export default class BoyCharacterButton extends Interaction {
  public constructor() {
    super('BoyButton');
    this.image.src = './Assets/DialogueQuest/ginger.png';
    this.image.addEventListener('click', this.buttonEvent);
    this.divElement.appendChild(this.image);
  }

  /**
   * creates button even
   */
  // eslint-disable-next-line class-methods-use-this
  public override buttonEvent(): void {
  }
}
