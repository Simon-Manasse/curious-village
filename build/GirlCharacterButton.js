import Interaction from './Interaction.js';
export default class GirlCharacterButton extends Interaction {
    constructor() {
        super('GirlButton');
        this.image.src = './Assets/DialogueQuest/purple.png';
        this.image.addEventListener('click', this.buttonEvent);
        this.divElement.appendChild(this.image);
    }
    buttonEvent() {
    }
}
//# sourceMappingURL=GirlCharacterButton.js.map