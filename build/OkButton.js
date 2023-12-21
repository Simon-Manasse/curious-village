import Interaction from './Interaction.js';
export default class OkButton extends Interaction {
    constructor() {
        super('OkButton');
        this.image.src = './Assets/DialogueQuest/OkButton.png';
        this.divElement.appendChild(this.image);
    }
}
//# sourceMappingURL=OkButton.js.map