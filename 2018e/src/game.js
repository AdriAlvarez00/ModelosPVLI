import Platform from "./platform.js";
import Coin from "./coin.js";
import Player from "./player.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() { 
    this.anims.create({
      key: 'player_run',
      frames: this.anims.generateFrameNumbers('player', { start: 4, end: 11 }),
      frameRate: 5,
      repeat: -1
    }); 
    this.anims.create({
      key: 'player_idle',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });

    self = this;
    WebFont.load({
      google: {
          families: [ 'VT323' ]
      },
    active: function(){
      self.scoreboard = self.add.text(16,0,'0',{ fontFamily: 'VT323', fontSize: 80, color: '#ffffff' })
    }})
  }

  create() {
    this.score = 0;
    this.platforms = this.physics.add.staticGroup();
    this.coins = this.physics.add.staticGroup();
    new Platform(this,200,600);
    new Platform(this,400,650);
    new Platform(this,600,700);
    new Coin(this,300,500);
    new Coin(this,400,500);
    new Coin(this,500,500);
    this.player = new Player(this,200,500);
    this.physics.add.collider(this.platforms,this.player);
    this.physics.add.overlap(this.coins,this.player,(player,coin)=>{
      coin.destroy();
      this.score++;
      this.scoreboard.setText(this.score)
    });
  }

  update(time, delta) {    
  }
}