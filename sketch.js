var dustbinL, dustbinD, dustbinR;
var groundSprite;
var dustBinL, dustBinD;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	dustbinL = createSprite(1100, 555, 20, 100)
	dustbinD = createSprite(1200, 615, 200, 20)
	dustbinR = createSprite(1300, 555, 20, 100)
	//Create the Bodies Here.
	paperObject = new Paper(175, 320, 70)
	this.ground = Bodies.rectangle(width/2,630, width, 10, {isStatic:true})
	World.add(world, ground)
	dustbinLBody = Bodies.rectangle(1100, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinLBody)
	dustbinDBody = Bodies.rectangle(1200, 615, 200, 20, {isStatic:true})
	World.add(world, dustbinDBody)
	dustbinRBody = Bodies.rectangle(1300, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinRBody)
	//paperSupport = Bodies.rectangle(175, 280, 100, 20, {isStatic:true})
	Rope1 = new Rope(paperObject.body, {x: 175, y: 280})
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  paperObject.display();
  var groundpos = this.ground.position; 
        push() 
        translate(groundpos.x, groundpos.y); 
        rectMode(CENTER) 
        strokeWeight(3); 
        fill("white") 
        rect(0,0,width, 10); 
		pop()
  drawSprites()
}

function mouseDragged(){
		Matter.Body.setPosition(paperObject.body, {x:mouseX,y:mouseY})
	}
function mouseReleased(){
		Rope1.fly()
}