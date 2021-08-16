
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		frictionAir:0,
		isStatic:false,
		density:1.2,
	  }

	//Create the Bodies Here.
	ground =new Ground(200,690,10000,20);

	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);




  Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Red");

  ellipse(ball.position.x,ball.position.y,20);

  ground.Display();

  
  
  
  
  drawSprites();
 
}


  






