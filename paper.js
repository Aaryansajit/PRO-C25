class Paper {
    constructor(x ,y,diameter){
        var options = {
            isStatic : false,
            restituton:0.3,
            friction : 3,
            density :1.2
        }
        this.image=loadImage('sprites/paper.png')
        this.body=Bodies.circle(x,y,diameter/2,options);
        this.diameter=diameter;
        World.add(world,this.body); 

    }
    display(){
        push()
        fill("blue");
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        image(this.image,0,0,this.diameter,this.diameter);
        pop()
    }
}