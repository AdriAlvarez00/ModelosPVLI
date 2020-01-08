export default class Star extends Phaser.Physics.Matter.Sprite{
    constructor(scene,platform,player){
        super(scene.matter.world,platform.x,platform.y-platform.height/2,'star')
        this.scene.add.existing(this);
        this.platform = platform;

        this.scene.matterCollision.addOnCollideStart({
            objectA: player,
            objectB: this,
            callback: ({ bodyA, gObjA, bodyB, gObjB }) => {
              this.scene.pick();
            }
          });
    }
}