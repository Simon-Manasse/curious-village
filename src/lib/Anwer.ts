import Interaction from './Interaction.js';

export default class Answer extends Interaction {
  private okButton: HTMLImageElement;

  public constructor() {
    super('Answer');
    this.addAnswerBubble();
    this.createInput();
    this.addButton();
  }

  /**
   * adds answer bubble
   */
  public addAnswerBubble(): void {
    this.image.src = './Assets/DialogueQuest/AnswerPopUp.png';
    this.divElement.appendChild(this.image);
  }

  /**
   * adds button
   */
  public addButton(): void {
    this.okButton = document.createElement('img');
    this.okButton.src = './Assets/DialogueQuest/OkButton.png';
    this.okButton.id = 'OkButtonAnswer';
    this.divElement.appendChild(this.okButton);
  }

  /**
   * creates input area
   */
  public createInput(): void {
    const input = document.createElement('textarea');
    input.id = 'InputText';
    this.divElement.appendChild(input);
  }

  /**
   * gwts the text from written input
   *
   * @returns input value
   */
  // eslint-disable-next-line class-methods-use-this
  public getTextFromAnwser(): string {
    const input = document.getElementById('InputText') as HTMLTextAreaElement;
    return input.value;
  }
}
