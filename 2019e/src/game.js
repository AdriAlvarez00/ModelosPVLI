import Platform from '/src/platform.js'
import Player from '/src/player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {
  }
  create() {
    this.stars = 2;
    this.score = 0;
    this.platforms = this.physics.add.staticGroup();
    this.player = new Player(this, 200, 600);

    new Platform(this, this.platforms, 1400 - 150, 550);
    new Platform(this, this.platforms, 1400 / 2, 550);
    new Platform(this, this.platforms, 150, 550);

    new Platform(this, this.platforms, 1400 / 2 - 1400 / 4, 250);
    new Platform(this, this.platforms, 1400 / 2 + 1400 / 4, 250);

    this.physics.add.collider(this.player, this.platforms);

    let self = this;
    WebFont.load({
      google: {
          families: ['VT323']
      },
      active: function () // se llama a esta función cuando está cargada
      {
        self.scoreTxt = self.add.text(16,0, 'Score:  ' + self.score, { fontFamily: 'VT323', fontSize: 80, color: '#ffffff' })
      }
  });

    this.spawn();
    this.pointSound = this.sound.add('pointS');
    this.winSound = this.sound.add('winS');
  }
  updateScore(){
    this.scoreTxt.text = 'Score:  ' + this.score;
  }
  gainPoint(st = null) {
    this.score++;

    this.updateScore();
    if (this.score >= this.stars)
      this.winSound.play();
    else{
      this.pointSound.play();
      this.spawn(st)
    }
  }
  spawn(from = null) {
    let n;
    let nextPlat = null;
    do {
      n = Phaser.Math.Between(0, this.platforms.getLength() - 1);
      nextPlat = this.platforms.getChildren()[n];
    } while (nextPlat === from);
    nextPlat.base.spawn();
  }
}