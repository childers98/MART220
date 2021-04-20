//Movie
var mainColor = 255;

function setup() {
  //creates area where everything is going to be made on the canvas
    createCanvas(400, 400);
    background(255);
    frameRate(20);
    noStroke();
    rectMode(CENTER);
}
function draw() {
  //random circles
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);
    rotate(random(100));
    rect(random(400), random(400), size);
  
//switches between color and no color
   if (frameCount % 2 == 0) {
       mainColor = 255 - 100; // 255 0 255 0 255 0 ..
    }
//where the frames are saved to get the movie effect
    saveFrames("myMovie",".png",1,20);
//stops draw frame from continuing to draw  forever
    if (frameCount > 20) { // 1 second * 45 fps = 45
        noLoop();
    }
}