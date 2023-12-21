export default class AnswerHandler {
    static answers = [];
    static questionNumber = 0;
    static pushNewAnswer(answer) {
        if (Object.values(answer).length !== 0)
            this.answers.push(answer);
    }
    static getAddress() {
        for (let i = 0; i < this.answers.length; i++) {
            if (Object.values(this.answers[i])[0] === 1)
                return Object.values(this.answers[i])[1];
        }
        return 'undefined';
    }
    static getName() {
        for (let i = 0; i < this.answers.length; i++) {
            if (Object.values(this.answers[i])[0] === 2)
                return Object.values(this.answers[i])[1];
        }
        return 'undefined';
    }
    static getBirthday() {
        for (let i = 0; i < this.answers.length; i++) {
            if (Object.values(this.answers[i])[0] === 3)
                return Object.values(this.answers[i])[1];
        }
        return 'undefined';
    }
    static getQuestionNumber() {
        return this.questionNumber;
    }
    static increaseQuestionNumber() {
        this.questionNumber += 1;
    }
}
//# sourceMappingURL=AnswerHandler.js.map