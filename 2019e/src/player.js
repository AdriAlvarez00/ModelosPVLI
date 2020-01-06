import Star from '/src/star.js'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerSheet');
    this.scene.add.existing(this);
    this.speed = 200;
    this.jumpSpeed = this.height * 8;
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.cursor = this.scene.input.keyboard.createCursorKeys();
    this.createAnims();
    this.play('player_jump');
  }
  createAnims() {
    this.scene.anims.create({
      key: 'player_idle',
      frames: this.scene.anims.generateFrameNumbers('playerSheet', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });
    this.scene.anims.create({
      key: 'player_walk',
      frames: this.scene.anims.generateFrameNumbers('playerSheet', { start: 4, end: 11 }),
      frameRate: 8,
      repeat: -1
    });
    this.scene.anims.create({
      key: 'player_jump',
      frames: this.scene.anims.generateFrameNumbers('playerSheet', { start: 42, end: 47 }),
      frameRate: 5,
      repeat: 0
    });
  }
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    if (this.cursor.up.isDown && this.body.onFloor()) {
      this.body.setVelocityY(-this.jumpSpeed);
      this.play('player_jump', false);
    }
    else if (this.cursor.left.isDown) {
      this.body.setVelocityX(-this.speed);
      if (this.body.onFloor()) {
        this.setFlip(true, false);
        this.play('player_walk', true);
      }
    }
    else if (this.cursor.right.isDown) {
      this.body.setVelocityX(this.speed);
      if (this.body.onFloor()) {
        this.setFlip(false, false);
        this.play('player_walk', true);
      }
    }
    else {
      this.body.setVelocityX(0);
      if (this.body.onFloor())
        this.play('player_idle', true);
      else
        this.play('player_jump', false);
    }
  }
}
