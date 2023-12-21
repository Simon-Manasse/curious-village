import Interaction from "../Interaction.js";
import Locale from "../Locale.js";
import MainGame from "../MainGame.js";
export default class YesOrNoPopUp extends Interaction {
    constructor() {
        super('YesOrNo');
        this.image.src = './Assets/DialogueQuest/YesNoPopUp.png';
        this.divElement.appendChild(this.image);
        this.addQuestion();
    }
    addQuestion() {
        const p = document.createElement('p');
        if (Locale.getCurrentBrowserLocale() === 'nl') {
            p.innerHTML = MainGame.translation.trans('Do you want to answer?');
            p.style.left = '650px';
        }
        else
            p.innerHTML = 'Do you want to answer?';
        this.divElement.appendChild(p);
    }
}
//# sourceMappingURL=YesOrNoPopUp.js.map