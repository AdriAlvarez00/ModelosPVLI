export default class Game extends Phaser.Scene {
    constructor() {
      super({ key: 'boot' });
    }
    preload() {  
        this.load.image('box','./img/box.png')
        this.load.audio('coin','./fx/smb_coin.wav')
        this.load.audio('pipe','./fx/smb_pipe.wav')
        this.load.audio('jump','./fx/smb_bump.wav')
        this.load.audio('fire','./fx/smb_bowserfire.wav')

    }
  
    create() {
        this.scene.start('game');
    }
  
    update(time, delta) {    
    }
  }