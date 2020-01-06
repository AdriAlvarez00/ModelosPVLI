export default class Coin extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){
        super(scene,x,y,'coin');
        this.scene.add.existing(this);      
        // this.body.refreshBody();
        this.scene.physics.add.existing(this,true);
        this.scene.coins.add(this);
    }
}