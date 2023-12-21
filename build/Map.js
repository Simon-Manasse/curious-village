import CanvasUtil from './CanvasUtil.js';
import QuestManager from './Quests/QuestManager.js';
var QuestLocations;
(function (QuestLocations) {
    QuestLocations[QuestLocations["forestX"] = 790] = "forestX";
    QuestLocations[QuestLocations["forestY"] = 500] = "forestY";
    QuestLocations[QuestLocations["villageX"] = 800] = "villageX";
    QuestLocations[QuestLocations["villageY"] = 400] = "villageY";
    QuestLocations[QuestLocations["lakeX"] = 1230] = "lakeX";
    QuestLocations[QuestLocations["lakeY"] = 400] = "lakeY";
    QuestLocations[QuestLocations["swampX"] = 330] = "swampX";
    QuestLocations[QuestLocations["swampY"] = 370] = "swampY";
    QuestLocations[QuestLocations["mountainX"] = 830] = "mountainX";
    QuestLocations[QuestLocations["mountainY"] = 200] = "mountainY";
    QuestLocations[QuestLocations["restaurantX"] = 1090] = "restaurantX";
    QuestLocations[QuestLocations["restaurantY"] = 300] = "restaurantY";
})(QuestLocations || (QuestLocations = {}));
export default class Map {
    pressedM = 0;
    mapImage;
    questPointer;
    locationImage;
    playerX;
    playerY;
    questX;
    questY;
    constructor() {
        this.pressedM = 0;
        this.mapImage = CanvasUtil.loadNewImage('./Assets/DialogueQuest/Map.png');
        this.locationImage = CanvasUtil.loadNewImage('./Assets/DialogueQuest/map_pointer.png');
        this.questPointer = CanvasUtil.loadNewImage('./Assets/DialogueQuest/quest_pointer.png');
    }
    openTheMap() {
        if (this.pressedM % 2 !== 0) {
            return true;
        }
        return false;
    }
    addOneToMPressed() {
        this.pressedM += 1;
    }
    showMap(canvas, location) {
        if (this.openTheMap() === true) {
            this.setPlayerMapPointer(location);
            this.setQuestPointer();
            CanvasUtil.drawImage(canvas, this.mapImage, 0, 0);
            CanvasUtil.drawImage(canvas, this.locationImage, this.playerX, this.playerY);
            CanvasUtil.drawImage(canvas, this.questPointer, this.questX, this.questY);
        }
    }
    setPlayerMapPointer(location) {
        switch (location) {
            case 0: {
                this.playerX = 800;
                this.playerY = 400;
                break;
            }
            case 1: {
                this.playerX = 780;
                this.playerY = 530;
                break;
            }
            case 2: {
                this.playerX = 1200;
                this.playerY = 400;
                break;
            }
            case 3: {
                this.playerX = 350;
                this.playerY = 370;
                break;
            }
            case 4: {
                this.playerX = 800;
                this.playerY = 200;
                break;
            }
            default: {
                break;
            }
        }
    }
    setQuestPointer() {
        switch (QuestManager.getIndex()) {
            case 0: {
                this.questX = QuestLocations.villageX;
                this.questY = QuestLocations.villageY;
                break;
            }
            case 1: {
                this.questX = QuestLocations.forestX;
                this.questY = QuestLocations.forestY;
                break;
            }
            case 2: {
                this.questX = QuestLocations.villageX;
                this.questY = QuestLocations.villageY;
                break;
            }
            case 3: {
                this.questX = QuestLocations.forestX;
                this.questY = QuestLocations.forestY;
                break;
            }
            case 4: {
                this.questX = QuestLocations.lakeX;
                this.questY = QuestLocations.lakeY;
                break;
            }
            case 5: {
                this.questX = QuestLocations.forestX;
                this.questY = QuestLocations.forestY;
                break;
            }
            case 6: {
                this.questX = QuestLocations.swampX;
                this.questY = QuestLocations.swampY;
                break;
            }
            case 7: {
                this.questX = QuestLocations.mountainX;
                this.questY = QuestLocations.mountainY;
                break;
            }
            case 8: {
                this.questX = QuestLocations.lakeX;
                this.questY = QuestLocations.lakeY;
                break;
            }
            case 9: {
                this.questX = QuestLocations.restaurantX;
                this.questY = QuestLocations.restaurantY;
                break;
            }
            case 10: {
                this.questX = QuestLocations.lakeX;
                this.questY = QuestLocations.lakeY;
                break;
            }
            case 11: {
                this.questX = QuestLocations.villageX;
                this.questY = QuestLocations.villageY;
                break;
            }
            default: {
                break;
            }
        }
    }
}
//# sourceMappingURL=Map.js.map