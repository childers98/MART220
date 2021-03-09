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

// Variable for to slow the movement animations down
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



// Read in all the files, populate the string arrays from the assets folder
function preload()
{
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');
  jumpresult = loadStrings('assets/characterjump.txt');

}

function setup()
{

  createCanvas(750, 500);
  setInterval(incrementIndex, 50);
  //idle objects and set the animation array
  for (var i = 0; i < result.length; i++)
  {
    cutegirlObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = cutegirlObjects[i].getImage();
  }

  // create both movement to the right and left and the animations in this for loop
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

// display all the frames using the draw function as a loop
function draw()
{

  background(90);
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

  // check to see if any keys have been pressed
  if (keyIsPressed)
  {
  //   // stop the idle interval
  //   clearInterval(myInterval);
  //   // set the variable to null - we will check for this later
  //   myInterval = null;
  //
  //   // use this if statement to slow the movement animations
  //   index++;
  //   if (index > 3)
  //   {
  //     incrementIndex();
  //     index = 0;
  //   }
  //
    // move to the right
    if (key == "d")
    {
      // currentAnimation = runanimation;
      // currentObjects = cutegirlObjects;

      image(runanimation[k], cutegirlRunObjects[k].getX(), cutegirlRunObjects[k].getY());
      cutegirlX += 3;
      counter++;
      if(counter > 5)
      {
        incrementIndex();
        counter = 0;
      }
    }
  }
  else
  {
    image(animation[i], cutegirlObjects[i].getX(), cutegirlRunObjects[i].getY());
  // }
  // // to the left
  // if(keyIsPressed)
  // {
  //   if(key == "a")
  //   {
  //     image(runleftanimation[x], cutegirlRunLeftObjects[x].getX(), cutegirlRunLeftObjects[x].getY());
  //     counter++;
  //     if(counter > 5)
  //     {
  //       incrementIndex();
  //       counter = 0;
  //     }
  //   }
  // }
  // else
  // {
  //   image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects.getY());
  // }
  // if(keyIsPressed)
  // {
  //   if(key == "x")
  //   {
  //     image(jumpanimation[j], cutegirlJumpObjects[j].getX(), cutegirlJumpObjects[j].getY());
  //     counter++;
  //     if(counter > 5)
  //     {
  //       incrementJumpIndex();
  //       counter = 0;
  //     }
  //   }
  // }
  // else
  // {
  //   image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
  // }
  //
  // }






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
  // else
  // {
  //   if (myInterval == null)
  //   {
  //     myInterval = setInterval(incrementIndex, 50);
  //   }
  //   currentObjects = cutegirlObjects;
  //   currentAnimation = animation;
  // }
  //
  // // display the images regardless of the movement or idle
  // image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

// }

function incrementIndex()
{
  // increment the index
  counter += 1;
  // if we reach the end of the array, start over
  if (counter >= currentObjects.length)
  {
    counter = 0;
  }
}
