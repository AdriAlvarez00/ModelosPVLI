export default class Wall extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,rotation){
        super(scene.matter.world,x,y,'wall',0,{
        frictionAir: 0,
        friction: 0,
        frictionStatic: 0,
        inertia: Infinity,
        restitution: 1,
        bounce: 1,
        isStatic: true});
        // if(rotation = 0)
        //     this.height = 800-32*2
        // else
        //     this.height=1400
        this.scene.add.existing(this);
        // this.setBounce(1);
        // this.scene.physics.add.existing(this,true);
        this.angle = rotation;
    }
}