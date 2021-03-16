//model
let heart;

//textures for shapes
let colorful;
let forest;
let waves;
let clouds;
let ocean;
let grass;

//shape
let shapeArray = [];

//mouse clicked
var boxTranslationX = -250;
var boxTranslationY = -250;
var torusTranslationX = 200;
var torusTranslationY = 200;


function preload() 
{
    //load with normalise parameter set at true
    heart = loadModel('assets/heart.obj', true);
    colorful = loadImage('assets/colorful.jpg');
    waves = loadImage('assets/wave.jpg');
    forest = loadImage('assets/forest.jpg');
    clouds = loadImage('assets/clouds.jpg');
    grass = loadImage('assets/grass.png');
    ocean = loadImage('assets/ocean.jpg');

}


function setup() 
{
    createCanvas(750, 500, WEBGL); //center of canvas is in the middle
    shapeArray.push(new shapeClass("box", 150, 150, 150, boxTranslationX, boxTranslationY, .02, .3, 0, ocean));
    shapeArray.push(new shapeClass("cylinder", 50, 150, 20, -150, 200, .05, .01, 0, colorful));
    shapeArray.push(new shapeClass("torus", 55, 20, 30, torusTranslationX, torusTranslationY, 0, .05, 0, grass));
    shapeArray.push(new shapeClass("ellipsoid", 50, 150, 75, 300, -300, .05, 0, 0, waves));
    shapeArray.push(new shapeClass("cone", 20, 20, 10, 300, 300, .05, 0, 0, forest));
    shapeArray.push(new shapeClass("plane", 75, 75, 10, -175, 100, .25, 0, 0, clouds));
}


function draw(random) 
{
    background(120);

    //created model (heart)
    //push();
    scale(0.5); // to make model fit
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); //effect
    //texture(colorful); //create texture on 3D objects
    model(heart);
    //pop();

    //display simple shapes
    for (var i = 0; i < shapeArray.length; i++)
    {
        shapeArray[i].draw(frameCount);
    }

    //add a custom shape (triangle)
    push();
    rotateY(frameCount * 0.01);
    translate(-250, -250);
    normalMaterial();
    texture(clouds); //not sure why this isn't working
    beginShape();
    vertex(200, 200, 100, 1, 1);
    vertex(0, 200, 50, 0, 1);
    vertex(20, 10, 100, 1, 0);
    endShape(CLOSE);
    pop();

    //change location - not working
    if (mouseIsPressed) 
    {
        boxTranslationX = 0;
        boxTranslationY = 0;
        boxTranslationX = Math.random(.1);
        boxTranslationY = Math.random(.1);

        torusTranslationX = 0;
        torusTranslationY = 0;
        torusTranslationX = Math.random(.1);
        torusTranslationY = Math.random(.1);
        // (Math.floor(Math.random() * 10) + 1);
    }


}

//cone(radius, height, deatailX, detailY, cap)   
// push(); //save
// pop(); //restore
//torus(donut) // torus(50, 15, 24, 16); 
//torus(radius,tubeRadius,detailX,detailY)
//plane(width,height,detailX(max: 1),detailY (max: 1))

// // this allows us to create any type of box
// function createBox(w, h, d, transX, transY, move)
//  {
//   push();
//   if (move)
//    {
//     translate(transX + x, transY);
//   }
//   else
//   {
//     translate(transX, transY);
//   }

//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(w, h, d);
//   pop();