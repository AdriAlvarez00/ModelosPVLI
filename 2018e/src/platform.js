export default class Platform extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){
        super(scene,x,y,'platform');
        this.scene.add.existing(this);
        this.scene.platforms.add(this);
        this.body.checkCollision.down = false;
        this.body.checkCollision.right = false;
        this.body.checkCollision.left = false;
        this.body.checkCollision.up = true;  
    }
}