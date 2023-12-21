import BadEnding from '../BadEnding.js';
import GoodEnding from '../GoodEnding.js';
import BringFlowerBackToCapybara from './BringFlowersBackToCapybara.js';
import BringFishBack from './BringsFishBack.js';
import BringWaterToHedgehog from './BringWaterToHedgehog.js';
import Fish from './Fish.js';
import Flower from './Flower.js';
import FlowerQuest from './FlowerQuest.js';
import GoFishingInLake from './GoFishingInLake.js';
import GoHome from './GoHome.js';
import TalkToSquirel from './GoTalkToSquirel.js';
import GoToMountains from './GoToTheMountains.js';
import SeeHedgehog from './SeeHedgehog.js';
import TalkToCapybara from './TalkToCapybara.js';
import TalkToTheFox from './TalkToTheFox.js';
import TalkToTheRacoon from './TalkToTheRacoon.js';
export default class QuestManager {
    static quests = [
        new TalkToCapybara(),
        new FlowerQuest(),
        new BringFlowerBackToCapybara(),
        new TalkToTheFox(),
        new GoFishingInLake(),
        new BringFishBack(),
        new TalkToSquirel(),
        new GoToMountains(),
        new SeeHedgehog(),
        new TalkToTheRacoon(),
        new BringWaterToHedgehog(),
        new GoHome(),
    ];
    static flower = null;
    static endingScene;
    static canGameFinish = false;
    static fish = null;
    static badChoices = 0;
    static onGoingQuestIndex = 0;
    static onGoingQuest = this.quests[this.onGoingQuestIndex];
    static onGoingQuestQuestLog = this.onGoingQuest.getQuestLog();
    static startNewQuest() {
        if (this.onGoingQuestIndex === 1) {
            if (this.flower !== null) {
                this.onGoingQuestIndex += 1;
                this.onGoingQuest = this.quests[this.onGoingQuestIndex];
            }
            else {
                console.error('Unable to start next qeust get the flower first');
            }
        }
        else if (this.onGoingQuestIndex === 4) {
            if (this.fish !== null) {
                this.onGoingQuestIndex += 1;
                this.onGoingQuest = this.quests[this.onGoingQuestIndex];
            }
            else
                console.error('Unable to start next qeust get the fish first');
        }
        else {
            this.onGoingQuestIndex += 1;
            this.onGoingQuest = this.quests[this.onGoingQuestIndex];
        }
        this.canGameFinish = false;
    }
    static endGame() {
        this.canGameFinish = true;
    }
    static addBadChoice() {
        this.badChoices += 1;
    }
    static checkIfShouldEnd(maxX, maxY, scene = '') {
        if (this.canGameFinish) {
            console.log('game finished');
            console.log(this.badChoices);
            if (this.badChoices > 0) {
                return new BadEnding(maxX, maxY);
            }
            if (this.badChoices === 0 && scene === 'house') {
                return new GoodEnding(maxX, maxY);
            }
        }
        return null;
    }
    static startQuestWithIndex(qeustIndex) {
        this.onGoingQuestIndex = qeustIndex;
        this.onGoingQuest = this.quests[this.onGoingQuestIndex];
    }
    static getOngoingQuestLog() {
        return this.onGoingQuest.getQuestLog();
    }
    static pickUpflower(flower) {
        if (this.canSpawnQuestItem(flower)) {
            this.flower = flower;
            console.log('flower picked');
        }
    }
    static pickUpFish(fish) {
        this.fish = fish;
        console.log('fish picked up');
    }
    static canSpawnQuestItem(questItem) {
        if (questItem instanceof Fish && this.fish === null && this.onGoingQuestIndex === 4) {
            return true;
        }
        if (questItem instanceof Flower && this.flower === null && this.onGoingQuestIndex === 1) {
            return true;
        }
        return false;
    }
    static getIndex() {
        return this.onGoingQuestIndex;
    }
}
//# sourceMappingURL=QuestManager.js.map