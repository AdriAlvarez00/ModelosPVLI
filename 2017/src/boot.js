export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {  
        this.load.image('dude','./img/favicon.png');
    }
  
    create() {
        this.scene.start('game');
    }
  }