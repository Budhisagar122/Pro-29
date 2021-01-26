class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y, width,height, options); 
        this.width = 40;
        this.height =50;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height)
        
        pop();
      }
}