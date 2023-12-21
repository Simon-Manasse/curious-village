export default class AnswerHandler {
  private static answers: object[] = [];
  private static questionNumber: number = 0;

  public static pushNewAnswer(answer: object): void {
    if (Object.values(answer).length !== 0) this.answers.push(answer);
  }

  public static getAddress(): string {
    for (let i = 0; i < this.answers.length; i++) {
      if (Object.values(this.answers[i])[0] === 1) return Object.values(this.answers[i])[1];
    }
    return 'undefined';
  }

  public static getName(): string {
    for (let i = 0; i < this.answers.length; i++) {
      if (Object.values(this.answers[i])[0] === 2) return Object.values(this.answers[i])[1];
    }
    return 'undefined';
  }

  public static getBirthday(): string {
    for (let i = 0; i < this.answers.length; i++) {
      if (Object.values(this.answers[i])[0] === 3) return Object.values(this.answers[i])[1];
    }
    return 'undefined';
  }

  public static getQuestionNumber(): number {
    return this.questionNumber;
  }

  public static increaseQuestionNumber(): void {
    this.questionNumber += 1;
  }
}
