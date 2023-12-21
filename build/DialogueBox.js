import Interaction from './Interaction.js';
import Locale from './Locale.js';
import MainGame from './MainGame.js';
export default class DialogueBox extends Interaction {
    constructor(animal) {
        super('TalkToAnimal');
        this.image.src = `./Assets/DialogueQuest/Dialogue_${animal}.png`;
        this.divElement.appendChild(this.image);
        this.createParagraph();
    }
    createParagraph() {
        if (this.divElement.children.length <= 1) {
            const p = document.createElement('p');
            p.id = 'Paragraph';
            this.divElement.appendChild(p);
        }
    }
    changeTextOfDialogueBox(text) {
        const p = document.getElementById('Paragraph');
        if (Locale.getCurrentBrowserLocale() === 'nl')
            p.innerHTML = MainGame.translation.trans(text);
        else
            p.innerHTML = text;
    }
    addButtonF() {
        const img = document.createElement('img');
        img.src = './Assets/DialogueQuest/ButtonF.png';
        img.id = 'ButtonE';
        this.divElement.appendChild(img);
    }
    removeElement(id) {
        const elem = document.getElementById(id);
        return this.divElement.removeChild(elem);
    }
    changeToHidden() {
        this.divElement.style.visibility = 'hidden';
    }
    changeToVisible() {
        this.divElement.style.visibility = 'visible';
    }
}
//# sourceMappingURL=DialogueBox.js.map