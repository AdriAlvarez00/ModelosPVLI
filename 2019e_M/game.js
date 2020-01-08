import Platform from "./platform.js";
import Player from "./player.js";
import Star from "./star.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {
  }

  create() {
    this.score = 0;
    this.matter.world.setBounds();
    this.platforms = [];
    this.platforms.push(new Platform(this, 200, 600));
    this.platforms.push(new Platform(this, 700, 600));
    this.platforms.push(new Platform(this, 1200, 600));
    this.platforms.push(new Platform(this, 450, 400));
    this.platforms.push(new Platform(this, 950, 400));

    this.player = new Player(this, 100, 700);
    this.star = this.star = new Star(this,this.platforms[Math.floor(Math.random()*5)],this.player);

  }

  pick() {
    console.log(++this.score);
    let act = this.star.platform;
    {
      //para que no repita
      while (act === null || act === this.star.platform) {
        act = this.platforms[Math.floor(Math.random()*5)];
      }
    }
    this.star.destroy();
    this.star = new Star(this,act,this.player);
  }
  update(time, delta) {
  }
}