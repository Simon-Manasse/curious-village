import Interaction from './Interaction.js';

export default class NoButton extends Interaction {
  public constructor() {
    super('YesOrNo');
    this.image.src = './Assets/DialogueQuest/NoButton.png';
    this.image.id = 'NoButton';
    this.divElement.appendChild(this.image);
  }
}
