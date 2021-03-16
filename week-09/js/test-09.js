  
// create two variables for textures 
let grass;
let cloud;

// create a variable for the model
let heart;

let shapeArray = [];
// create two variables for the translation positions
var boxTranslationX = -100;
var boxTranslationY = -100;

// this function will ensure the assets are loaded prior to setup
function preload() {
  cloud = loadImage('assets/clouds.jpg');
  french = loadImage('assets/grass.png');
  heart = loadModel('assets/heart.obj', true);
}

// create the canvas of 800 width by 600 height
function setup() {
  createCanvas(800, 600, WEBGL);

  // add two simple shapes to the simple shape array
  shapeArray.push(new shapeClass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, grass));
  shapeArray.push(new shapeClass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, cloud));
}

function draw() {

  background(200);
  normalMaterial();
  // this is required to make sure the custom shape will be textured
  image(cloud);

  // display the simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // add a textured cone
  push();
  translate(-300, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(cloud);
  cone(100, 70);
  pop();

  // add a textured ellipsoid
  push();
  translate(-250, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(cloud);
  ellipsoid(30, 40, 140);
  pop();

  // add a textured torus
  push();
  translate(150, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(cloud);
  torus(30, 15);
  pop();

  // add a custom shape
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(-250, -250);
  texture(cloud);
  beginShape();
  vertex(0, 0, 100, 0, 0);
  vertex(200, 0, 50, 1, 0);
  vertex(200, 200, 100, 1, 1);
  vertex(0, 200, 50, 0, 1);
  
  endShape(CLOSE);
  pop();

  // add a texture model
  push();
  scale(0.7); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(french);
  model(heart);
  pop();

  // change the location of the box
  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}