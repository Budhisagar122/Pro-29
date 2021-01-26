const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1,ground2,ground3;
var boxA1,boxA2,boxA3,boxA4,boxA5,boxA6,boxA7,boxA8,boxA9,boxA10,
boxA11,boxA12,boxA13,boxA14,boxA15,boxA16,boxA17,boxA18,boxA19,boxA20,boxA21;
var boxB1,boxB2,boxB3,boxB4,boxB5,boxB6,boxB7,boxB8,boxB9,boxB10;
var slingshot,polygon,polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world; 
    Engine.run(engine);

    ground1=new Ground(0,395,2500,10)
    ground2=new Ground(500,320,300,10)
    ground3=new Ground(830,200,200,10)

    boxA1 = new Block(500,265);
    boxA2=new Block(460,265);
    boxA3=new Block(420,265);
    boxA4=new Block(380,265);
    boxA5=new Block(540,265);
    boxA6=new Block(580,265);
    boxA7=new Block(400,215);
    boxA8=new Block(440,215);
    boxA9=new Block(480,215);
    boxA10=new Block(520,215);
    boxA11 = new Block(560,215);
    boxA12=new Block(420,165);
    boxA13=new Block(460,165);
    boxA14=new Block(500,165);
    boxA15=new Block(540,165);
    boxA16=new Block(440,115);
    boxA17=new Block(480,115);
    boxA18=new Block(520,115);
    boxA19=new Block(460,65);
    boxA20=new Block(500,65);
    boxA21=new Block(480,15);

    boxB1 = new Block(830,145);
    boxB2=new Block(870,145);
    boxB3=new Block(790,145);
    boxB4=new Block(750,145);
    boxB5=new Block(765,95);
    boxB6=new Block(805,95);
    boxB7=new Block(845,95);
    boxB8=new Block(785,45);
    boxB9=new Block(825,45);
    boxB10=new Block(805,0); 

    polygon=Bodies.circle(50,200,50,{isStatic:true});
    World.add(world,polygon);

    slingshot=new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
    background(56,44,44);
    //Engine.update(engine); 
    ground1.display();
    ground2.display();
    ground3.display();

    boxA1.display();
    boxA2.display();
    boxA3.display();
    boxA4.display();
    boxA5.display();
    boxA6.display();
    boxA7.display();
    boxA8.display();
    boxA9.display();
    boxA10.display();
    boxA11.display();
    boxA12.display();
    boxA13.display();
    boxA14.display();
    boxA15.display();
    boxA16.display();
    boxA17.display();
    boxA18.display();
    boxA19.display();
    boxA20.display();
    

    boxB1.display();
    boxB2.display();
    boxB3.display();
    boxB4.display();
    boxB5.display();
    boxB6.display();
    boxB7.display();
    boxB8.display();
    boxB9.display();
    boxB10.display();

    boxA21.display();
    textSize(22)
    fill("yellow")
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",10,20);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition (this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}