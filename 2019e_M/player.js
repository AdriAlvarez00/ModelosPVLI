export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'iconofavorito');
        this.scene.add.existing(this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.onFloor = true;
        this.setMass(1);
        this.setFixedRotation(0);
        this.setFriction(1,0.1,2);
        this.speed = 2;
        this.jumpSpeed = 0.5;
    }
    preUpdate(time,delta){
        super.preUpdate(time,delta);
        if(this.cursors.left.isDown)
        {this.setVelocityX(-this.speed);}
    else if(this.cursors.right.isDown)
        {this.setVelocityX(this.speed);}
    else
        {this.setVelocityX(0);}

    if(this.cursors.up.isDown && this.onFloor)
        {this.setVelocityY(-this.jumpSpeed*2-30)};
    }
}