
var cutegirl;
var animation = [];
var runanimation = [];
var cutegirlObjects = [];
var cutegirlRunObjects = [];
var i = 0;
var j = 0;
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
    // Idle assests and objects
    cutegirl = new imageclass('assets/Idle (1).png', 0, 0);
    cutegirlObjects[0] = cutegirl;
    cutegirl = new imageclass('assets/Idle (2).png', 0, 0);
    cutegirlObjects[1] = cutegirl;
    cutegirl = new imageclass('assets/Idle (3).png', 0, 0);
    cutegirlObjects[2] = cutegirl;
    cutegirl = new imageclass('assets/Idle (4).png', 0, 0);
    cutegirlObjects[3] = cutegirl;
    cutegirl = new imageclass('assets/Idle (5).png', 0, 0);
    cutegirlObjects[4] = cutegirl;
    cutegirl = new imageclass('assets/Idle (6).png', 0, 0);
    cutegirlObjects[5] = cutegirl;
    cutegirl = new imageclass('assets/Idle (7).png', 0, 0);
    cutegirlObjects[6] = cutegirl;
    cutegirl = new imageclass('assets/Idle (8).png', 0, 0);
    cutegirlObjects[7] = cutegirl;
    cutegirl = new imageclass('assets/Idle (9).png', 0, 0);
    cutegirlObjects[8] = cutegirl;
    cutegirl = new imageclass('assets/Idle (10).png', 0, 0);
    cutegirlObjects[9] = cutegirl;

    // Run assets and objects
    cutegirl = new imageclass('assets/Run (1).png', 0, 0);
    cutegirlRunObjects[0] = cutegirl;
    cutegirl = new imageclass('assets/Run (2).png', 0, 0);
    cutegirlRunObjects[1] = cutegirl;
    cutegirl = new imageclass('assets/Run (3).png', 0, 0);
    cutegirlRunObjects[2] = cutegirl;
    cutegirl = new imageclass('assets/Run (4).png', 0, 0);
    cutegirlRunObjects[3] = cutegirl;
    cutegirl = new imageclass('assets/Run (5).png', 0, 0);
    cutegirlRunObjects[4] = cutegirl;
    cutegirl = new imageclass('assets/Run (6).png', 0, 0);
    cutegirlRunObjects[5] = cutegirl;
    cutegirl = new imageclass('assets/Run (7).png', 0, 0);
    cutegirlRunObjects[6] = cutegirl;
    cutegirl = new imageclass('assets/Run (8).png', 0, 0);
    cutegirlRunObjects[7] = cutegirl;

    // jump assests and objects
    cutegirl = new imageclass('assets/Jump (1).png', 0, 0);
    cutegirlRunObjects[0] = cutegirl;
    cutegirl = new imageclass('assets/Jump (2).png', 0, 0);
    cutegirlRunObjects[1] = cutegirl;
    cutegirl = new imageclass('assets/Jump (3).png', 0, 0);
    cutegirlRunObjects[2] = cutegirl;
    cutegirl = new imageclass('assets/Jump (4).png', 0, 0);
    cutegirlRunObjects[3] = cutegirl;
    cutegirl = new imageclass('assets/Jump (5).png', 0, 0);
    cutegirlRunObjects[4] = cutegirl;
    cutegirl = new imageclass('assets/Jump (6).png', 0, 0);
    cutegirlRunObjects[5] = cutegirl;
    cutegirl = new imageclass('assets/Jump (7).png', 0, 0);
    cutegirlRunObjects[6] = cutegirl;
    cutegirl = new imageclass('assets/Jump (8).png', 0, 0);
    cutegirlRunObjects[7] = cutegirl;

    for (var i = 0; i < cutegirlObjects.length; i++) {
        animation[i] = cutegirlObjects[i].getImage();

    }

    for(var i = 0; i < cutegirlRunObjects.length; i++)
    {
        runanimation[i] = cutegirlRunObjects[i].getImage();
    }
}

// create the canvas
function setup() {

    createCanvas(750, 500);
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    // cutegirlMovement();
    // creatPlayer();

    //key handling
    function cutegirlMovement()
    {
      if(keyIsDown(w))
      {
        cutegirlY -= 3;
      }
      if(keyIsDown(s))
      {
        cutegirlY += 3;
      }
      if(keyIsDown(a))
      {
      cutegirlX -= 3;
      }
      if(keyIsDown(d))
      {
      cutegirlX += 3;
    }
    }

    // draw each frame
    if(keyIsPressed)
    {
        if(key == "x")
        {
            // continue to display the image
            image(runanimation[j], cutegirlRunObjects[j].getX(), cutegirlRunObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        }
    }
    else
    {
        image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
    }
    // going to the right
    if(keyIsPressed)
    {
        if(key == "d")
        {
            // continue to display the image
            image(runanimation[j], cutegirlRunObjects[j].getX(), cutegirlRunObjects[j].getY());
            // this section slows the running down
            cutegirlX += 3;
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        }
    }
    else
    {
        image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
    }
    // to the left
    if(keyIsPressed)
    {
        if(key == "a")
        {
            // continue to display the image
            image(runanimation[j], cutegirlRunObjects[j].getX(), cutegirlRunObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        }
    }
    else
    {
        image(animation[i], cutegirlObjects[i].getX(), cutegirlObjects[i].getY());
    }


}





function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if we reach the end of the array, start over
     if (j >= runanimation.length) {
         j = 0;
     }

}
