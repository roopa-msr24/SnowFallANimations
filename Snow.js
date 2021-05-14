class Snow {
    constructor(x,y,r ){
        var options = {
            friction: 10,
            restitution: -90,
            density:100000000

        }
        
      
       
        this.image=loadImage("snowflake.jpg")
        this.snowFall= Bodies.circle(x,y, 5, options)
        this.radius  = 15;
        World.add(world, this.snowFall);


    }

    updateY(){
        if(this.snowFall.position.y > height){
            Matter.Body.setPosition(this.snowFall, {x:random(0,1400), y:random(0,600)})
        }

    }
 showSnow(){

    fill("white");
    stroke(0);
    ellipseMode(CENTER)
    ellipse(this.snowFall.position.x, this.snowFall.position.y, this.radius, this.radius)


 }
}














