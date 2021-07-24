class Ground 
{ 
 
  constructor(x, y, w, h, r) 
  {
    let options = {
      isStatic:true
    }
    //matter
    this.body = Bodies.rectangle(x, y, w, h, options);
    rotate(this.body, r);

    //p5
   
    this.r = r;
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    angleMode(DEGREES);
    rectMode(CENTER);
    ellipseMode(RADIUS);
     
    var pos = this.body.position;


    push();
    
    stroke(255);
    fill("grey");
    translate(pos.x,pos.y);
    rotate(this.r);
    rect(0,0, this.w, this.h);
    
    pop();
  }
  
}


