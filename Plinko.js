class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(0, 115, 50);
        stroke(0, 115, 50);
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}