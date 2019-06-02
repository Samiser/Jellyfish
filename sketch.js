let sam = new Jelly;

function setup() {
	createCanvas(windowWidth, windowHeight);
	sam.setup();
	
	sam.token = 1;
	
	sam.offset = 0.015
}

function draw() {
	background(0, 135, 100);
	sam.update();
}
