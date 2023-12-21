import Animals from './Animals.js';
import CanvasUtil from './CanvasUtil.js';
import DialogueBox from './DialogueBox.js';
import KeyListener from './KeyListener.js';
import NoButton from './NoButton.js';
import Player from './Player.js';
import Scene from './Scene.js';
import WorldItem from './WorldItem.js';
import YesButton from './YesButton.js';
import Map from './Map.js';
import Answer from './Anwer.js';
import Choice from './Choice.js';
import Quest from './Quests/Quest.js';
import Flower from './Quests/Flower.js';
import FlowerQuest from './Quests/FlowerQuest.js';
import MainGame from './MainGame.js';
import QuestManager from './Quests/QuestManager.js';
import Fish from './Quests/Fish.js';
import Restaurant from './Restaurant.js';
import Dialogs from './Dialog manager/Dialogs.js';
import YesOrNoPopUp from './Dialog manager/YesOrNoPopUp.js';
import GameMusic from './GameMusic.js';
import Locale from './Locale.js';
import DialogMemmory from './Dialog manager/DialogMemmory.js';
import AnswerHandler from './AnswerHandler.js';
import Squirrel from './Squirrel.js';
import Decision from './Decision.js';

export default abstract class GameplayScene extends Scene {
  protected worldItems: WorldItem[] = [];

  protected itemsBehindPlayer: WorldItem[] = [];

  protected player: Player;

  protected animal: Animals;

  protected playerX: number;

  protected playerY: number;

  protected yesButton: YesButton;

  protected noButton: NoButton;

  protected canInteract: boolean;

  protected canPickUpFlower: boolean;

  protected canPickUpFish: boolean;

  protected dialogueBox: DialogueBox;

  protected animalName: string;

  protected map: Map;

  protected buttonE: HTMLImageElement;

  protected buttonSpace: HTMLImageElement;

  protected inConversation: boolean;

  protected flower: Flower;

  protected fish: Fish;

  protected canProceed: boolean;

  protected currentText: number;

  public canMove: boolean;

  private yesOrNo: YesOrNoPopUp;

  // Dubug

  protected animalTextDebug: string[] = [];

  protected debugAnswer: Answer;

  protected questionAsked: boolean;

  protected answer: string;

  protected choice: Choice;

  protected inOtherAction: boolean;

  protected audio: HTMLAudioElement;

  public constructor(maxX: number, maxY: number, playerX: number, playerY: number) {
    super(maxX, maxY);
    this.map = new Map();
    this.inConversation = false;
    this.canProceed = false;
    this.canInteract = false;
    this.canMove = true;
    this.questionAsked = false;
    this.currentText = 0;
    this.inOtherAction = false;
    this.player = new Player(playerX, playerY, Scene.characterNumber);
    this.buttonE = CanvasUtil.loadNewImage('./Assets/DialogueQuest/ButtonE.png');
    this.buttonSpace = CanvasUtil.loadNewImage('./Assets/DialogueQuest/SpaceButton.png');
  }

  /**
   * Process key input
   *
   * @param keyListener the keyboard in use
   */
  public processInput(keyListener: KeyListener): void {
    if (this.canInteract) {
      this.startConversation(keyListener);
      this.proceedConversation(keyListener);
    }
    if (this.canMove) {
      this.playerMovement(keyListener);
      if (keyListener.keyPressed(KeyListener.KEY_M)) this.map.addOneToMPressed();
    }
  }

