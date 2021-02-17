// Arrays with objects
var cutegirlObjects = [];
var cutegirlRunObjects = [];
var cutegirlRunLeftObjects = [];
var cutegirlJumpObjects = [];
var currentObjects;

// Arrays that will hold images
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var jumpanimation = [];
var currentAnimation;

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
function preload()
{
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');
  obstactles = loadStrings('assets/static.txt');
}

function setup()
{
  createCanvas(750, 500);
  //create random movement within the obstactles
  // obstacles = [random(750, 500)]
  obstacleX = random(750);
  obstacleY = random(500);

  // setInterval(incrementIndex, 50);
  //idle objects and set the animation array
  for (var i = 0; i < result.length; i++)
  {
    cutegirlObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = cutegirlObjects[i].getImage();
  }

  // movement to the right and left
  for (var i = 0; i < runresult.length; i++)
  {
    cutegirlRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
    runanimation[i] = cutegirlRunObjects[i].getImage();
  }
  for (var i = 0; i < runresultleft.length; i++)
  {
    cutegirlRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
    leftrunanimation[i] = cutegirlRunLeftObjects[i].getImage();
  }

  for (var i = 0; i < jumpresult.lenth; i++)
  {
    cutegirlJumpObjects.push(new imageclass('assests/' + jumpresult[i], 0, 0));
    jumpanimation[i] = cutegirlJumpObjects[i].getImage();
  }

  // assign the idle objects to the generic object variable
  currentObjects = cutegirlObjects;

  // create an interval for the idle animation
  myInterval = setInterval(incrementIndex, 50);

}

// display all frames
function draw()
{

  background(90);
  //display static images - something like this?
  image(obstacle, obstacleX, obstacleY);
  image(obstacle2, obstacleX, obstacleY);
  image(obstacle3, obstacleX, obstacleY);
  //image(animation[i], cutegirlObjects[i].getX(), cutegirl[i].getY());

//Key handling
  if(keyIsDown(w))
  {
      this.y -= 3;
  }
  if(keyIsDown(s))
  {
      this.y += 3;
  }
  if(keyIsDown(a))
  {
      this.X -= 3;
  }
  if(keyIsDown(d))
  {
      this.X += 3;
  }

  // check to see if any key pressed
  if (keyIsPressed)
  {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null
    myInterval = null;

    // slow the movement animations
    index++;
    if (index > 3)
    {
      incrementIndex();
      index = 0;
    }

    // to the right
    if (key == "d")
    {
      image(runanimation[i], cutegirlRunObjects[i].getX(), cutegirlRunObjects[i].getY());
      currentAnimation = runanimation;
      currentObjects = cutegirlRunObjects;
      cutegirlX += 3;
      counter++;
      if(counter > currentAnimation.length)
      {
        incrementRunIndex();
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() + 2);
    }
    //component of the left movement??
    for (var i = 0; i < cutegirlRunLeftObjects.length; i++)
    {
      cutegirlRunLeftObjects[i].setX(currentObjects[0].getX());
    }
    cutegirlRunObjects = currentObjects;
  }
  // to the left
else if(key == "a")
    {
      image(runleftanimation[i], cutegirlRunLeftObjects[i].getX(), cutegirlRunLeftObjects[i].getY());
      currentAnimation = leftrunanimation;
      currentObjects = cutegirlRunLeftObjects;
      counter++;

      if(counter >= currentAnimation.length)
      {
        incrementRunLeftIndex();
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() - 2);

      for (var i = 0; i < cutegirlRunObjects.length; i++)
      {
        cutegirlRunObjects[i].setX(currentObjects[0].getX());
      }
      cutegirlRunLeftObjects = currentObjects;
    }
  //   for (var i = 0; i < cutegirlObjects.length; i++)
  //   {
  //     cutegirlRunObjects[i].setX(currentObjects[0].getX());
  //
  // }

//TEST #1
  //     // assign the generic animation and object variables
  //     currentAnimation = runanimation;
  //     currentObjects = cutegirlRunObjects;
  //
  //     // keep in mind length of animations and make sure we don't go over
  //     if (counter >= currentAnimation.length)
  //     {
  //       counter = 0;
  //     }
  //
  //     // move the animation by updating the x component
  //     currentObjects[counter].setX(currentObjects[counter].getX() + 2);
  //
  //     // make sure you you assign the x component of the left movement too
  //     for (var i = 0; i < cutegirlRunLeftObjects.length; i++)
  //     {
  //       cutegirlRunLeftObjects[i].setX(currentObjects[0].getX());
  //     }
  //
  //
  //     // make sure the movement object is assigned to the current object again
  //     cutegirlRunObjects = currentObjects;
  //
  //     // this just the opposite of the above.  The character moves to the left here instead
  //   }
  //   else if (key == "a")
  //   {
  //
  //     currentAnimation = leftrunanimation;
  //     currentObjects = cutegirlRunLeftObjects;
  //
  //     if (counter >= currentAnimation.length)
  //     {
  //       counter = 0;
  //     }
  //     currentObjects[counter].setX(currentObjects[counter].getX() - 2);
  //
  //     for (var i = 0; i < cutegirlRunObjects.length; i++)
  //     {
  //       cutegirlRunObjects[i].setX(currentObjects[0].getX());
  //     }
  //
  //
  //     cutegirlRunLeftObjects = currentObjects;
  //   }
  //
  //   for (var i = 0; i < cutegirlObjects.length; i++)
  //     cutegirlObjects[i].setX(currentObjects[0].getX());
  //
  // }
  // check for the idle and reset the animations
  //END TEST #1

  else
  {
    if (myInterval == null)
    {
      myInterval = setInterval(incrementIndex, 50);
    }
    currentObjects = cutegirlObjects;
    currentAnimation = animation;
  }

  // display the images regardless of the movement or idle
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

}

function incrementIndex()
{
  // increment the index
  counter += 1;
  // at end of array begin again
  if (counter >= currentObjects.length)
  {
    counter = 0;
  }
}
