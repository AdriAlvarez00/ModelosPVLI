export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }
    preload() {
        this.load.image('platform', './img/rect.png');
        this.load.image('base', './img/base.png');
        this.load.image('star', './img/star.png');
        this.load.image('player', './img/player.png');

        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

        this.load.spritesheet('playerSheet','./img/platformer_sprites_base.png',{frameWidth:64,frameHeight:64,margin: 0});

        this.load.audio('pointS','./audio/pointSound.mp3');
        this.load.audio('winS','./audio/yodaSound.mp3');

    }
    create() {
        this.scene.start('game');
    }

}