export default class Base extends Phaser.Physics.Matter.Sprite {
    constructor(scene,platform) {
        super(scene.matter.world, platform.x, platform.y, 'base');
        this.y - platform.height;
        this.scene.add.existing(this);
        this.setScale(0.5);
        this.setStatic(true);
    }
}