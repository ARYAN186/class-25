class Red{ 
    constructor(x,y){
    
        var box_options={
            restitution : 1,
            friction : 1,
            density : 1
        }
        this.color="brown";
        this.box = Bodies.rectangle(x,y,50,50,box_options);
        this.width=50;
        this.height=50;
        this.image = loadImage("sprites/bird.png")
        World.add (world,this.box);
        }
 
     display_box(){
        var pos =this.box.position;
        pos.x = mouseX;
        pos.y = mouseY;
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






