import Interaction from './Interaction.js';
import Locale from './Locale.js';
import MainGame from './MainGame.js';

export default class Choice extends Interaction {
  public constructor(text1: string, text2: string) {
    super('Choice');
    this.addNewChoice('Choice1');
    this.placeText('p1', text1);
    this.placeText('p2', text2);
  }

  /**
   * add new choice
   *
   * @param id id of choice
   */
  private addNewChoice(id: string): void {
    const img = document.createElement('img');
    img.src = './Assets/DialogueQuest/Choice.png';
    img.id = id;
    this.divElement.appendChild(img);
  }

  /**
   * places text onto the document
   *
   * @param id id of text
   * @param text text
   */
  private placeText(id: string, text: string): void {
    const p = document.createElement('p');
    if (Locale.getCurrentBrowserLocale() === 'nl') {
      p.innerHTML = MainGame.translation.trans(text);
      if (text === 'Why were you<br>kicked out?' || text === 'I am here for<br>some water') p.style.left = '935px';
      else if (text === 'For how long do you<br>live here?') p.style.left = '405px';
    } else {
      p.innerHTML = text;
      if (text === 'I am here for<br>some water') p.style.left = '945px';
      else if (text === 'For how long do you<br>live here?') p.style.left = '360px';
    }
    if (text === 'Warm') p.style.left = '470px';
    else if (text === 'Cold') p.style.left = '1010px';
    p.id = id;
    this.divElement.appendChild(p);
  }
}
