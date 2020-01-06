export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player')
        this.scene.add.existing(this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.jumpKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.speed = 200;
        this.jumpSpeed = 300;
    }
    preUpdate(time,delta){
        super.preUpdate(time,delta);
        if(this.cursors.left.isDown){
            this.body.setVelocityX(-this.speed)
            this.play('player_run',true);
            this.setFlipX(true);
        }
        else if(this.cursors.right.isDown){
            this.body.setVelocityX(this.speed);
            this.play('player_run',true);
            this.setFlipX(false);
        }
        else{
            this.body.setVelocityX(0);
            this.play('player_idle',true);
        }
        
        if(Phaser.Input.Keyboard.JustDown(this.jumpKey) && this.body.onFloor()){
            this.body.setVelocityY(-this.jumpSpeed)
        }
    }
}
