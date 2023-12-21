import Interaction from './Interaction.js';
export default class YesButton extends Interaction {
    constructor() {
        super('YesOrNo');
        this.image.src = './Assets/DialogueQuest/YesButton.png';
        this.image.id = 'YesButton';
        this.divElement.appendChild(this.image);
    }
}
//# sourceMappingURL=YesButton.js.map