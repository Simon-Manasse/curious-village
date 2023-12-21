import Interaction from './Interaction.js';
export default class Answer extends Interaction {
    okButton;
    constructor() {
        super('Answer');
        this.addAnswerBubble();
        this.createInput();
        this.addButton();
    }
    addAnswerBubble() {
        this.image.src = './Assets/DialogueQuest/AnswerPopUp.png';
        this.divElement.appendChild(this.image);
    }
    addButton() {
        this.okButton = document.createElement('img');
        this.okButton.src = './Assets/DialogueQuest/OkButton.png';
        this.okButton.id = 'OkButtonAnswer';
        this.divElement.appendChild(this.okButton);
    }
    createInput() {
        const input = document.createElement('textarea');
        input.id = 'InputText';
        this.divElement.appendChild(input);
    }
    getTextFromAnwser() {
        const input = document.getElementById('InputText');
        return input.value;
    }
}
//# sourceMappingURL=Anwer.js.map