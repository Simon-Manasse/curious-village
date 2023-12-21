import Locale from '../Locale.js';
export default class Quest {
    onGoing;
    current;
    questId;
    questLog;
    requiariement = null;
    translation = new Locale('nl');
    getonGoing() {
        return this.onGoing;
    }
    setonGoing(onGoing) {
        this.onGoing = onGoing;
    }
    getQuestLog() {
        if (Locale.getCurrentBrowserLocale() === 'nl')
            return this.translation.trans(this.questLog);
        return this.questLog;
    }
}
//# sourceMappingURL=Quest.js.map