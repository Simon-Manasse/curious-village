import Interaction from './Interaction.js';

export default class ElfCharacterButton extends Interaction {
  public constructor() {
    super('ElfButton');
    this.image.src = './Assets/DialogueQuest/blue.png';
    this.image.addEventListener('click', this.buttonEvent);
    this.divElement.appendChild(this.image);
  }

  /**
   * player button event
   */
  // eslint-disable-next-line class-methods-use-this
  public override buttonEvent(): void {
  }
}
