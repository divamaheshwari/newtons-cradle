const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  var ball_options={
  isStatic : false,
  restitution:1,
  friction:0,
  density:0.8
}
	ball1 = Bodies.circle(400,350, 20, ball_options);
	World.add(world,ball1);

	
	ball2 = Bodies.circle(350,350, 20, ball_options);
	World.add(world,ball2);

	
	ball3 = Bodies.circle(300,350, 20, ball_options);
	World.add(world,ball3);

	
	ball4 = Bodies.circle(450,350, 20, ball_options);
	World.add(world,ball4);

	
	ball5 = Bodies.circle(500,350, 20, ball_options);
	World.add(world,ball5);

	rope1 = new rope({x: 400, y: 100}, ball1);
	rope2 = new rope({x: 350, y: 100}, ball2);
	rope3 = new rope({x: 300, y: 100}, ball3);
	rope4 = new rope({x: 450, y: 100}, ball4);
	rope5 = new rope({x: 500, y: 100}, ball5);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
	ellipse(ball1.position.x, ball1. position.y, 50);
	ellipse(ball2.position.x, ball2. position.y, 50);
	ellipse(ball3.position.x, ball3. position.y, 50);
	ellipse(ball4.position.x, ball4. position.y, 50);
	ellipse(ball5.position.x, ball5. position.y, 50);
 
 
 
  //call display() to show ropes here

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode=== RIGHT_ARROW);
	Matter.Body.applyForce(ball3, ball3.position, {x:-50, y:-45});
}