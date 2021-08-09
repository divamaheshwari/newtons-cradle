class rope{
	constructor(pointA, bodyB)
	{
		var options= {
			pointA: pointA,
			bodyB: bodyB,
			//length: 100,
			//stiffness: 0.8
		}

		this.rope = Constraint.create(options);
		World.add(world, this.rope);

	//create rope constraint here

	}

		display(){
			line(this.rope.pointA.x, this.rope.pointA.y+10, this.rope.bodyB. position.x, this.rope.bodyB.position.y-25);

		}



    //create display() here 

}
