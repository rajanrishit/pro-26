class board {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("./assets/board.png");
        world.add(World,this.body);
    }
//remove(index){
  //  that.isRemoved=true;
   // Matter.World.remove(world,this.body);
    //delete playerArrows[index];
//}
display() {
    var pos=this.body.position;
    push();
    imageMode(center);
    image(this.imahe,pos.x,pos.y,this.width.this.height);
    pop();
 }
}
