class blockBlue{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,30,{isStatic:false,'friction':1.0,'density':5.0});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,20,30);
        pop();
    }
}