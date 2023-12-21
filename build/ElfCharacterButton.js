import Interaction from './Interaction.js';
export default class ElfCharacterButton extends Interaction {
    constructor() {
        super('ElfButton');
        this.image.src = './Assets/DialogueQuest/blue.png';
        this.image.addEventListener('click', this.buttonEvent);
        this.divElement.appendChild(this.image);
    }
    buttonEvent() {
    }
}
//# sourceMappingURL=ElfCharacterButton.js.map