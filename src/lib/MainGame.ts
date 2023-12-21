import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';
import Quest from './Quests/Quest.js';
import QuestManager from './Quests/QuestManager.js';
import Tutorial from './Tutorial.js';
import BadEnding from './BadEnding.js';
import GoodEnding from './GoodEnding.js';
import EndingTitles from './EndingTitles.js';
import Forest from './Forest.js';
import Locale from './Locale.js';

export default class MainGame extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private currentScene: Scene;

  private static currentSceneToMap: Scene;

  private music: HTMLAudioElement;

  private questLogWIndow: HTMLImageElement;

  private qeustLogWIndowNoMap: HTMLImageElement;

  private static quests: Quest[] = [];

  public static translation: Locale = new Locale('nl');

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.qeustLogWIndowNoMap = CanvasUtil.loadNewImage('./Assets/DialogueQuest/quest_window_no_map.png');
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.questLogWIndow = CanvasUtil.loadNewImage('./Assets/DialogueQuest/quest_window.png');
    this.keyListener = new KeyListener();
    // Set the starting scene
    // eslint-disable-next-line max-len
    this.currentScene = new Start(canvas.width, canvas.height);
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentScene.processInput(this.keyListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    if (QuestManager.getIndex() === 11) QuestManager.endGame();
    const nextScene: Scene = this.currentScene.update(elapsed);
    if (nextScene !== null) this.currentScene = nextScene;
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
    if (this.currentScene instanceof Start === false
      && this.currentScene instanceof Tutorial === false
      && this.currentScene instanceof BadEnding === false
      && this.currentScene instanceof GoodEnding === false
      && this.currentScene instanceof EndingTitles === false) {
      if (QuestManager.getIndex() === 0) {
        CanvasUtil.drawImage(this.canvas, this.qeustLogWIndowNoMap, this.canvas.width - this.questLogWIndow.width, 0);
        CanvasUtil.writeText(this.canvas, QuestManager.getOngoingQuestLog(), this.canvas.width - 177, this.questLogWIndow.height / 2, 'center', 'monogramextended', 25, 'black');
      }
      else if (this.currentScene instanceof Forest === true) {
        CanvasUtil.drawImage(this.canvas, this.questLogWIndow, 0, 0);
        CanvasUtil.writeText(this.canvas, QuestManager.getOngoingQuestLog(), this.questLogWIndow.width / 2, this.questLogWIndow.height / 2, 'center', 'monogramextended', 25, 'black');
      } else {
        CanvasUtil.drawImage(this.canvas, this.questLogWIndow, this.canvas.width - this.questLogWIndow.width, 0);
        CanvasUtil.writeText(this.canvas, QuestManager.getOngoingQuestLog(), this.canvas.width - 177, this.questLogWIndow.height / 2, 'center', 'monogramextended', 25, 'black');
      }
    }
  }
}