  /**
   * handles the player movement
   *
   * @param keyListener keylistener
   */
  public playerMovement(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_W)) this.player.move(0);
    else if (keyListener.isKeyDown(KeyListener.KEY_D)) this.player.move(1);
    else if (keyListener.isKeyDown(KeyListener.KEY_S)) this.player.move(2);
    else if (keyListener.isKeyDown(KeyListener.KEY_A)) this.player.move(3);
    if (!keyListener.isKeyDown(KeyListener.KEY_W)
      && !keyListener.isKeyDown(KeyListener.KEY_A)
      && !keyListener.isKeyDown(KeyListener.KEY_S)
      && !keyListener.isKeyDown(KeyListener.KEY_D)) {
      this.player.nullTheDirection();
    }
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      if (this.canPickUpFlower && !this.canPickUpFish) {
        QuestManager.pickUpflower(this.flower);
        this.canPickUpFlower = false;
      }
      if (this.canPickUpFish && !this.canPickUpFlower) {
        QuestManager.pickUpFish(this.fish);
        this.canPickUpFish = false;
      }
    }
    if (keyListener.isKeyDown(KeyListener.KEY_SHIFT_LEFT)) {
      this.player.setSpeed(6);
    } else {
      this.player.setSpeed(4);
    }

    if (keyListener.keyPressed(KeyListener.KEY_L)) GameMusic.setMusicSource('');
  }

  /**
   * start conversation with animal
   *
   * @param keyListener keylistener
   */
  public startConversation(keyListener: KeyListener): void {
    if ((!keyListener.keyPressed(KeyListener.KEY_E)
      || !this.player.isCloseToAnimal(this.animal)
      || this.inConversation)
    ) {
      if (!this.canInteract && this.dialogueBox !== undefined) {
        this.deletePopUp();
      }
      return;
    }
    this.currentText = DialogMemmory.getLastLine(this.animal);
    this.inConversation = true;
    this.showPopUp(this.animalName);
    if (this.animalTextDebug[this.currentText] !== undefined) {
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText]));
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText]);
    } else {
      // eslint-disable-next-line max-len, no-lonely-if
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.animalTextDebug.length - 1]));
      // eslint-disable-next-line max-len
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.animalTextDebug.length - 1]);
    }
    this.startButtonTimer();
    this.currentText += 1;
    this.canMove = false;
  }

  /**
   * if f is pressed can proceed the convestation
   *
   * @param keyListener keylistener
   */
  public proceedConversation(keyListener: KeyListener): void {
    if (this.inConversation
      && keyListener.keyPressed(KeyListener.KEY_F)
      && this.canProceed
      && !this.inOtherAction) {
      this.canProceed = false;
      this.dialogueBox.removeElement('ButtonE');
      this.startButtonTimer();
      this.checkIfConversationHasEnded();
    }
  }

  /**
   * checks if conversation has ended
   */
  public checkIfConversationHasEnded(): void {
    if (this.animalTextDebug[this.currentText] !== undefined) {
      this.checkIfShouldAskForAnswer();
      this.checkIfShouldAskForChoice();
      this.checkIfShouldAskForYesOrNo();
      this.checkIfQuestShouldStart();
      this.checkForDecision();
    } else {
      this.canMove = true;
      this.deletePopUp();
    }
    this.currentText += 1;
  }

  public checkIfQuestShouldStart(): void {
    if (this.animalTextDebug[this.currentText] === 'QUESTSTART') {
      QuestManager.startNewQuest();
      DialogMemmory.storeTheLastLine(this.animal, this.currentText + 1);
      console.log(DialogMemmory.getLastLine(this.animal));
      this.canInteract = false;
      this.canMove = true;
      this.deletePopUp();
    }
  }

  /**
   * checks if program should ask player for a choice
   */
  public checkIfShouldAskForChoice(): void {
    if (this.animalTextDebug[this.currentText] === 'CHOICE') {
      const previousText = this.animalTextDebug[this.currentText - 1];
      this.dialogueBox.changeTextOfDialogueBox(previousText);
      const choice1 = this.animalTextDebug[this.currentText + 1];
      const choice2 = this.animalTextDebug[this.currentText + 2];
      this.choice = new Choice(choice1, choice2);
      this.choiceButtonEvent();
      this.currentText += 2;
      this.inOtherAction = true;
    }
  }

  public checkForDecision(): void {
    if (this.animalTextDebug[this.currentText] === 'CHECKCHOICE') {
      if (Decision.getDecision()) {
        this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText + 2]);
        this.currentText += 2;
      } else {
        this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText + 1]);
        this.currentText += 2;
      }
    }
  }

  /**
   * choice button event
   */
  public choiceButtonEvent(): void {
    const button = document.getElementById('Choice1');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const event = () => {
      this.choice.deleteButtons();
      this.choice = undefined;
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText]));
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText]);
      this.inOtherAction = false;
      this.currentText += 1;
    };
    p1.addEventListener('click', event);
    p2.addEventListener('click', event);
    button.addEventListener('click', event);
  }

  /**
   * checks if should ask YES or NO question
   */
  public checkIfShouldAskForYesOrNo(): void {
    if (this.animalTextDebug[this.currentText] === 'YESorNO') {
      AnswerHandler.increaseQuestionNumber();
      this.yesOrNo = new YesOrNoPopUp();
      this.yesButton = new YesButton();
      this.noButton = new NoButton();
      this.canProceed = false;
      this.yesButtonEvent();
      this.noButtonEvent();
      this.dialogueBox.changeToHidden();
      this.inOtherAction = true;
    }
  }

  /**
   * no button event
   */
  public noButtonEvent(): void {
    const button = document.getElementById('NoButton');
    button.addEventListener('click', () => {
      this.dialogueBox.changeToVisible();
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText + 2]));
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText + 2]);
      this.yesOrNo.deleteButtons();
      this.yesOrNo = undefined;
      this.canProceed = true;
      this.currentText += 3;
      this.inOtherAction = false;
    });
  }

  /**
   * yes button event
   */
  public yesButtonEvent(): void {
    const button = document.getElementById('YesButton');
    button.addEventListener('click', () => {
      this.dialogueBox.changeToVisible();
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText]));
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText]);
      this.yesOrNo.deleteButtons();
      QuestManager.addBadChoice();
      this.yesOrNo = undefined;
      this.canProceed = true;
      this.currentText += 1;
      this.inOtherAction = false;
      Decision.setDecision(true);
    });
  }

  /**
   * checks if should ask for a answer from player
   */
  public checkIfShouldAskForAnswer(): void {
    if (this.animalTextDebug[this.currentText] === 'ANSWER') {
      console.log('it runs');
      this.debugAnswer = new Answer();
      this.okButtonEvent();
      this.inOtherAction = true;
    } else if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText]));
    else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText]);
  }

  /**
   * ok button event
   */
  public okButtonEvent(): void {
    const button = document.getElementById('OkButtonAnswer');
    button.addEventListener('click', () => {
      const answer = this.debugAnswer.getTextFromAnwser();
      let newAnswer = {};
      if (!(this.animal instanceof Squirrel)) {
        newAnswer = {
          key: AnswerHandler.getQuestionNumber(),
          value: answer,
        };
      }
      if (Locale.getCurrentBrowserLocale() === 'nl') this.dialogueBox.changeTextOfDialogueBox(MainGame.translation.trans(this.animalTextDebug[this.currentText]));
      else this.dialogueBox.changeTextOfDialogueBox(this.animalTextDebug[this.currentText]);
      AnswerHandler.pushNewAnswer(newAnswer);
      this.debugAnswer.deleteButtons();
      this.debugAnswer = undefined;
      this.inOtherAction = false;
      this.currentText += 1;
    });
  }

  /**
   * start button timer
   */
  public startButtonTimer(): void {
    setTimeout(() => {
      this.dialogueBox.addButtonF();
      this.canProceed = true;
    }, 500);
  }

  /**
   * Setting the players positions for transitioning
   */
  protected setPositionsOfPlayer(): void {
    this.playerX = this.player.getPosX();
    this.playerY = this.player.getPosY();
  }

  /**
   * Show the popup
   *
   * @param animal what animal is player interacting with
   */
  public showPopUp(animal: string): void {
    if (this.canInteract && this.dialogueBox === undefined) {
      this.dialogueBox = new DialogueBox(animal);
    }
  }

  /**
   * Deletes the popup
   */
  public deletePopUp(): void {
    this.dialogueBox.deleteButtons();
    this.dialogueBox = undefined;
  }

  /**
   * checks for collision with player
   */
  protected checkForCollision(): void {
    this.worldItems.forEach((item: WorldItem) => {
      if (this.player.collidesWithWorldItem(item)) {
        if (item.getPosY()
          + item.getHeight() - 40 > this.player.getPosY()
          && this.player.getPosY() > item.getPosY()
          + item.getHeight() - 50) this.player.setBottomSideOfCollision(true);
        if (item.getPosY() < this.player.getPosY() + this.player.getHeight()
          && this.player.getPosY() + this.player.getHeight()
          < item.getPosY() + 20) this.player.setTopSideOfCollision(true);
        if (item.getPosX() + item.getWidth() > this.player.getPosX()
          && this.player.getPosX() > item.getPosX()
          + item.getWidth() - 20) this.player.setRightSideOfCollision(true);
        if (item.getWorldItemSource().includes('House-blue.png')) {
          if (item.getPosX() + 30 < this.player.getPosX() + this.player.getWidth()
            && this.player.getPosX() + this.player.getWidth()
            < item.getPosX() + 40) this.player.setLeftSideOfCollision(true);
        } else if (item.getPosX() < this.player.getPosX() + this.player.getWidth()
          && this.player.getPosX() + this.player.getWidth()
          < item.getPosX() + 20) this.player.setLeftSideOfCollision(true);
      }
    });

    this.itemsBehindPlayer.forEach((item: WorldItem) => {
      if (this.player.collidesWithItemBehindPlayer(item)) {
        if (item.getPosY()
          + item.getHeight() > this.player.getPosY()
          && this.player.getPosY() > item.getPosY()
          + item.getHeight() - 10) this.player.setBottomSideOfCollision(true);
        if (item.getPosY() + 100 < this.player.getPosY() + this.player.getHeight()
          && this.player.getPosY() + this.player.getHeight()
          < item.getPosY() + 110) this.player.setTopSideOfCollision(true);
        if (item.getPosX() + item.getWidth() > this.player.getPosX()
          && this.player.getPosX() > item.getPosX()
          + item.getWidth() - 20) this.player.setRightSideOfCollision(true);
        if (item.getPosX() < this.player.getPosX() + this.player.getWidth()
          && this.player.getPosX() + this.player.getWidth()
          < item.getPosX() + 20) this.player.setLeftSideOfCollision(true);
      }
    });
  }

  public abstract override update(elapsed: number): Scene;
  public abstract override render(canvas: HTMLCanvasElement): void;
  protected abstract placeWorldItems(): void;
}
