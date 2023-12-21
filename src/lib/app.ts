import MainGame from './MainGame.js';
import { GameLoop } from './GameLoop.js';

const game = new MainGame(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
