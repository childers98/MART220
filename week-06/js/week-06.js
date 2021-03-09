//background sound
// var sound = document.getElementById("sound");
// sound.loop = true;
// sound.load();

//<audio id="sound" src="assets/cheerful-background-music.mp3"></audio>




// //character variables
// var cutegirlObjects;
// var result, runresult, runresultleft, jumpresult;
// var i = 0;

// //animations
// // var animation = [];
// // var runanimation = [];

// //obstacles
// var obstacle;

// // Variable that will iterate over the animation and objects
// var counter = 0;

// // Variable that will be used when creating an interval
// var myInterval;
// var KeyIsPressed;

// // Variable to slow down movement
// var index = 0;

// var w = 87;
// var a = 65;
// var d = 68;
// var s = 83;
// var cutegirlX = 0;
// var cutegirlY = 0;
// var cutegirlMovement;

// function preload() {
//     result = loadStrings('assets/characteridle.txt');
//     runresult = loadStrings('assets/characterrun.txt');
//     // runresultleft = loadStrings('assets/characterrunleft.txt');
//     // jumpresult = loadStrings('assets/characterjump.txt');
// }

// function setup() {
//     createCanvas(750, 500);
//     cutegirlObjects = createSprite(300, 250);
//     //cutegirlObjects = loadAnimation(result[0], result[result.length-1]);
//     cutegirlObjects.addAnimation('idle', result[0], result[result.length - 1]);
//     cutegirlObjects.addAnimation('run', runresult[0], runresult[runresult.length - 1]);

//     //obstacle = createSprite(700,300); or use rock.addImage(loadImage('assests/obstacle.png'));

//     myInterval = setInterval(incrementIndex, 50);
// }

// function draw() {
//     background(90);
//     // animation(cutegirlObjects, 300, 250);
//     //image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());

//     //Key handling
//     if (keyIsDown(w)) {
//         imageclass.y -= 3;
//     }
//     if (keyIsDown(s)) {
//         imageclass.y += 3;
//     }
//     if (keyIsDown(a)) {
//         imageclass.x -= 3;
//     }
//     if (keyIsDown(d)) {
//         imageclass.x += 3;
//     }


//     // if (KeyIsPressed) {
//     // stop the idle interval
//     clearInterval(myInterval);
//     // set the variable to null
//     myInterval = null;

//     // slow the movement animations
//     index++;
//     if (index > 3) {
//       incrementIndex();
//       index = 0;
//     // }
//         if (keyDown('d')) {
//             cutegirlObjects.changeAnimation('run');
//             cutegirlObjects.velocity.x += .5;
//         }
//         else {
//             cutegirlObjects.changeAnimation('idle');
//             cutegirlObjects.velocity.x = 0;
//         }
//         currentObjects = cutegirlObjects;
//         drawSprites();
//     }
// }
    //     if (keyDown('d')) {
    //         cutegirlObjects.changeAnimation('run');
    //         cutegirlObjects.velocity.x += .5;
    //         if (cutegirlObjects.collide(obstacle)) {
    //             cutegirlObjects.changeAnimation('idle')
    //         }
    //     }
    //     else {
    //         cutegirlObjects.changeAnimation('idle');
    //         cutegirlObjects.velocity.x = 0;
    //     }

    //     cutegirlObjects.debug = mouseIsPressed;
    //     obstacle.debug = mouseIsPressed;
    //     drawSprites();
    // }

    // funtion incrementIndex()
    // {
    //     i += 1;
    //     //start array over
    //     if (i >= cutegirlObjects.length)
    //     {
    //         i = 0;
    //     }
    // }

    // function incrementIndex()
    // {
    //     // increment the index
    //     counter += 1;
    //     // at end of array begin again
    //     if (counter >= currentObjects.length) {
    //         counter = 0;
    //     }
    // }

    // Arrays with objects
var cutegirlObjects = [];
var cutegirlRunObjects = [];
var cutegirlRunLeftObjects = [];
var cutegirlJumpObjects = [];
var currentObjects = [];

// Arrays that will hold images
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var jumpanimation = [];
var currentAnimation = [];

// Variables that hold strings read in from a file
var result;
var runresult;
var runresultleft;
var jumpresult;

// Variable that will iterate over the animation and objects
var counter = 0;

// Variable that will be used when creating an interval
var myInterval;

// Variable to slow down movement
var index = 0;

