class Rotater {
    constructor(x, y, w, h,c,a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
        this.a = a

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h,options)
        World.add(world, this.body)
    }

    show() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.a)
        rectMode(CENTER)
        fill(this.c)
        rect(0,0,this.w,this.h)
        pop()
        this.as+=0.1

    //     var angle= this.body.angle
    //     Matter.Body.rotate(this.body,angle)
    //     push()
    //     rotate(angle)
    //     //rectMode(CENTER)
    //     fill("pink")
    //     translate(this.body.position.x, this.body.position.y)
    //     rect(0,0,this.w,this.h)
    //     pop()
    //    angle+=0.5
    }



}