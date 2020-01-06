export default class Game extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {  
        this.load.image('wall','./img/wall.png');
        this.load.image('ball','./img/rolaBola.png');
        this.load.image('player','./img/player.png');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create(){
        this.scene.start('main');
    }
  }