export default class GameMusic {
    static music = new Audio('./Sounds/TitleScreen.wav');
    static playMusic() {
        setInterval(() => {
            this.music.play();
        }, 10);
    }
    static stopMusic() {
        this.music.pause();
        this.music.currentTime = 0;
    }
    static setMusicSource(src) {
        this.music.src = src;
    }
}
//# sourceMappingURL=GameMusic.js.map