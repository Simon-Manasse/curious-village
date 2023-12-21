/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export default class GameMusic {
  static music: HTMLAudioElement = new Audio('./Sounds/TitleScreen.wav');

  /**
   * plays the music
   */
  public static playMusic() {
    setInterval(() => {
      this.music.play();
    }, 10);
  }

  /**
   * stops the music
   */
  public static stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }

  public static setMusicSource(src: string) {
    this.music.src = src;
  }
}
