function Dot() {
	this.timeStep = 0.2;
	this.k = 3; //Spring constant
	this.resistance = 6; //Air resistance
	this.gravity = 4; //Gravitational constant
	this.mass = 7; //Mass of each point
	
	this.force = [0, 0]; //Forces for x and y
	this.pos = [0, 0]; //Positions for x and y
	this.velocity = [0, 0]; //Velocity of x and y
	this.acceleration = [0, 0]; //Acceleration of x and y

	this.update = function(anchorX, anchorY) {
		for (let i = 0; i < 2; i++) {
			if (i == 1) {
				this.force[i] = -this.k * (this.pos[i] - anchorY)
								+ this.mass * this.gravity
								- this.resistance * this.velocity[i];
			} else if (i == 0) {
				this.force[i] = -this.k * (this.pos[i] - anchorX)
								- this.resistance * this.velocity[i];
			}
			this.acceleration[i] = this.force[i]/this.mass;
			this.velocity[i] += this.acceleration[i]*this.timeStep;
			this.pos[i] += this.velocity[i]*this.timeStep;
		}
		this.draw(anchorX, anchorY);
	}
	
	this.draw = function(anchorX, anchorY) {
		ellipse(this.pos[0], this.pos[1], this.mass);
		stroke(255);
		line(anchorX, anchorY, this.pos[0], this.pos[1]);
	}
}