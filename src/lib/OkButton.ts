import Interaction from './Interaction.js';

export default class OkButton extends Interaction {
  public constructor() {
    super('OkButton');
    this.image.src = './Assets/DialogueQuest/OkButton.png';
    this.divElement.appendChild(this.image);
  }
}
