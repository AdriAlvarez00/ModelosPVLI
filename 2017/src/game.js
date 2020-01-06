import Player from './player.js'

const GAME_WIDTH = 1400;
const GAME_HEIGHT = 800;
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  init(){
    
}

  preload() {  
    //this.physics.setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT);

  }

  create() {
    this.matter.world.setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT, 15);
   // this.customBounds = new Phaser.Geom.Rectangle(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.cursorLeft = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    });
    this.cursorRight = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.I,
      down: Phaser.Input.Keyboard.KeyCodes.K,
      left: Phaser.Input.Keyboard.KeyCodes.J,
      right: Phaser.Input.Keyboard.KeyCodes.L
    });
    this.leftPlayer = new Player(this,50,50,this.cursorLeft);
    this.rightPlayer = new Player(this,500,50,this.cursorRight);
    this.matterCollision.addOnCollideActive({
      objectA: [this.leftPlayer,this.rightPlayer],
      objectB: this.matter.world.bounds,
      callback: ({bodyA,gameObjectA,bodyB,gameObjectB}) =>{
        gameObjectA.onFloor = true;

      }
    });
    this.matterCollision.addOnCollideEnd({
      objectA: [this.leftPlayer,this.rightPlayer],
      objectB: this.matter.world.bounds,
      callback: ({bodyA,gameObjectA,bodyB,gameObjectB}) =>{
        gameObjectA.onFloor = false;

      }
    });
    this.matterCollision.addOnCollideStart({
      objectA: this.leftPlayer,
      objectB: this.rightPlayer,
      callback: ({bodyA,gameObjectA,bodyB,gameObjectB}) =>{
        console.log("Se besaron");
        let dir = new Phaser.Math.Vector2(
          gameObjectB.x-gameObjectA.x,gameObjectB.y-gameObjectA.y
        );
        dir = dir.normalize();
        console.log('B');
        gameObjectB.knock(dir.negate());
        console.log('A');
        gameObjectA.knock(dir.negate());
      }
    });
  }

  update(time, delta) {    
  }
}