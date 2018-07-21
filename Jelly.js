function Jelly() {
	this.token;

	this.dotRows = 17;
	this.dotCols = 5;

	this.dotArray = [];

	this.creatureX = 0;
	this.creatureY = 0;

	this.angleX = 0;
	this.angleY = 0;
	this.offset = 0.01;

	this.freq = 0.3;
	this.pos = 0;
	this.rgb = [];

	this.setup = function() {
		this.angleY = PI/2
	
		for (let i = 0; i < this.dotCols; i++) {
			this.dotArray[i] = [];
			for (let j = 0; j < this.dotRows; j++) {
				this.dotArray[i][j] = new Dot;
				this.dotArray[i][j].mass += random(-5, 5);
			}
		}
	}

	this.update = function() {
		this.render();
		this.rainbow();
	
		if (this.token == 1) {
			this.creatureX = map(sin(this.angleX), -1, 1, 200, width - 200);
			this.creatureY = map(sin(this.angleY), -1, 1, height - 200, 200);
		} else if (this.token == 0) {
			this.creatureX = mouseX;
			this.creatureY = mouseY;
		}
	
		this.angleX += this.offset*2;
		this.angleY += this.offset;
	}

	this.render = function() {
		for (let j = 0; j < this.dotCols; j++) {
			this.dotArray[j][0].update(this.creatureX + j*20, this.creatureY);
			for (let i = 1; i < this.dotRows; i++) {
				let anchorX = this.dotArray[j][i-1].pos[0];
				let anchorY = this.dotArray[j][i-1].pos[1];
				this.dotArray[j][i].update(anchorX, anchorY);
			}
		}
		ellipse(this.creatureX + 40, this.creatureY, 100, 50);
	}

	this.rainbow = function() {
		for (let i = 0; i < 3; i++) {
			this.rgb[i] = sin(this.freq*this.pos + i*2) * 127 + 128;
		}
	
		fill(this.rgb[0], this.rgb[1], this.rgb[2]);
	
		this.pos += random(0.01, 0.1);
	}
}