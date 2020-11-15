class Box{ 
    constructor(x,y,width,height){
    
        var box_options={
            restitution : 1,
            friction : 1,
            density : 1
        }
        this.color="brown";
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        this.image = loadImage("sprites/wood1.png")
        World.add (world,this.box);
        }
 
     display_box(){
        var pos =this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(this.color);
        image(this.image,0, 0, this.width, this.height);
        pop();
        }

}






