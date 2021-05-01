// //Animation
// var movieObjects = [];
//
// function setup(){
//   createCanvas(500,500);
//   for (var i = 0; i < result.length; i++){
//     movieObjects.push(new imageclass('assets/' + result[i], 0,0));
//     animation[i] = movieObjects[i].getImage();
//   }
// }
//
// function preload(){
//     movieresult= loadStrings('assets/movies.txt')
// }
//
// function draw(){
// movieObjects = createSprite(0, 0);
// movieObjects.addAnimation('movie', 'assets/' + movieresult[0], 'assets/' + movieresult[movieresult.length - 1]);
//
// movieObjects.debug = MouseIsPressed;
//
// //drawSprites();
// image()
//   }
// }


// Arrays with objects
var movieObjects = []; //cutegirlObjects
// Arrays that will hold images
var animation = [];
// Variables that hold strings read in from a file
var result;
// Variable that will iterate over the animation and objects
var counter;
// Variable that will be used when creating an interval
var myInterval;
// Variable to slow down movement
var index = 0;
var currentObjects;
var movie;

// Read in all the files
function preload() {
result = loadStrings('./assets/movies.txt');
}

function setup() {
createCanvas(500, 500);

// setInterval(incrementIndex, 50);
//idle objects and set the animation array
for (var i = 0; i < result.length; i++) {
movieObjects.push(new imageclass('movie', 'assets/' + result[0], 'assets/' + result[result.length - 1]));
animation[i] = movieObjects[i].getImage();
}

// assign the idle objects to the generic object variable
currentObjects = movieObjects;

// create an interval for the idle animation
myInterval = setInterval(incrementIndex, 50);

}

// display all frames
function draw() {

background(90);

// slow the movement animations
// index++;
// if (index > 3) {
//   incrementIndex();
//   index = 0;
// }

// display the images regardless of the movement or idle
scale(.25,.25);
image(currentAnimation[movie], currentObjects[movie].getX(), currentObjects[movie].getY());
currentAnimation = animation;
}

function incrementIndex() {
// increment the index
counter += 1;
// at end of array begin again
if (counter >= currentObjects.length) {
counter = 0;
}
//   console.log(counter)
}
