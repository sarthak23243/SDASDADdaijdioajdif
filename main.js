function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(640,250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 240, 150, 150,150);
  tint(tint_color);

  fill(128,0,128);
  stroke(128,0,128);
  rect(25,50,50,360)
  rect(10,25,600,50)
  rect(570,50,50,360)
  rect(10,405,600,50)
  fill(255,0,0);
  stroke(255,0,0,25);
  circle(50,50,100);
  circle(590,50,100);
  circle(590,430,100);
  circle(50,430,100);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

