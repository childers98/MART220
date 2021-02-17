//arrays with my objects
var cutegirl;
var cutegirlObjects = [];
var cutegirlRunObjects = [];
var cutegirlJumpObjects = [];
var cutegirlRunLeftObjects = [];
var currentObjects;

//arrays with images
var animation = [];
var runanimation = [];
var runleftanimation = [];
var jumpanimation = [];
var currentAnimation = [];

//variables that will hold the strings read in
var result;
var runresult;
var runresultleft;

//variable that will iterate over the animation and objects
var counter = 0;
//variable that will be used when creating an interval
var myInterval;
// variable to slow the movement
var index = 0;

var i = 0;
var j = 0;
var k = 0;
var x = 0;
var counter = 0;
//key codes
var w = 87;
var a = 65;
var d = 68;
var s = 83;
var cutegirlX = 0;
var cutegirlY = 0;
var cutegirlMovement;


function preload() {

  result = loadStrings('assests/characteridle.txt');
  runresult = loadStrings('assests/characterrun.txt');
  runresultleft = loadStrings('assests/characterrunleft.txt');


    // Idle assests and objects

  }

function setup() {
    //canvas
    createCanvas(750, 500);
    for (var i = 0; i < result.length; i++)
    {
        animation[i] = cutegirlObjects[i].getImage();

    }
    // create movement for L and R
    for (var i = 0; i < runresult.length; i++)
    {
      cutegirlRunObjects.push(new imageclass('assests/' + runresult[i], 0, 0));
      runanimation[i] = cutegirlRunObjects[i].getImage();
      cutegirlRunLeftObjects.push(new imageclass('assests/' + runresultleft[i], 0, 0));
      runleftanimation[i] = cutegirlRunLeftObjects[i].getImage();
    }
    //assign the idle objects to the generic object variable
    currentObjects = cutegirlObjects;

    //interval for the idle animation
    myInterval = setInterval(incrementIndex, 50);


//     for(var i = 0; i < cutegirlRunObjects.length; i++)
//     {
//         runanimation[i] = cutegirlRunObjects[i].getImage();
//     }
//
//     // added the jump animation
//     for(var i = 0; i < cutegirlJumpObjects.length; i++)
//     {
//         jumpanimation[i] = cutegirlJumpObjects[i].getImage();
//     }
// }
//

}

// display all the frames using the draw function as a loop
function draw() {

    background(250);
    // since we don't need a function call here, we can comment this one out.
    //cutegirlMovement();
    // since this function doesn't exist, we can comment this out.
   // createPlayer();

    //key handling
    // we want to try and avoid function calls inside of our draw function
   // function cutegirlMovement()
  //  {
        if(keyIsDown(w))
        {
            this.y -= 8;
        }
        if(keyIsDown(s))
        {
            this.y += 8;
        }
        if(keyIsDown(a))
        {
            this.X -= 8;
        }
        if(keyIsDown(d))
        {
            this.X += 8;
        }


    // going to the right
    if(keyIsPressed)
    {
      //stop the idle interval
      clearInterval(myInterval);
      //set variable to null
      myInterval = null;

      //use this if statement to slow animation
      index++;
      if (index > 3)
      {
        increamentIndex();
        index = 0;
      }
      //to the right
        if(key == "d")
        {
          //generic animation and object variables
          currentAnimation = runanimation;
          currentObjects = cutegirlRunObjects;

          //don't go over arrays
          if (counter >= currentAnimation.lenth)
          {
            counter = 0;
          }

          //move the animation by updating the x component
          currentObjects[counter].setX(currentObjects[counter].getX() + 2);

          //assign the x component of the left movement
          for (var i = 0; i < cutegirlRunObjects.length; i++);
          {
            cutegirlRunLeftObjects[i].setX(currentObjects[0].getX());
          }

          //movement of object is assigned to the current object again
          cutegirlRunObjects = currentObjects;

          //opposite of above
        }
        else if (key == "a")
        {
          currentAnimation = runleftanimation;
          currentObjects = cutegirlRunLeftObjects;

          if (counter >= currentAnimation.length)
          {
            counter = 0;
          }
          currentObjects[counter].setX(currentObjects[counter].getX() - 2);
          for (var i = 0; i < cutegirlRunObjects.length; i++)
          {
            cutegirlRunObjects[i].setX(currentObjects[0].getX());
          }

          cutegirlRunLeftObjects = currentObjects;
        }

        for (var i = 0, i < cutegirlObjects.length; i++)
        cutegirlObjects[i].setX(currentObjects[0].getY());
      }
      //display image regardless
      image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
    }

      //check for idle and reset animation
      function incrementIndex()
      {
        //increment index
        counter += 1;
        // at end of array start over
        if (counter >= currentObjects.length)
        {
          counter = 0;
        }
      }



//
//             // continue to display the image
//             // since this is the run animation, we are going to use "k" since that is what is being
//             // incremented in the incrementRunIdex
//             image(runanimation[k], cutegirlRunObjects[k].getX(), cutegirlRunObjects[k].getY());
//             // this section slows the running down
//             cutegirlX += 3;
//             counter++;
//             if(counter > 5)
//             {
//                 // increment the index "j"
//                 incrementRunIndex();
//                 // restart our counter
//                 counter = 0;
//             }
//         }
//     }
//     else
//     {
//         image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
//     }
//     // to the left
//     if(keyIsPressed)
//     {
//         if(key == "a")
//         {
//             // continue to display the image
//             // same goes here. Since we are running, we will use the "k" to increment
//             // our animation frame
//             image(runanimation[k], cutegirlRunObjects[k].getX(), cutegirlRunObjects[k].getY());
//             // translate(myImage.width,0);
//             // scale(-1.0,1.0);    // flip x-axis backwards
//             // image(myImage,x,y);
//             // this section slows the running down
//             counter++;
//             if(counter > 5)
//             {
//                 // increment the index "j"
//                 incrementRunIndex();
//                 // restart our counter
//                 counter = 0;
//             }
//         }
//     }
//     else
//     {
//         image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
//     }
//
//     // this will be out jumping one
//     if(keyIsPressed)
//     {
//         if(key == "x")
//         {
//             // continue to display the image
//             // this time, we are going to use the incrementJumpIndex so
//             // we will use "j" to increment the jump animation
//             image(jumpanimation[j], cutegirlJumpObjects[j].getX(), cutegirlJumpObjects[j].getY());
//             // this section slows the running down
//             counter++;
//             if(counter > 5)
//             {
//                 // increment the index "j"
//                 incrementJumpIndex();
//                 // restart our counter
//                 counter = 0;
//             }
//         }
//     }
//     else
//     {
//         image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
//     }
//
//
// }
//
//
// function incrementIndex()
// {
//      // increment the index
//      i += 1;
//
//      // at end of array start over
//      if (i >= animation.length) {
//          i = 0;
//      }
// }
//
// function incrementRunIndex()
// {
//
//      // increment the index
//      k += 1;
//
//      // at end of array start over
//      if (k >= runanimation.length) {
//          k = 0;
//      }
// }
// function incrementJumpIndex()
// {
//   j += 1;
//   if (j >= jumpanimation.length) {
//     j = 0;
//   }
// }
