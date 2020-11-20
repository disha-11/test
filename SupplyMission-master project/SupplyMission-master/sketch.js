var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var bg, bgIMG;
var packageBody,ground;

var box,box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgIMG=loadImage("bg.png")
	


}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	bg=createSprite(400,350,10,10);
	bg.addImage(bgIMG)
	bg.scale=1.2;
	

	box =createSprite(width/2 ,650,200,20);
	box.shapeColor="red";
	box2 =createSprite(300 ,610,20,100);
	box2.shapeColor="red";
	box1=createSprite(500,610,20,100);
	box1.shapeColor="red";

	
	
packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 );
	World.add(world, packageBody);
	Matter.Body.setStatic(packageBody,true)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 


	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
if(bg.x>900){
	bg.x=bg.width/2;
}

  
   packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

keyPressed();
drawSprites();
 
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);    
	 }
   }

  