var i = 0;
var j = 0;
var k = 0;
var x = 0;

// key codes
var w = 87;
var a = 65;
var d = 68;
var s = 83;
var cutegirlX = 0;
var cutegirlY = 0;
var cutegirlMovement;

//static obstacles
var obstacles = [];
var obstacleX;
var obstacleY;

// Read in all the files
function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');
  // obstactles = loadStrings('assets/static.txt');
}

function setup() {
  createCanvas(750, 500);
  //create random movement within the obstactles
  // obstacles = [random(750, 500)]
  // obstacleX = random(750);
  // obstacleY = random(500);

  // setInterval(incrementIndex, 50);
  //idle objects and set the animation array
  for (var i = 0; i < result.length; i++) {
    cutegirlObjects.push(new imageclass('assets/' + result[i], 200, 1200));
    animation[i] = cutegirlObjects[i].getImage();
  }

  // movement to the right and left
  for (var i = 0; i < runresult.length; i++) {
    cutegirlRunObjects.push(new imageclass('assets/' + runresult[i], 200, 1200));
    runanimation[i] = cutegirlRunObjects[i].getImage();
  }
  for (var i = 0; i < runresultleft.length; i++) {
    cutegirlRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 200, 1200));
    leftrunanimation[i] = cutegirlRunLeftObjects[i].getImage();
  }

  for (var i = 0; i < jumpresult.lenth; i++) {
    cutegirlJumpObjects.push(new imageclass('assests/' + jumpresult[i], 200, 1200));
    jumpanimation[i] = cutegirlJumpObjects[i].getImage();
  }

  // assign the idle objects to the generic object variable
  currentObjects = cutegirlObjects;

  // create an interval for the idle animation
  myInterval = setInterval(incrementIndex, 50);

}

// display all frames
function draw() {

  background(90);
  //display static images - something like this?
  // image(obstacle, obstacleX, obstacleY);
  // image(obstacle2, obstacleX, obstacleY);
  // image(obstacle3, obstacleX, obstacleY);
  //image(animation[i], cutegirlObjects[i].getX(), cutegirl[i].getY());

  //Key handling
  if (keyIsDown(w)) {
    imageclass.y -= 3;
  }
  if (keyIsDown(s)) {
    imageclass.y += 3;
  }
  if (keyIsDown(a)) {
    imageclass.x -= 3;
  }
  if (keyIsDown(d)) {
    imageclass.x += 3;
  }

  // check to see if any key pressed
  if (keyIsPressed) {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null
    myInterval = null;

    // slow the movement animations
    index++;
    if (index > 3) {
      incrementIndex();
      index = 0;
    }

    // to the right
    if (key == "d") {

      //image(runanimation[counter], cutegirlRunObjects[counter].getX(), cutegirlRunObjects[counter].getY());
     
      cutegirlX += 3;
      if (counter > currentAnimation.length) {
        incrementIndex();
        counter = 0;
      }
      //currentObjects[counter].setX(currentObjects[counter].getX() + 2);
      //component of the left movement
      for (var i = 0; i < cutegirlRunObjects.length; i++) {
        cutegirlRunObjects[i].setX(currentObjects[0].getX() + 5);
      }
      currentAnimation = runanimation;
      currentObjects = cutegirlRunObjects;
    }
    // to the left
    else if (key == "a") {
      //image(leftrunanimation[counter], cutegirlRunLeftObjects[counter].getX(), cutegirlRunLeftObjects[counter].getY());
     

      if (counter >= currentAnimation.length) {
        incrementIndex();
        counter = 0;
      }
      //currentObjects[counter].setX(currentObjects[counter].getX() - 2);
      for (var i = 0; i < cutegirlRunLeftObjects.length; i++) {
        cutegirlRunLeftObjects[i].setX(currentObjects[0].getX() - 5);
      }

      currentAnimation = leftrunanimation;
      currentObjects = cutegirlRunLeftObjects;
    }
  }

  else {
    if (myInterval == null) {
      myInterval = setInterval(incrementIndex, 50);
    }

    for (var i = 0; i < cutegirlObjects.length; i++) {
      cutegirlObjects[i].setX(currentObjects[0].getX());
    }

    currentObjects = cutegirlObjects;
    currentAnimation = animation;
  }

  // display the images regardless of the movement or idle
  scale(.25,.25);
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
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
