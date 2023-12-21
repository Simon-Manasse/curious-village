import CanvasUtil from './CanvasUtil.js';
import QuestManager from './Quests/QuestManager.js';

enum QuestLocations {
  forestX = 790,
  forestY = 500,
  villageX = 800,
  villageY = 400,
  lakeX = 1230,
  lakeY = 400,
  swampX = 330,
  swampY = 370,
  mountainX = 830,
  mountainY = 200,
  restaurantX = 1090,
  restaurantY = 300,
}

export default class Map {
  private pressedM: number = 0;

  private mapImage: HTMLImageElement;

  private questPointer: HTMLImageElement;

  private locationImage: HTMLImageElement;

  private playerX: number;

  private playerY: number;

  private questX: number;

  private questY: number;

  public constructor() {
    this.pressedM = 0;
    this.mapImage = CanvasUtil.loadNewImage('./Assets/DialogueQuest/Map.png');
    this.locationImage = CanvasUtil.loadNewImage('./Assets/DialogueQuest/map_pointer.png');
    this.questPointer = CanvasUtil.loadNewImage('./Assets/DialogueQuest/quest_pointer.png');
  }

  /**
   * returns true if the map should open
   *
   * @returns true or false
   */
  private openTheMap(): boolean {
    if (this.pressedM % 2 !== 0) {
      return true;
    }
    return false;
  }

  /**
   * after player press [M] +1 will be added
   */
  public addOneToMPressed(): void {
    this.pressedM += 1;
  }

  /**
   * canvas util will show or hide the map
   *
   * @param canvas html canvas element
   * @param location location on the game world
   * 0 - village, 1 - forest, 2 - lake, 3 - swamp, 4 - mountains
   */
  public showMap(canvas: HTMLCanvasElement, location: number): void {
    if (this.openTheMap() === true) {
      this.setPlayerMapPointer(location);
      this.setQuestPointer();
      CanvasUtil.drawImage(canvas, this.mapImage, 0, 0);
      CanvasUtil.drawImage(canvas, this.locationImage, this.playerX, this.playerY);
      CanvasUtil.drawImage(canvas, this.questPointer, this.questX, this.questY);
    }
  }

  /**
   * Sets player location on the map
   *
   * @param location location of the player
   */
  private setPlayerMapPointer(location: number) {
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

  /**
   * Sets the quest location on the map
   */
  private setQuestPointer(): void {
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
