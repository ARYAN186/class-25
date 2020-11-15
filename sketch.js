const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1;

function preload() {

      bg = loadImage("sprites/bg.png");


}

function setup() {
      createCanvas(1200,400);
      engine = Engine.create();
      world=engine.world;

  
      ground1 = new Ground(100,height,2700,70);


    
      box1 = new Box(1000,300,70,70);
      box2 = new Box(800,300,70,70);
      pig1 = new Pig(900,270);
      log1 = new Log(900,200,270,PI/2);
      
      box3 = new Box(1000,190,70,70);
      box4 = new Box(800,190,70,70);
      pig2 = new Pig(900,200);
      log2 = new Log(900,100,270,PI/2);

      box5 = new Box(900,100,70,70);
      log3 = new Log(850,50,150,PI/5);
      log4 = new Log(900,50,150,-PI/5);

      red1 = new Red(200,300);
    }     
  

function draw() {
          background(bg); 
          Engine.update(engine);
          
          
          ground1.display_ground();
          box1.display_box();
          box2.display_box();
          box3.display_box();
          box4.display_box();
          box5.display_box();
          pig1.display_pig();
          log1.display_logs();
          pig2.display_pig();
          log2.display_logs();
          log3.display_logs();
          log4.display_logs();
          red1.display_box();

}