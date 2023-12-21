import Interaction from './Interaction.js';
export default class StartButton extends Interaction {
    constructor() {
        super('StartButton');
        this.image.src = './Assets/DialogueQuest/StartButton.png';
        this.divElement.appendChild(this.image);
    }
}
//# sourceMappingURL=StartButton.js.map