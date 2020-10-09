class Red{

constructor(x,y,width,height) {

    var options = {
        isStatic: false
    }
this.body = Bodies.rectangle(x,y, width, height, options);
this.width = width;
this.height = height;
//World.add(world, body);
}

display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y, this.width, this.height);
}

}