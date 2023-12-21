import Interaction from './Interaction.js';
export default class NoButton extends Interaction {
    constructor() {
        super('YesOrNo');
        this.image.src = './Assets/DialogueQuest/NoButton.png';
        this.image.id = 'NoButton';
        this.divElement.appendChild(this.image);
    }
}
//# sourceMappingURL=NoButton.js.map