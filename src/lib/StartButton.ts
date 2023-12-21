import Interaction from './Interaction.js';

export default class StartButton extends Interaction {
  public constructor() {
    super('StartButton');
    this.image.src = './Assets/DialogueQuest/StartButton.png';
    this.divElement.appendChild(this.image);
  }
}
