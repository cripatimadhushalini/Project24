class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4)
      stroke("black");
      fill("brown");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }; 