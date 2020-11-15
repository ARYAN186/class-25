class Pig{ 
    constructor(x,y){
    
        var box_options={
            restitution : 1
            
        }
        this.color="pink";
        this.box = Bodies.rectangle(x,y,50,50,box_options);
        this.width=70;
        this.height=70;
        this.image = loadImage("sprites/enemy.png")
        World.add (world,this.box);
        }
 
     display_pig(){
        var pos =this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(0.9);
        stroke("black");
        fill(this.color);
        image(this.image,0, 0, this.width, this.height);
        pop();
        }

}






