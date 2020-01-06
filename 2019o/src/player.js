export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, speed) {
        super(scene.matter.world, x, y, 'player', {
            bounce: 1,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 1,
            inertia: Infinity,
            restitution: 1,
            bounce: 1,
        });
        this.scene.add.existing(this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.speed = speed;
        this.setFixedRotation(0);
    }
    preUpdate(time, delta) {
        let move = new Phaser.Math.Vector2();
        move.set(0, 0);
        if (this.cursors.up.isDown) {
            move.add(Phaser.Math.Vector2.UP);
        }
        else if (this.cursors.down.isDown) {
            move.add(Phaser.Math.Vector2.DOWN);
        }

        if (this.cursors.left.isDown) {
            move.add(Phaser.Math.Vector2.LEFT);
        }
        else if (this.cursors.right.isDown) {
            move.add(Phaser.Math.Vector2.RIGHT);
        }
        move = move.normalize().scale(this.speed);
        this.setVelocity(move.x, move.y);
    }

}