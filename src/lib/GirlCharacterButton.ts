import Interaction from './Interaction.js';

export default class GirlCharacterButton extends Interaction {
  public constructor() {
    super('GirlButton');
    this.image.src = './Assets/DialogueQuest/purple.png';
    this.image.addEventListener('click', this.buttonEvent);
    this.divElement.appendChild(this.image);
  }

  /**
   * button event
   */
  // eslint-disable-next-line class-methods-use-this
  public override buttonEvent(): void {
  }
}
