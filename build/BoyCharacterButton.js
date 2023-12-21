import Interaction from './Interaction.js';
export default class BoyCharacterButton extends Interaction {
    constructor() {
        super('BoyButton');
        this.image.src = './Assets/DialogueQuest/ginger.png';
        this.image.addEventListener('click', this.buttonEvent);
        this.divElement.appendChild(this.image);
    }
    buttonEvent() {
    }
}
//# sourceMappingURL=BoyCharacterButton.js.map