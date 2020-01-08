import Base from './base.js'
import Star from './star.js';

export default class Platform extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y) {
        super(scene.matter.world, x, y, 'platform');
        this.scene.add.existing(this);
        this.setScale(0.25);
        this.setStatic(true);
        this.body.label = 'platform';
        this.base = new Base(this.scene,this);
        
    }
    spawn(){
        return(new Star(this.scene,this))
    }
}