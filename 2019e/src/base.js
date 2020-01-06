import Star from '/src/star.js'

export default class Base extends Phaser.GameObjects.Sprite {
    constructor(scene, platform, x, y) {
        super(scene, x, y, 'base');
        this.scene.add.existing(this);
        this.y -= this.height / 2 + platform.height / 2;
        this.platform = platform;
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this, this.scene.player);
        this.jumpThrough();
    }
    spawn() {
        new Star(this.scene, this, this.x, this.y);
    }
    jumpThrough() {
        this.body.checkCollision.down = false;
        this.body.checkCollision.right = false;
        this.body.checkCollision.left = false;
        this.body.checkCollision.up = true;
    }

}