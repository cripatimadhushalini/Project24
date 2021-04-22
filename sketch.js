const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(200,200,50,50);
    box = new Box(600,200,50,50);
    stone1 = new Stone(300,200,5,5);
    stone2 = new Stone(320,200,5,5);
    stone3 = new Stone(340,200,5,5);
    stone4 = new Stone(360,200,5,5);
    stone5 = new Stone(380,200,5,5);
    stone6 = new Stone(400,200,5,5);
    stone7 = new Stone(420,200,5,5);
    stone8 = new Stone(440,200,5,5);
    stone9 = new Stone(460,200,5,5);
    stone10 = new Stone(480,200,5,5);

    circle = new Circle(700,100,5,5);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   

    plane.display();
    hammer.display();
    iron.display();
    box.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display();

    circle.display();
}