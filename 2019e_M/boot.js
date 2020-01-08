export default class Boot extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {  
        this.load.image('iconofavorito','./favicon.png');
        this.load.image('platform','./platform.png');
        this.load.image('base','./base.png');
        this.load.image('star','./star.png');

    }
  
    create() {
        this.scene.start('game');
    }
  
    update(time, delta) {    
    }
  }