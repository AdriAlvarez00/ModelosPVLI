export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, h, w) {

        super(scene.matter.world,
            0, 0, 'box');
            let scale = 0.2;
        this.setScale(scale);
        let xPos = Phaser.Math.Between(this.width*scale*0.5, w - (this.width*scale*0.5));
        // console.log(w +' - '+ this.width*scale);
        // console.log(xPos);
        //console.log(h +" - "+this.height*scale);
        let yPos = Phaser.Math.Between(this.height*scale*0.5, h - this.height*scale*0.5);
        // console.log(yPos);
        this.scene.add.existing(this);
        this.scene.cajas.add(this);
        this.setPosition(xPos,yPos);
        this.setMass(50);
        let dir = new Phaser.Math.Vector2();
        Phaser.Math.RandomXY(dir);
       // console.log(dir.normalize());
        let speed = Phaser.Math.Between(1,5);
        this.applyForce(dir.scale(speed));
        // this.setCollideWorldBounds(true);
    }
    delete(){
        this.scene.cajas.remove(this);
        this.scene.selectBox();
        this.destroy();
    }
}