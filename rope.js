class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:10
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
