class Log{ 
    constructor(x,y,height,angle){
    
        var box_options={
            restitution : 1,
            friction : 1,
            density : 1
            
        }
        this.color="pink";
        this.box = Bodies.rectangle(x,y,25,height,box_options);
        this.width=20;
        this.height=height;
        this.image = loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.box,angle);
        World.add (world,this.box);
        }
 
     display_logs(){
        var pos =this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill(this.color);
        image(this.image,0, 0, this.width, this.height);
        pop();
        }

}






