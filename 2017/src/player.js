export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,cursor){
        super(scene.matter.world,x,y,'dude');
        this.scene.add.existing(this);
        this.setMass(100);
        this.setFixedRotation(0);
        // this.setScale(5);
        // this.scene.physics.add.existing(this);
        // this.body.setScale(5);
        // this.setCollideWorldBounds(true);
        //this.body.setBounce(0.5,0.5);
        // this.body.setFriction(1,1);
        this.cursors = cursor;
        this.jumpSpeed = 5;
        this.onFloor = false;
        this.maxSpeed = 10;
        this.knockBackForce = 10000000000;
        this.accel = 2  ;
        // this.body.setBoundsRectangle();
    }
    preUpdate(time,delta){
        console.log("x: " + this.body.velocity.x +" y: " + this.body.velocity.y);
        // console.log(this.body.velocity.lenght()) ;
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up)& this.onFloor) {
            this.applyForce({x:0, y:-this.jumpSpeed});
            this.onFloor = false;
          }
          if (this.cursors.left.isDown && this.body.velocity.x > -this.maxSpeed) {
            this.applyForce({x:-this.accel*delta/1000, y:0});
          }
          else if (this.cursors.right.isDown && this.body.velocity.x < this.maxSpeed) {
            this.applyForce({x:this.accel*delta/1000, y:0});
          }
          else {
           // this.body.setVelocityX(this.body.velocityX*0.5);
          
          }
    }
    knock(dir){
        console.log("EMPUJE-- x: " +dir.x*this.knockBackForce+ " y: " +dir.y*this.knockBackForce );
        this.setVelocityX(dir.x*this.knockBackForce);
        this.setVelocityY(dir.y*this.knockBackForce);

    }
}