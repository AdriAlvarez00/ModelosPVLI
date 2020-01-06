export default class Base extends Phaser.GameObjects.Sprite {
    constructor(scene,base,x,y){
        super(scene,x,y,'star');
        this.y -= this.height;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this,true);     
        this.base = base;
    }
    preUpdate(){
        if(this.scene.physics.overlap(this.scene.player,this)){
            this.scene.gainPoint(this.base.platform);
            this.destroy();
        }
    }
}