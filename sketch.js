let jaz = new Jelly;
let sam = new Jelly;

function setup() {
	createCanvas(windowWidth, windowHeight);
	jaz.setup();
	sam.setup();
	
	jaz.token = 1;
	sam.token = 1;
	
	sam.offset = 0.015
}

function draw() {
	background(0, 135, 100);
	jaz.update();
	sam.update();
}