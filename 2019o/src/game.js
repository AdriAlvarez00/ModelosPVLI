import Wall from './wall.js'
import Ball from './ball.js'
import Player from './player.js'

const WIN_HEIGHT = 800;
const WIN_WIDTH = 1400;

const SECONDS = 30 ;

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    let self = this;
    WebFont.load({
      google: {
        families: ['VT323']
      },
      active: function () // se llama a esta función cuando está cargada
      {
        self.timer = self.add.text(WIN_WIDTH / 2, 20, SECONDS, { fontFamily: 'VT323', fontSize: 100, color: '#f4b41b' })
        self.timer.setOrigin(0.5, 0);
      }
    });

    this.time.addEvent({
      delay: 1000, callback: countdownTick => {
        this.timeLeft--;
        this.timer.setText(this.timeLeft);
        if (this.timeLeft <= 0) {
          this.clearBalls();
        }
      }, callbackScope: this, loop: true
    });
  }

  startGame() {
    this.cameras.main.setBackgroundColor('#472d3c')

    if (this.player != null && this.player != undefined)
      this.player.destroy();

    this.player = new Player(this, WIN_WIDTH / 2, 4 * WIN_HEIGHT / 5, 5);

    if (this.ball != null && this.ball != undefined)
      this.ball.destroy();

    this.clearBalls();

    this.ball = new Ball(this, WIN_WIDTH / 2, WIN_HEIGHT / 2, 1, 0, this.player);

    this.timeLeft = SECONDS;

  }
  clearBalls() {
    this.balls.getChildren().forEach(element => {
      element.destroy();
    });
  }
  create() {
    this.walls = new Array();
    this.walls.push(new Wall(this, WIN_WIDTH, WIN_HEIGHT / 2, 0));
    // this.walls.push(new Wall(this,WIN_WIDTH/2,WIN_HEIGHT/2,0));
    this.walls.push(new Wall(this, 0, WIN_HEIGHT / 2, 0));
    this.walls.push(new Wall(this, WIN_WIDTH / 2, WIN_HEIGHT, 90));
    this.walls.push(new Wall(this, WIN_WIDTH / 2, 0, 90));

    this.balls = this.add.group();

    this.startGame();

    this.restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update(time, delta) {
    if ((Phaser.Input.Keyboard.JustDown(this.restartKey))) {
      console.log('ñi');
      this.startGame();
    }
  }
}