//nameSpace
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

//creating my own physics engine
var engine, world
var ground;
var ball, ball2, ball2Image;
var angle = 40
var angle2 = 75
var rotater1
var rotater2
var button1
var r1, r2, r3, r4, r5

var chain1
var chain2


function preload(){
ball2Image=loadImage("ball.webp")
}




function setup() {
    createCanvas(400, 400)


    engine = Engine.create()
    world = engine.world

    var ground_options = {
        isStatic: true
    }
    var ball_option = {
        restitution: 0.2,

    }
    ground = Bodies.rectangle(200, 380, 400, 20, ground_options)
    World.add(world, ground)

    ball = Bodies.circle(300, 300, 25, ball_option)
    World.add(world, ball)

    ball2 = Bodies.circle(300, 100, 25, ball_option)
    World.add(world, ball2)

    chain1 = Constraint.create({
        length: 100,
        stiffness: 0.1,
        pointA: { x: 200, y: 60 },
        bodyB: ball,

    })

    chain2 = Constraint.create({
        length: 150,
        stiffness: 0.1,
        bodyA: ball,
        bodyB: ball2,

    })
    World.add(world, chain1)
    World.add(world, chain2)

    // button1=createImg("up.png")
    // button1.position(200,50)
    // button1.size(50,50)
    // button1.mouseClicked(vForce)

}
function draw() {
    background("black")

    Engine.update(engine)
    push()
    rectMode(CENTER)
    fill("pink")
    rect(ground.position.x, ground.position.y, 400, 20)
    pop()
    push()
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 25, 25)
    //ellipse(ball2.position.x, ball2.position.y, 25, 25)
    pop()

    push()
    imageMode(CENTER)
    image(ball2Image,ball2.position.x,ball2.position.y,50,50)
    //ellipse(ball.position.x, ball.position.y, 25, 25)
    //ellipse(ball2.position.x, ball2.position.y, 25, 25)

    pop()



    //line(x1,y1,x1,y2)
    push()
    stroke("white")
    strokeWeight(2)
    line(chain1.pointA.x, chain1.pointA.y, ball.position.x, ball.position.y)
    line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y)
    pop()


}


function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.applyForce(ball2, ball2.position, { x: -0.05, y: -0.05 })

    }
}



//function vForce(){
//   Matter.Body.applyForce(ball, ball.position, {x:0, y:-0.05})

// }
