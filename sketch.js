var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var package;
var log1,log2,log3;
var ground1

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(800/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false

	helicopterSprite=createSprite(800/2, 200, 10,10);
	helicopterSprite.visible=false;
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle((800/2) - 100, 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	ground1 = new Ground(width/2, height-35, width,10)

	Engine.run(engine);

	box1=new box(130,helicopterSprite.y,50,50);
	log1=new log((800/2)+35,200,30,70,0);
	log2=new log((800/2)+160,200,30,70,0);
	log3=new log((800/2)+100,500,160,30,0);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= (800/2) - 400 ;
  packageSprite.y= 200 ;
  drawSprites();
  ground1.display();
  box1.display();
  log2.display();
  log1.display();
  log3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//box1.display()
	Matter.Body.applyForce(box1.doSomething(1),box1.doSomething(2),{x:85,y:-85});
  }
}



