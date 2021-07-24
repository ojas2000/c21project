
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var dustbin = [2];
var dusbinpic,dustIm;
var leftWall;
var rightWall;
var top;




function preload()
{
	dustIm = loadImage("image_processing20200423-26294-c1u8t1.png");

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;


  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  let ball_options = {
	  isStatic: false,
    restitution : .6,
	friction:10,
	density:.4
  };
  ball = Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);

  
  ground =new Ground(400,650,800,100,0);
  leftWall =new Ground(-50,400,100,800,0);
  rightWall =new Ground(850,400,100,800,0);
  top =new Ground(400,-50,800,100,0);


 dustbin[0] = new Ground(525,550,10,225,0);
 dustbin[1] = new Ground(668,550,10,225,0);
 


 dusbinpic = createSprite(600,550,50,50);
 dusbinpic.addImage(dustIm);
 dusbinpic.scale= .13;
 
}
function draw() 
{

  background(51);
  ground.show();

 

  ellipse(ball.position.x,ball.position.y,30);
if(keyDown("RIGHT_ARROW"))
{
	force();

}

 


  Engine.update(engine);
  drawSprites();

  
}

function force()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-2.5});
}