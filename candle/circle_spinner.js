var freq = 70;
var old_freq_value = 0;
function setup(){
	createCanvas(400,400);
	background(100);
	// lineMode(CENTER);
	log_btn = createButton("log");
	freq_slider = createSlider(0,400,1,1);
}
var i = -255;
function draw(){
	// background(random(0,255));
	i+=freq_slider.value();
	if(i > 255){
		i=-255;
	}

	if(freq_slider.value()!=old_freq_value){
		print("freq:",freq_slider.value());
		old_freq_value = freq_slider.value();
	}

	push();
	stroke(255);
	strokeWeight(0);
	dia = map(abs(i),0,255,0,400);
	fill("#a32");
	circle(width/2,height/2,dia+random(0,20));
	pop();
	// rotating radius 
	push();
	strokeWeight(5);
	stroke('#fae');
	translate(width/2,height/2);
	rotate(map(i,-255,255,0,4*PI));
	line(0,0,dia/2,0);

	// rotate(2*PI);
	pop();
}
