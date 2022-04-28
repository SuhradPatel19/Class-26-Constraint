//nameSpace
const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

//creating my own physics engine
var  engine,world
var ground;
var ball;
var angle=40
var angle2=75
var rotater1
var rotater2
var button1
var r1,r2,r3,r4,r5





function setup(){
createCanvas(400,400)


engine= Engine.create()
world=engine.world

var ground_options={
  isStatic:true
}
var ball_option={
  restitution:1,
  
}
ground= Bodies.rectangle(200, 380, 400, 20,ground_options) 
World.add(world,ground)

ball= Bodies.circle(300,300,25,ball_option)
World.add(world,ball)

// rotater1= Bodies.rectangle(200,200,10,100,ground_options)
// World.add(world,rotater1)

// rotater2= Bodies.rectangle(100,100,10,100,ground_options)
// World.add(world,rotater2)

// r1= new Rotater(50,200,10,100,"red",10,10)
// r2= new Rotater(100,200,10,100,"blue",25,1)
// r3= new Rotater(150,200,10,100,"pink",15)
// r4= new Rotater(200,200,10,100,"orange",5)
// r5= new Rotater(250,200,10,100,"green",30)


button1=createImg("up.png")
button1.position(200,50)
button1.size(50,50)
button1.mouseClicked(vForce)

}
function draw(){
  background("black")

  Engine.update(engine)
  push()
  rectMode(CENTER)
  fill("pink")
  rect(ground.position.x,ground.position.y,400,20)
  pop()
  push()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
  pop()

//   Matter.Body.setAngle(rotater1, angle)
//   Matter.Body.setAngle(rotater2, angle2)

//   push()
//   fill("blue")
//   translate(rotater1.position.x,rotater1.position.y)
//   rotate(angle)
//   rectMode(CENTER)
//   angleMode(DEGREES)
//   angle+=1
//   rect(0,0,10,100)
// pop()


// push()
//   fill("green")
//   translate(rotater2.position.x,rotater2.position.y)
//   rotate(angle2)
//   rectMode(CENTER)
//   angleMode(DEGREES)
//   angle2+=10
//   rect(0,0,10,100)
// pop()

r1.show()
r2.show()
r3.show()
r4.show()
r5.show()
}



function vForce(){
  Matter.Body.applyForce(ball, ball.position, {x:0, y:-0.05})

}
