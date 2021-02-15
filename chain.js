class Chain{
    constructor(bodyA,bodyB){

        var options={
            bodyA :bodyA,
            bodyB :bodyB,
            length : 150,
            stiffness : 0.05,
        }

        this.Chain = Constraint.create(options);
        console.log(this.Chain);
        World.add(world, this.Chain);
    }

    display(){
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}