export default class boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {  
    this.load.image('platform','./img/platform.png');
    this.load.image('coin','./img/coin.png')
    this.load.spritesheet('player','./img/playersheet.png',{frameWidth:64,frameHeight:64});
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
  
    create() {
        this.scene.start('game');
    }
  
    update(time, delta) {    
    }
  }