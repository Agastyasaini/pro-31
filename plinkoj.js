class plinkoclass {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipse(0,0,pos.x,pos.y);
      ellipseMode(CENTER);
      fill("white");

      
    }
  };
  
