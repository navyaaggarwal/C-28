class slingshot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA, 
            pointB : pointB,
            stiffness : 0.5, 
            length : 5
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options)
        World.add(world, this.sling)

    }

  display()  {
        
        if(this.sling.bodyA ) {
            var pointA, pointB;
            pointA = this.sling.bodyA.position
            pointB = this.sling.pointB
            
            line(pointA.x, pointA.y, pointB.x, pointB.y)
    
        }
    }

    fly() {
        this.sling.bodyA = null;
    }
}