class stone{
	constructor(x,y)
	{

	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
this.x = x;
this.y = y;
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
