var flame = 0;
var flame_shades = ["#dfc610c7","#df8b0be0"]
function setup(){
	createCanvas(400,400);
	background(100);
	rectMode(CENTER);
}

function draw(){
	
	noStroke();
	fill("white");
	rect(width/2,height/2+100,50,200);

	//thread 


	flame += random(0.01,0.1);
	//flame

	stroke(random(flame_shades));
	strokeWeight(noise(flame)*10);
	line(width/2,height/2,150+(noise(flame)*100),height/2-30);
	line(150+(noise(flame)*100),height/2-30,200, 100);
}