export default class Ball extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed,divisions,player){
        super(scene.matter.world,x,y,'ball',0,{    
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            inertia: Infinity,
            restitution: 1,
            bounce: 1,
            shape: 'circle'});
            // console.log(1/divisions+1);
        this.setScale(2/Math.pow(2,divisions));
        this.scene.add.existing(this);
        this.scene.balls.add(this);
       // this.setBounce(1);
        this.setMass(50);
        //this.setFriction(0);
        this.setAngle(Phaser.Math.Between(0,360));
        this.thrust(speed);
        this.divisions = divisions;
        this.player = player;
        this.speed = speed;

        this.scene.matterCollision.addOnCollideStart({
            objectA: this.player,
            objectB: this,
      
            callback: eventData => {;
            this.divide();}
          })
    }
    divide(player){
        if(this.divisions<3){
            new Ball(this.scene,this.x+this.width/4,this.y+this.width/4,this.speed,this.divisions+1,this.player);
            new Ball(this.scene,this.x-this.width/4,this.y-this.width/4,this.speed,this.divisions+1,this.player);
        }
        this.scene.balls.remove(this);
        let n = this.scene.balls.getChildren().length;
        console.log(n);
        if(n<=0)
            console.log('win');
        this.destroy();
    }
    update(time,delta){
        console.log(this.velocity);
    }
}