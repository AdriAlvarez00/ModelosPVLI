import Base from '/src/base.js'

export default class Platform extends Phaser.GameObjects.Sprite {
    constructor(scene,platGroup,x,y){
        super(scene,x,y,'platform');
        this.scene.add.existing(this);
        platGroup.add(this);   
        this.base = new Base(scene,this,x,y);  
        this.jumpThrough();
    }
    jumpThrough(){
      this.body.checkCollision.down = false;
        this.body.checkCollision.right = false;
        this.body.checkCollision.left = false;
        this.body.checkCollision.up = true;  
    }
}