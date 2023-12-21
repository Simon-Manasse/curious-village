import QuestManager from './QuestManager.js';
export default class QuestRestrictions extends QuestManager {
    static canSpawnFox() {
        if (this.onGoingQuestIndex > 2) {
            return true;
        }
        return false;
    }
    static canSpawnSquirel() {
        if (this.onGoingQuestIndex > 5) {
            return true;
        }
        return false;
    }
    static canSpawnWolf() {
        if (this.onGoingQuestIndex > 6) {
            return true;
        }
        return false;
    }
    static canSpawnHedgehog() {
        if (this.onGoingQuestIndex > 7) {
            return true;
        }
        return false;
    }
    static canSpawnRacoon() {
        if (this.onGoingQuestIndex > 8) {
            return true;
        }
        return false;
    }
    static canTalkToCapibara() {
        if (this.onGoingQuestIndex === 0) {
            return true;
        }
        if (this.onGoingQuestIndex === 2) {
            return true;
        }
        return false;
    }
    static canTalkToFox() {
        if (this.onGoingQuestIndex === 3) {
            return true;
        }
        if (this.onGoingQuestIndex === 5) {
            return true;
        }
        return false;
    }
    static canTalkToSquirel() {
        if (this.onGoingQuestIndex === 6) {
            return true;
        }
        return false;
    }
    static canTalkToWolf() {
        if (this.onGoingQuestIndex === 7) {
            return true;
        }
        return false;
    }
    static canTalkToHedgehog() {
        if (this.onGoingQuestIndex === 8) {
            return true;
        }
        if (this.onGoingQuestIndex === 10) {
            return true;
        }
        return false;
    }
    static canTalkToRacoon() {
        if (this.onGoingQuestIndex === 9) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=QuestRestrictions.js.map