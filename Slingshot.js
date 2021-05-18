class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.rubberB=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            
            image(this.sling1,220,20);
            image(this.sling2,190,15);
            stroke(43,25,0);
            if(pointA.x<220){
             strokeWeight(10);
             line(pointA.x-24, pointA.y, pointB.x, pointB.y-50);
             line(pointA.x-24, pointA.y, pointB.x+50, pointB.y-50);
             image(this.rubberB,pointA.x-26,pointA.y-15,15,30);
            }else{
                strokeWeight(5);
                line(pointA.x+24, pointA.y, pointB.x, pointB.y-50);
                line(pointA.x+24, pointA.y, pointB.x+50, pointB.y-50);
                image(this.rubberB,pointA.x+23,pointA.y-15,15,30);
            }
        }
    }
    
}