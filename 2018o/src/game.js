import Box from "./box.js";
// import { Phaser } from "../phaser.js";

const GAME_WIDTH = 1400;
const GAME_HEIGHT = 800;

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {
  }

  create() {
    this.cajas = this.add.group();
    this.createBox = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.selectKey = this.input.keyboard.addKey('S');
    this.deleteKey = this.input.keyboard.addKey('D');
    this.matter.world.setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.selectedBox = null;
    this.fxConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
    };
    this.fxAdd =this.sound.add('coin',this.fxConfig);
    this.fxChange =this.sound.add('pipe',this.fxConfig);
    this.fxMove =this.sound.add('jump',this.fxConfig);
    this.fxDelete =this.sound.add('fire',this.fxConfig);


    this.cursor = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.I,
      down: Phaser.Input.Keyboard.KeyCodes.K,
      left: Phaser.Input.Keyboard.KeyCodes.J,
      right: Phaser.Input.Keyboard.KeyCodes.L
    });
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.createBox)) {
      this.fxAdd.play(); 
      this.caja = new Box(this, GAME_HEIGHT, GAME_WIDTH)
    }
    if (Phaser.Input.Keyboard.JustDown(this.selectKey)) {
      this.selectBox();
    }
    if (Phaser.Input.Keyboard.JustDown(this.deleteKey) && this.selectedBox !== null) {
      this.selectedBox.delete();
      this.fxDelete.play();
    }
    let input = Phaser.Math.Vector2.ZERO;
    if (Phaser.Input.Keyboard.JustDown(this.cursor.up)) {
      input.add(Phaser.Math.Vector2.UP)
    }
    else if (Phaser.Input.Keyboard.JustDown(this.cursor.down)) {
      input.add(Phaser.Math.Vector2.DOWN)
    }
    if (Phaser.Input.Keyboard.JustDown(this.cursor.left)) {
      input.add(Phaser.Math.Vector2.LEFT)
    }
    else if (Phaser.Input.Keyboard.JustDown(this.cursor.right)) {
      input.add(Phaser.Math.Vector2.RIGHT)
    }

    // console.log(input.length());
    if(this.selectedBox !== null && input.length()>0)
      {
        this.fxMove.play();
        this.selectedBox.applyForce(input.scale(0.5))};
  }
  selectBox() {
    let cajitas = this.cajas.getChildren();
    let act = this.selectedBox;
    if(act !== null){act.clearTint()}
    if (cajitas.length === 0) { 
      act = null;
    }
    else if (cajitas.length === 1) {
      act = cajitas[0];
    }
    else {
      act = this.selectedBox;
      while (act === this.selectedBox) {
        act = cajitas[Phaser.Math.Between(0, cajitas.length-1)]
      }
      this.fxChange.play();
    }

    this.selectedBox = act;
    if(act!==null)
      act.setTint(0xe6482e,0xe6482e,0xe6482e,0xe6482e);
  }
}